export const prerender = false;

import type { APIRoute } from "astro";
import { ServerClient } from "postmark";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(name: unknown, email: unknown, message: unknown): name is string {
	return (
		typeof name === "string" &&
		name.trim().length > 0 &&
		name.trim().length <= 200 &&
		typeof email === "string" &&
		email.trim().length <= 320 &&
		EMAIL_RE.test(email.trim()) &&
		typeof message === "string" &&
		message.trim().length > 0 &&
		message.trim().length <= 5000
	);
}

export const POST: APIRoute = async ({ request }) => {
	let body: { name?: unknown; email?: unknown; message?: unknown; company?: unknown };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400 });
	}

	const { name, email, message, company } = body;

	// Honeypot: real visitors never fill this hidden field.
	if (company || !isValid(name, email, message)) {
		return new Response(JSON.stringify({ error: "Please fill in all fields with valid values." }), {
			status: 400,
		});
	}

	const trimmedName = (name as string).trim();
	const trimmedEmail = (email as string).trim();
	const trimmedMessage = (message as string).trim();

	const client = new ServerClient(import.meta.env.POSTMARK_SERVER_TOKEN);
	const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;
	const toEmail = import.meta.env.CONTACT_TO_EMAIL;

	try {
		await Promise.all([
			client.sendEmail({
				From: fromEmail,
				To: toEmail,
				ReplyTo: trimmedEmail,
				Subject: `New contact form submission from ${trimmedName}`,
				TextBody: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
			}),
			client.sendEmail({
				From: fromEmail,
				To: trimmedEmail,
				Subject: "We've received your message — RemoteKind",
				TextBody: `Hi ${trimmedName},\n\nThanks for reaching out to RemoteKind. We've received your message and will get back to you soon.\n\nYour message:\n${trimmedMessage}`,
			}),
		]);
	} catch (err) {
		console.error("Postmark send failed", err);
		return new Response(JSON.stringify({ error: "Something went wrong sending your message. Please try again." }), {
			status: 502,
		});
	}

	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
