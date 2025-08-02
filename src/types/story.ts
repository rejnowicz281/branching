export type BranchIdea = string | IStory;

export type IStoryParagraph = {
    id: string;
    paragraphTitle: string;
    paragraphText: string;
    branchIdeas: BranchIdea[];
};

export type IStory = IStoryParagraph[];
