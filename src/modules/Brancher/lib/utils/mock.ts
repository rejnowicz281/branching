import { IStory } from "@/types/story";

// First response from AI (whole story, with N branch ideas)
export const aiStoryMock: IStory = [
    {
        id: "1",
        paragraphTitle: "The Discovery",
        paragraphText:
            "Milo was a quiet, curious boy who asked odd questions like, Do clouds sleep? One day, he found a small wooden box in the woods.",
        branchIdeas: ["branch idea 1", "branch idea 2"]
    },
    {
        id: "2",
        paragraphTitle: "The Humming Box",
        paragraphText:
            "It hummed softly, though it had no lock. That night, he dreamed of stars, strange creatures, and glowing worlds.",
        branchIdeas: ["branch idea 1", "branch idea 2"]
    },
    {
        id: "3",
        paragraphTitle: "The Guidance",
        paragraphText:
            "The box led him, answering his questions in whispers and light. When he woke, the box was still, its magic silent.",
        branchIdeas: ["branch idea 1", "branch idea 2"]
    },
    {
        id: "4",
        paragraphTitle: "The Keeper",
        paragraphText:
            "Milo kept it on a shelf, always clean. Sometimes, when the wind blew, it whispered, More. He smiled.",
        branchIdeas: ["branch idea 1", "branch idea 2"]
    },
    {
        id: "5",
        paragraphTitle: "The Wonder Within",
        paragraphText:
            "He didn't need the dreams anymore—he carried their wonder inside him now. And he still believed.",
        branchIdeas: ["branch idea 1", "branch idea 2"]
    }
];

// Second response from AI, take one branch out of the three and make a whole story out of it
export const richStoryMock: IStory = [
    {
        id: "1111",
        paragraphTitle: "The Discovery",
        paragraphText:
            "Milo was a quiet, curious boy who asked odd questions like, Do clouds sleep? One day, he found a small wooden box in the woods.",
        branchIdeas: [
            "branch idea 1",
            [
                {
                    id: "1",
                    paragraphTitle: "The Magical Opening",
                    paragraphText:
                        "Instead of leaving the box untouched, Milo pressed his ear against it and whispered his name. The box glowed warmly and opened to reveal a miniature galaxy swirling inside.",
                    branchIdeas: ["the box speaks", "other children arrive"]
                }
            ]
        ]
    },
    {
        id: "2222",
        paragraphTitle: "The Humming Box",
        paragraphText:
            "It hummed softly, though it had no lock. That night, he dreamed of stars, strange creatures, and glowing worlds.",
        branchIdeas: [
            [
                {
                    id: "1",
                    paragraphTitle: "The Dream Becomes Reality",
                    paragraphText:
                        "When Milo woke, he found himself floating above his bed, the box glowing in his hands. The creatures from his dreams were real, and they had been waiting for him.",
                    branchIdeas: ["meeting the creatures", "returning to normal"]
                }
            ],
            "branch idea 3"
        ]
    },
    {
        id: "43",
        paragraphTitle: "The Guidance",
        paragraphText:
            "The box led him, answering his questions in whispers and light. When he woke, the box was still, its magic silent.",
        branchIdeas: [
            "branch idea 1",
            [
                {
                    id: "1",
                    paragraphTitle: "The Box Remains Active",
                    paragraphText:
                        "But this time, the box didn't go silent. It continued to pulse with a gentle light, and Milo realized it was showing him the way to something important hidden in his own backyard.",
                    branchIdeas: ["following the light", "telling his parents"]
                }
            ]
        ]
    },
    {
        paragraphTitle: "The Keeper",
        id: "3",
        paragraphText:
            "Milo kept it on a shelf, always clean. Sometimes, when the wind blew, it whispered, More. He smiled.",
        branchIdeas: [
            [
                {
                    id: "1",
                    paragraphTitle: "The Box Multiplies",
                    paragraphText:
                        "One morning, Milo woke to find three identical boxes on his shelf. Each one hummed a different tune, and he realized he had to choose which melody to follow.",
                    branchIdeas: ["choosing the second melody", "choosing the third melody"]
                }
            ],
            [
                {
                    id: "2",
                    paragraphTitle: "Sharing the Secret",
                    paragraphText:
                        "Unable to keep the wonder to himself any longer, Milo decided to show the box to his best friend Sarah. Together, they discovered its magic was twice as strong.",
                    branchIdeas: ["joint adventures", "other kids find out"]
                }
            ],
            "branch idea 3"
        ]
    },
    {
        id: "1",
        paragraphTitle: "The Wonder Within",
        paragraphText:
            "He didn't need the dreams anymore—he carried their wonder inside him now. And he still believed.",
        branchIdeas: [
            "branch idea 1",
            "branch idea 2",
            [
                {
                    paragraphTitle: "The Legacy Continues",
                    paragraphText:
                        "Years later, as an adult, Milo found another child sitting alone in the same woods. Without hesitation, he placed the box in the child's hands and walked away, smiling.",
                    branchIdeas: ["the cycle begins again", "the new child's story"],
                    id: "1"
                }
            ]
        ]
    }
];
