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
            instructions: `as a professional AI story brancher, you will identify points in a story,  and make an id, title and description for those points. 
an example of the original story response:

 {
    id: "1",
    title: "Part 1",
    description: "Part 1 description",
    nodes: [
        {
            id: "2",
            title: "Part 2",
            description: "Part 2 description (continuation of Part 1)",
            nodes: [
                {
                    id: "3",
                    title: "Part 3",
                    description: "Part 3 description (continuation of Part 2)",
                    nodes: [
                        {
                            id: "4",
                            title: "Part 4",
                            description: "Part 4 description (continuation of Part 3)",
                            nodes: [
                                {
                                    id: "5",
                                    title: "Part 5",
                                    description: "Part 5 description (continuation of Part 4)"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

as you can see, the first node is always the continuation of the parent.

from then on, you're going to identify the most interesting 'branching' points, where the story could take a totally different direction.
your response should resemble a node tree. a node should have at least 1 node (this is the continuation of the story) and maximum 3 nodes (rare). make 2 nodes as common as possible.
so - the first node is the continuation of the story, and the potentially second and third nodes should be where the story 'branches' and continues on its own from that point on.
the descriptions should be maximum 3 sentences long. you can make as many nodes as you want to take into account the whole story.
the branches should be interesting and as creative as possible, and about as long as the original story.


an example of this approach based on the previous example:

 {
    id: "xzcf",
    title: "Part 1",
    description: "Part 1 description",
    nodes: [
        {
            id: "xazcf",
            title: "Part 2",
            description: "Part 2 description (continuation of Part 1)",
            nodes: [
                {
                    id: "gdsf5",
                    title: "axzzce",
                    description: "Part 3 description (continuation of Part 2)",
                    nodes: [
                        {
                            id: "thi87565",
                            title: "Part 4",
                            description: "Part 4 description (continuation of Part 3)",
                            nodes: [
                                {
                                    id: "424tsdsa",
                                    title: "Part 5",
                                    description: "Part 5 description (continuation of Part 4)",
                                    nodes: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "12fs",
                    title: "Part 3a",
                    description: "Part 3a description (alternative branching of Part 2)",
                    nodes: [
                        {
                            id: "42efd",
                            title: "Part 4a",
                            description: "Part 4a description (continuation of Part 3a)",
                            nodes: [
                                {
                                    id: "ascx",
                                    title: "Part  5a",
                                    description: "Part 5a description (continuation of Part 4a)",
                                    nodes: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

the ids should always be unique, different from each other.  as you can see, the first node of a node is always the continuation of the parent story, and the sibling are the alternative branches`,
            input: story + "\n\njson",
            text: {
                format: {
                    type: "json_object"
                }
            }
        });

        return NextResponse.json({
            output_text: response.output_text
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
    }
}
