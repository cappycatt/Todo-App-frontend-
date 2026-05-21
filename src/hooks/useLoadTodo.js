import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../services/todoServices"; 

export const useLoadTodo = (userId) => {
    return useQuery({
        queryKey: ["todos", userId],
        queryFn: () => getTodos(userId),
        enabled: !!userId,
    })
} 