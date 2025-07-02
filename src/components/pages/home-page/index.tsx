"use client";

import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { createBranching } from "@/services/api/create-branching.api";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RecursiveStoryNode } from "../manual-creation-page";

export const HomePage = () => {
    const form = useForm();

    const [generatedStory, setGeneratedStory] = useState("");

    const mutation = useMutation({
        mutationFn: createBranching,
        onSuccess: (data) => {
            console.log("Data fetched successfully:", data);
            setGeneratedStory(data.output_text);
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    });

    const onSubmit = form.handleSubmit((formData) => {
        setGeneratedStory("");
        mutation.mutate({ story: formData.story });
    });

    return (
        <div className="p-12">
            <Link href="/manual-creation">
                <Button variant="outline">ManualCreation</Button>
            </Link>
            <div className="max-w-[1280px] mx-auto">
                <FormProvider {...form}>
                    <form onSubmit={onSubmit}>
                        <FormTextareaField name="story" />
                        <Button type="submit">Generate Branching</Button>
                    </form>
                </FormProvider>
                {generatedStory && <pre>{JSON.parse(JSON.stringify(generatedStory, null, 2))}</pre>}
                {generatedStory && (
                    <RecursiveStoryNode
                        node={JSON.parse(generatedStory)}
                        onAddLeafNode={() => {}}
                        onDelete={() => {}}
                    />
                )}
            </div>
        </div>
    );
};
