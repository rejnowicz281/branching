export interface IStoryParagraph {
    text: string;
    branches?: IStory[];
}

export interface IStory {
    storyTitle: string;
    storyBody: IStoryParagraph[];
}

export type IStoryBody = IStoryParagraph[];
