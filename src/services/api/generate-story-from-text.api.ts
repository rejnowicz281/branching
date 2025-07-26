import { aiStoryMock } from "@/lib/utils/story-brancher/mock";

export const generateStoryFromText = async (
    text: string, // The original story text
    parentEndingGenesis: string, // The ending genesis of the parent story - this variable ensures the story ends similarly to the parent
    parentShortenedStory: string, // The shortened story of the parent - this variable ensures the story doesn't follow the same path as the parent
    maxParagraphLength = 100 // The maximum length of each paragraph
) => {
    return aiStoryMock; // TODO: replace with openai call
};
