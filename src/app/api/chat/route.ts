import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        if (!process.env.GROQ_API_KEY) {
            return NextResponse.json({ error: 'GROQ_API_KEY is not configured' }, { status: 500 });
        }

        const systemPrompt = `You are "Fish-Pish Assistant," a highly knowledgeable and friendly cybersecurity mentor. 
Your goal is to help students and everyday internet users understand digital safety, cyber hygiene, and phishing detection.

Context: You are part of the "Fish-Pish" platform, which features a Learning Hub (covering passwords, 2FA, and smart habits), a "Link Detective" tool for analyzing URLs, and a Cyber Safety Quiz.

Tone and Style:
- Be encouraging, patient, and professional.
- Use simple analogies to explain complex security concepts (e.g., comparing a firewall to a bouncer).
- Keep responses concise and focused on the user's question.
- Always prioritize safety and caution.

Guidelines:
- If asked about the quiz, encourage the user to review the Learning Hub and clarify specific concepts they might be stuck on.
- If asked about a specific link or suspicious message, guide them on how to spot "red flags" (typosquatting, sense of urgency, mismatched URLs).
- Do not provide code for malicious purposes.
- If you don't know an answer, suggest they consult a verified security resource like CISA.gov or their IT department.
- Always remind users that the "Golden Rule" is: When in doubt, don't click.

Begin!`;

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...history,
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 1024,
            }),
        });

        const data = await response.json();

        if (data.choices && data.choices[0]?.message?.content) {
            return NextResponse.json({ reply: data.choices[0].message.content });
        } else {
            console.error('Groq API error:', data);
            throw new Error('Failed to get response from Groq');
        }
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
