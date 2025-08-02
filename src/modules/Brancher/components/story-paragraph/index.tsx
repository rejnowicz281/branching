import { IStoryParagraph } from "@/types/story";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StoryParagraphProps extends React.ComponentProps<"div"> {
    paragraph: IStoryParagraph;
}

export const StoryParagraph = ({ paragraph, children, ...props }: StoryParagraphProps) => {
    return (
        <Card key={paragraph.paragraphTitle} {...props}>
            <CardHeader>
                <CardTitle>{paragraph.paragraphTitle}</CardTitle>
                <CardDescription>{paragraph.paragraphText}</CardDescription>
                {children}
            </CardHeader>
        </Card>
    );
};
