import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../services/todoServices";

export const useDeleteTodo = (userId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteTodo(id),
        onSuccess: () =>{
            queryClient.invalidateQueries({ queryKey:['todos', userId] })
        }
    })
}
