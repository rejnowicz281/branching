/*

params:

---MAX NUMBER OF BRANCHES---
2

---MIN NUMBER OF BRANCHES---
1

---MAX PARAGRAPH LENGTH---
100

story:

The Boy and the Box

Milo was a quiet, curious boy who asked odd questions like, “Do clouds sleep?” One day, he found a small wooden box in the woods.

---2 BRANCHES---

It hummed softly, though it had no lock. That night, he dreamed of stars, strange creatures, and glowing worlds.
The box led him, answering his questions in whispers and light. When he woke, the box was still, its magic silent.

---1 BRANCH---

Milo kept it on a shelf, always clean. Sometimes, when the wind blew, it whispered, “More.” He smiled.
He didn’t need the dreams anymore—he carried their wonder inside him now. And he still believed.



---ENDING GENERAL GENESIS---

A boy finds quiet magic in a mysterious box that sparks dreams of wonder. Though the dreams fade, their impact stays. He no longer needs the box to believe—its whisper lives in him. It's a story about how wonder, once found, becomes part of who we are.
*/

import { IStory } from "@/types/story";

/*
NOTE: a branch of the story will need to be shorter and have a lot less branches... since it could go on forever otherwise
*/

// First response from AI (whole story, without branches)
const firstResponseFromAI = {
    storyTitle: "The Boy and the Box",
    storyBody: [
        {
            text: "Milo was a quiet, curious boy who asked odd questions like, “Do clouds sleep?” One day, he found a small wooden box in the woods."
        },
        {
            text: "It hummed softly, though it had no lock. That night, he dreamed of stars, strange creatures, and glowing worlds."
        },
        {
            text: "The box led him, answering his questions in whispers and light. When he woke, the box was still, its magic silent."
        },
        {
            text: "Milo kept it on a shelf, always clean. Sometimes, when the wind blew, it whispered, “More.” He smiled."
        },
        {
            text: "He didn’t need the dreams anymore—he carried their wonder inside him now. And he still believed."
        }
    ]
};

// Refactored response (no AI, add number of branches randomly via function)
const refactoredFirstResponse = {
    storyTitle: "The Boy and the Box",
    storyBody: [
        {
            text: "Milo was a quiet, curious boy who asked odd questions like, “Do clouds sleep?” One day, he found a small wooden box in the woods.",
            branchCount: 2
        },
        {
            text: "It hummed softly, though it had no lock. That night, he dreamed of stars, strange creatures, and glowing worlds.",
            branchCount: 0
        },
        {
            text: "The box led him, answering his questions in whispers and light. When he woke, the box was still, its magic silent.",
            branchCount: 0
        },
        {
            text: "Milo kept it on a shelf, always clean. Sometimes, when the wind blew, it whispered, “More.” He smiled.",
            branchCount: 1
        },
        {
            text: "He didn’t need the dreams anymore—he carried their wonder inside him now. And he still believed.",
            branchCount: 0
        }
    ]
};

// General genesis about the ending (AI response)
const simplifiedEndingResponse =
    "A boy finds quiet magic in a mysterious box that sparks dreams of wonder. Though the dreams fade, their impact stays. He no longer needs the box to believe—its whisper lives in him. It's a story about how wonder, once found, becomes part of who we are.";

// Shortened story (AI response)
const shortenedStoryResponse =
    "Milo, a quiet, curious boy, found a small wooden box in the woods that hummed softly. That night, he dreamed of stars, strange creatures, and glowing worlds. The box answered his questions with whispers and light, filling his nights with magic. When the magic grew silent, Milo kept the box on his shelf, always clean. Sometimes, the wind made it whisper “More.” He smiled, carrying the wonder of those dreams inside him forever.";

// FIRST RECURSION EXAMPLE

// Branch 1 of the story (AI response - based on the shortenedStoryResponseand simplified ending, it should be different
// it should be different from the shortenedStoryResponse, it should have a similar ending, and it should be shorter with)
const branch1Story = {
    storyTitle: "The Boy Who Asked The Sky",
    storyBody: [
        {
            text: "That night, the box glowed in his dreams, carrying him across sparkling planets where his questions were answered by gentle creatures."
        },
        {
            text: "When he woke, the box was silent, but the wonder stayed with him. Milo kept it on his shelf, never opened."
        },
        {
            text: "Though the dreams faded, their magic lived inside him. He no longer needed the box to believe—wonder had become part of who he was."
        }
    ]
};

// next steps will be branching, simplified ending, shortened version, and recursion again

export const storyBrancher = async (
    text: string,
    minBranchesPerParagraph = 1,
    maxBranchesPerParagraph = 2,
    maxParagraphLength = 100
): Promise<IStory> => {};
