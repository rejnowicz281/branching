import { cn } from "@/lib/utils/general";
import { IStory } from "@/types/story";
import { ArrowRight } from "lucide-react";
import { BranchingStoryParagraph } from "../story-paragraph/branching-story-paragraph";

interface StoryVisualizerProps extends React.ComponentProps<"div"> {
    story: IStory;
    classNames?: {
        paragraphWrapper?: string;
        arrowRight?: string;
    };
}

export const StoryVisualizer = ({ story, className, classNames, ...props }: StoryVisualizerProps) => {
    return (
        <div className={cn("flex gap-8", className)} {...props}>
            {story
                ? story.map((paragraph, index) => (
                      <div className={cn("flex gap-8", classNames?.paragraphWrapper)} key={index}>
                          <BranchingStoryParagraph paragraph={paragraph} />
                          {index != story.length - 1 && <ArrowRight className={cn(classNames?.arrowRight, "mt-10")} />}
                      </div>
                  ))
                : null}
        </div>
    );
};
