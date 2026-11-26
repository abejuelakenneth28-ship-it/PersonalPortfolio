import { NextResponse } from "next/server";

// Forwards contact-form messages to Telegram. The bot token stays on the server
// (set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local / Vercel env vars).

const LIMITS = { name: 100, email: 200, subject: 200, message: 4000 } as const;
type Field = keyof typeof LIMITS;

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json({ ok: false, error: "Telegram not configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const fields = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (!value || value.length > LIMITS[key]) {
      return NextResponse.json({ ok: false, error: `Invalid ${key}` }, { status: 400 });
    }
    fields[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const text =
    `New Portfolio Message\n\n` +
    `Name: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\n` +
    `Message:\n${fields.message}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Plain text (no parse_mode) so characters like * or _ in a message can't break delivery.
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Telegram request failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
