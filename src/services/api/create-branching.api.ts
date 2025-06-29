import { CreateBranchingBody, CreateBranchingRequestResponse } from "@/app/api/create-branching/route";

export const createBranching = async (body: CreateBranchingBody) => {
    return fetch("/api/create-branching", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(async (response) => {
        const data: CreateBranchingRequestResponse = await response.json();

        return data;
    });
};
