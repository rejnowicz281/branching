"use client";

import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { IStory } from "@/types/story";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { StoryVisualizer } from "../../components/story-visualizer";
import { generateStoryWithBranchIdeas } from "../../lib/utils/system-prompts/generate-story-with-branch-ideas";

export const BrancherPage = () => {
    const form = useForm({
        resolver: zodResolver(z.object({ story: z.string().min(1, "Story is required") }))
    });

    const [generatedStory, setGeneratedStory] = useState<IStory>([]);

    const mutation = useMutation({
        mutationFn: (story: string) => generateStoryWithBranchIdeas(story, 100, true),
        onSuccess: (data) => {
            console.log("Data fetched successfully:", data);
            setGeneratedStory(data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    });

    const onSubmit = form.handleSubmit((formData) => {
        setGeneratedStory([]);
        mutation.mutate(formData.story);
    });

    return (
        <div className="p-12">
            <FormProvider {...form}>
                <form onSubmit={onSubmit}>
                    <FormTextareaField name="story" />
                    <Button type="submit">Generate Branching</Button>
                </form>
            </FormProvider>

            <StoryVisualizer story={generatedStory} />
        </div>
    );
};
