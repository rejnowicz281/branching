export type IStoryNode = {
    id: string;
    title: string;
    description: string;
    nodes?: IStoryNode[];
};
