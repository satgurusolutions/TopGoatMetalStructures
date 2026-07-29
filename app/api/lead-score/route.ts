import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { systemPrompt, makeUserPrompt } from '@/lib/leadPrompt';

// export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const lead = await request.json(); // expects LeadInput shape
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.2,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: makeUserPrompt(lead) },
      ],
      // not streaming to keep code simple
    });

    // GPT returns something like: {"score": 78, "explanation":"..."}
    const raw = response.choices[0].message.content || '{}';
    const parsed = JSON.parse(raw);

    return NextResponse.json(
      { score: parsed.score ?? null, reason: parsed.explanation ?? '' },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
