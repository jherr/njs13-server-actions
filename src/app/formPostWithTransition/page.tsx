import { revalidatePath } from "next/cache";

import AddButton from "./AddButton";

const todos: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(todo: string) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    todos.push(todo);
    revalidatePath("/formPostWithTransition");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <AddButton addTodo={addTodo} />
    </main>
  );
}
