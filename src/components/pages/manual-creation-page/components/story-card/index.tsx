import { ICard } from "@/types/card";

import { FormInputField } from "@/components/molecules/input-field/form";
import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export const StoryCard = ({
    card,
    onDelete,
    onAddLeafCard
}: {
    card: ICard;
    onDelete: (id: string) => void;
    onAddLeafCard: (card: ICard) => void;
}) => {
    const schema = z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required")
    });

    const form = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = form.handleSubmit((formData) => {
        onAddLeafCard({
            id: Math.random().toString(36).substring(2, 15),
            title: formData.title,
            description: formData.description
        });
    });

    return (
        <Card key={card.id}>
            <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
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
                            <Button type="submit">Add Leaf Card</Button>
                        </form>
                    </FormProvider>
                </CardContent>

                <CardFooter>
                    <Button variant="outline" onClick={() => onDelete(card.id)}>
                        Delete
                    </Button>
                </CardFooter>
            </CardHeader>
        </Card>
    );
};
