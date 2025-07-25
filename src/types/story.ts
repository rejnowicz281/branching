export interface IStoryParagraph {
    text: string;
    branchCount?: number;
}

export interface IStory {
    storyTitle: string;
    storyBody: IStoryParagraph[];
}

export type IStoryBody = IStoryParagraph[];
