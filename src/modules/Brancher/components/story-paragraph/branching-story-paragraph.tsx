import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/general";
import { BranchIdea, IStoryParagraph } from "@/types/story";
import { ArrowRight, CircleDashed, GitBranch } from "lucide-react";
import { StoryParagraph } from ".";

interface BranchingStoryParagraphProps extends React.ComponentProps<"div"> {
    paragraph: IStoryParagraph;
}

export const BranchingStoryParagraph = ({ paragraph, className, ...props }: BranchingStoryParagraphProps) => {
    const BranchIdea = ({ idea }: { idea?: BranchIdea }) => {
        return typeof idea === "object" ? (
            <StoryParagraph className="bg-zinc-800 w-[600px]" key={idea.paragraphTitle} paragraph={idea}>
                <CardFooter className="mt-2 flex justify-end items-center">
                    <Button variant="outline">
                        Go to branch
                        <ArrowRight />
                    </Button>
                </CardFooter>
            </StoryParagraph>
        ) : (
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="cursor-pointer gap-2 w-[600px] text-center flex justify-center items-center bg-zinc-700 hover:bg-zinc-600 transition-colors text-card-foreground p-6 rounded-xl border shadow-sm">
                        {idea}
                    </div>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-2">
                    Click to generate a branch based on this idea
                    <CircleDashed className="animate-spin" size={20} />
                </TooltipContent>
            </Tooltip>
        );
    };

    return (
        <div className={"flex-1 flex flex-col items-center gap-4"}>
            {paragraph.branchIdeas?.length
                ? paragraph.branchIdeas.map((idea, index) => <BranchIdea idea={idea} key={index} />)
                : null}
            <div className="flex items-center gap-2">
                <GitBranch size={35} />
            </div>
            <StoryParagraph {...props} className={cn("w-[600px]", className)} paragraph={paragraph} />
        </div>
    );
};
