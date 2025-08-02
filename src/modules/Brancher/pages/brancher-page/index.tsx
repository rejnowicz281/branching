"use client";

import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { BranchingStoryParagraph } from "@/modules/Brancher/components/story-paragraph/branching-story-paragraph";
import { IStory } from "@/types/story";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
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

            <div className="flex gap-8">
                {generatedStory
                    ? generatedStory.map((paragraph, index) => (
                          <div className="flex gap-8" key={index}>
                              <BranchingStoryParagraph paragraph={paragraph} />
                              {index != generatedStory.length - 1 && <ArrowRight className="self-center" />}
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};
