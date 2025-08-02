import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { IStory } from "@/types/story";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { StoryVisualizer } from "../story-visualizer";

export function StoryDialogContent({ story }: { story: IStory }) {
    return (
        <DialogContent className="min-h-[92vh] !max-w-[1480px]">
            <VisuallyHidden>
                <DialogTitle>Story Dialog Content</DialogTitle>
            </VisuallyHidden>
            <StoryVisualizer className="overflow-x-auto py-6" story={story} />
        </DialogContent>
    );
}
