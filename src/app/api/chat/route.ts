import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: "GROQ_API_KEY is not configured on the server." }, { status: 500 });
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are the Fish-Pish AI Security Assistant. You help users understand phishing, cyber security, and the Fish-Pish extension. Be professional, concise, and security-aware."
                    },
                    ...messages
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
