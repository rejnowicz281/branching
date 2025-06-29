import openai from "@/lib/utils/openai";
import { NextResponse } from "next/server";

export interface CreateBranchingBody {
    story: string;
}

export interface CreateBranchingRequestResponse {
    output_text: string;
}

export async function POST(request: Request) {
    const body: CreateBranchingBody = await request.json();

    if (!body.story) return NextResponse.json({ error: "Story is required to create a branching" }, { status: 400 });

    const { story } = body;

    try {
        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            // instructions: '',
            input: story
        });

        return NextResponse.json({
            output_text: response.output_text
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
    }
}
