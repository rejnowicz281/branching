"use client";

import { FormInputField } from "@/components/molecules/input-field/form";
import { FormTextareaField } from "@/components/molecules/textarea-field/form";
import { Button } from "@/components/ui/button";
import { useLocalState } from "@/hooks/use-local-state";
import { IStoryNode } from "@/types/story";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { StoryCard } from "./components/story-node";

export const RecursiveStoryNode = ({
    node,
    onAddLeafNode,
    onDelete
}: {
    node: IStoryNode;
    onAddLeafNode: (newNode: IStoryNode, parentId: string) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className={"flex-1 p-5 flex flex-col"}>
            <StoryCard
                node={node}
                onAddLeafNode={(newNode) => onAddLeafNode(newNode, node.id)}
                onDelete={(id) => onDelete(id)}
            />

            {node.nodes && node.nodes.length > 0 && (
                <div className="flex">
                    {node.nodes.map((nestedNode) => (
                        <RecursiveStoryNode
                            key={nestedNode.id}
                            node={nestedNode}
                            onAddLeafNode={onAddLeafNode}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const ManualCreationPage = () => {
    const [story, setStory] = useLocalState<IStoryNode[]>("story", []);

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
                nodes: []
            }
        ]);
    });

    const handleDeleteNode = (id: string) => {
        const deleteNodeRecursively = (nodes: IStoryNode[], nodeId: string): IStoryNode[] => {
            return nodes.filter((node) => {
                if (node.id === nodeId) {
                    return false;
                }
                if (node.nodes) {
                    node.nodes = deleteNodeRecursively(node.nodes, nodeId);
                }
                return true;
            });
        };

        setStory((prev) => deleteNodeRecursively(prev, id));
    };

    const handleAddLeafNode = (newNode: IStoryNode, parentNodeId: string) => {
        const addNodeToTree = (nodes: IStoryNode[]): IStoryNode[] => {
            return nodes.map((node) => {
                if (node.id === parentNodeId) {
                    return {
                        ...node,
                        nodes: [...(node.nodes || []), newNode]
                    };
                }
                return {
                    ...node,
                    nodes: node.nodes ? addNodeToTree(node.nodes) : []
                };
            });
        };

        setStory((prev) => addNodeToTree(prev));
    };

    return (
        <div className="p-12">
            <Link href="/">
                <Button variant="outline">Home</Button>
            </Link>
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
                        <Button type="submit">Add Story Node</Button>
                    </form>
                </FormProvider>
            </div>
            {story.length > 0 &&
                story.map((node) => (
                    <RecursiveStoryNode
                        key={node.id}
                        node={node}
                        onAddLeafNode={handleAddLeafNode}
                        onDelete={handleDeleteNode}
                    />
                ))}
        </div>
    );
};
