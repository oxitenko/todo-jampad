import axios, {AxiosResponse} from "axios";

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export async function fetchData(): Promise<ITodo[]> {
    try {
        const response: AxiosResponse<ITodo[]> = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        return response.data.slice(0, 5);
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}