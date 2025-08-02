import { IStory } from "@/types/story";
import { generateStoryWithBranchIdeas } from "./system-prompts/generate-story-with-branch-ideas";

export const storyBrancher = async (
    text: string,
    maxParagraphLength = 100,
    automaticBranching = false
): Promise<IStory> => {
    const aiResponse = await generateStoryWithBranchIdeas(text, maxParagraphLength, automaticBranching);

    return aiResponse;
};
