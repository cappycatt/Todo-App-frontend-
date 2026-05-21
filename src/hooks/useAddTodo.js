import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/todoServices.jsx";

export const useAddTodo = (userId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (todoText) => createTodo(todoText, userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos', userId] });
        },
    })
}