import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../services/todoServices";

export const useUpdateStatus = (userId) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:({id, status}) => updateStatus(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['todos', userId]})
        },
    })
}