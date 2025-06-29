"use client";

import { FormInputField } from "@/components/molecules/input-field/form";
import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { useLocalState } from "@/hooks/use-local-state";
import { ICard } from "@/types/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { StoryCard } from "./components/story-card";

const RecursiveStoryCard = ({
    card,
    onAddLeafCard,
    onDelete
}: {
    card: ICard;
    onAddLeafCard: (newCard: ICard, parentId: string) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className={"flex-1 p-5 flex flex-col"}>
            <StoryCard
                card={card}
                onAddLeafCard={(newCard) => onAddLeafCard(newCard, card.id)}
                onDelete={(id) => onDelete(id)}
            />

            {card.cards && card.cards.length > 0 && (
                <div className="flex">
                    {card.cards.map((nestedCard) => (
                        <RecursiveStoryCard
                            key={nestedCard.id}
                            card={nestedCard}
                            onAddLeafCard={onAddLeafCard}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const ManualCreationPage = () => {
    const [story, setStory] = useLocalState<ICard[]>("story", []);

    const schema = z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required")
    });

    const form = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = form.handleSubmit((formData) => {
        setStory((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title: formData.title,
                description: formData.description,
                cards: []
            }
        ]);
    });

    const handleDeleteCard = (id: string) => {
        const deleteCardRecursively = (cards: ICard[], cardId: string): ICard[] => {
            return cards.filter((card) => {
                if (card.id === cardId) {
                    return false;
                }
                if (card.cards) {
                    card.cards = deleteCardRecursively(card.cards, cardId);
                }
                return true;
            });
        };

        setStory((prev) => deleteCardRecursively(prev, id));
    };

    const handleAddLeafCard = (newCard: ICard, parentCardId: string) => {
        const addCardToTree = (cards: ICard[]): ICard[] => {
            return cards.map((card) => {
                if (card.id === parentCardId) {
                    return {
                        ...card,
                        cards: [...(card.cards || []), newCard]
                    };
                }
                return {
                    ...card,
                    cards: card.cards ? addCardToTree(card.cards) : []
                };
            });
        };

        setStory((prev) => addCardToTree(prev));
    };

    return (
        <div className="p-12">
            <div className="max-w-[1280px] mx-auto">
                <FormProvider {...form}>
                    <form onSubmit={onSubmit}>
                        <FormInputField field={{ label: "Title" }} name="title" />
                        <FormTextareaField
                            name="description"
                            field={{
                                label: "Description"
                            }}
                        />
                        <Button type="submit">Add Story Card</Button>
                    </form>
                </FormProvider>
            </div>
            {story.length > 0 &&
                story.map((card) => (
                    <RecursiveStoryCard
                        key={card.id}
                        card={card}
                        onAddLeafCard={handleAddLeafCard}
                        onDelete={handleDeleteCard}
                    />
                ))}
        </div>
    );
};
