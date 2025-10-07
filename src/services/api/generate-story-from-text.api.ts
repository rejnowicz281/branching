/* eslint-disable @typescript-eslint/no-unused-vars */
export const generateStoryFromText = async (
    text: string, // The original story text
    parentEndingGenesis: string, // The ending genesis of the parent story - this variable ensures the story ends similarly to the parent
    parentShortenedStory: string, // The shortened story of the parent - this variable ensures the story doesn't follow the same path as the parent
    maxParagraphLength = 100 // The maximum length of each paragraph
) => {
    return ""; // TODO: replace with openai call
};
