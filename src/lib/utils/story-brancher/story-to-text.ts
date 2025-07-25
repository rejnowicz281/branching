import { IStoryBody } from "@/types/story";

export const storyBodyToText = (storyBody: IStoryBody): string => {
    return storyBody.map((paragraph) => paragraph.text).join("\n\n");
};
