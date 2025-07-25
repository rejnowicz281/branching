import { IStoryNode } from "@/types/story";

import { FormInputField } from "@/components/molecules/input-field/form";
import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export const StoryCard = ({
    node,
    onDelete,
    onAddLeafNode
}: {
    node: IStoryNode;
    onDelete: (id: string) => void;
    onAddLeafNode: (node: IStoryNode) => void;
}) => {
    const schema = z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required")
    });

    const form = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = form.handleSubmit((formData) => {
        onAddLeafNode({
            id: Math.random().toString(36).substring(2, 15),
            title: formData.title,
            description: formData.description,
            nodes: []
        });
    });

    return (
        <Card key={node.id}>
            <CardHeader>
                <CardTitle>{node.title}</CardTitle>
                <CardDescription>{node.description}</CardDescription>
                <CardContent>
                    <FormProvider {...form}>
                        <form onSubmit={onSubmit}>
                            <FormInputField field={{ label: "Title" }} name="title" />
                            <FormTextareaField
                                name="description"
                                field={{
                                    label: "Description"
                                }}
                            />
                            <Button type="submit">Add Leaf Node</Button>
                        </form>
                    </FormProvider>
                </CardContent>

                <CardFooter>
                    <Button variant="outline" onClick={() => onDelete(node.id)}>
                        Delete
                    </Button>
                </CardFooter>
            </CardHeader>
        </Card>
    );
};
