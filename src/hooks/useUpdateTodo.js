import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../services/todoServices";

export const useUpdateTodo = (userId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:({id, todo}) => updateTodo(id, todo),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['todos', userId]})
        }
    })
}