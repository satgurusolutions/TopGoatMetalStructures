import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const token = data.token;

    if (!token) {
      return NextResponse.json({ error: 'reCAPTCHA token missing' }, { status: 400 });
    }

    // Verify reCAPTCHA token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const googleRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const googleData = await googleRes.json();

    if (!googleData.success || googleData.score < 0.5) {
      return NextResponse.json({ error: 'Failed verification' }, { status: 403 });
    }

    // Call Zapier webhook
    const zapierRes = await fetch(process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data.form),
    });

    if (!zapierRes.ok) {
      return NextResponse.json({ error: `Zapier webhook failed:` }, { status: 502 });
    }

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Internal server error' },
      { status: 500 },
    );
  }
}
