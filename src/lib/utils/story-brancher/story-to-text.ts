import { IStory } from "@/types/story";

export const storyToText = (story: IStory): string => {
    const text = story.storyTitle + "\n\n";

    return text + story.storyBody.map((paragraph) => paragraph.text).join("\n\n");
};
