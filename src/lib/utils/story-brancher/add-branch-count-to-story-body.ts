import { IStoryBody, IStoryParagraph } from "@/types/story";

export const addBranchCountToStoryBody = (
    storyBody: IStoryBody,
    minBranchesPerParagraph = 1,
    maxBranchesPerParagraph = 2
): IStoryParagraph[] => {
    return storyBody.map((storyParagraph) => {
        const branchCount = Math.floor(
            Math.random() * (maxBranchesPerParagraph - minBranchesPerParagraph + 1) + minBranchesPerParagraph
        );

        return {
            ...storyParagraph,
            branchCount
        };
    });
};
