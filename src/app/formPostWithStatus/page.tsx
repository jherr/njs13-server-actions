import { revalidatePath } from "next/cache";

import AddButton from "./AddButton";

const todos: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <AddButton />
      </form>
    </main>
  );
}
