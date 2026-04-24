import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
  "use server";

  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const status = formData.get("status");
  //   const priority = formData.get("priority");
  //   const assinedTo = formData.get("assinedTo");

  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding a task with a name:", newTask);
  const res = await postTask(newTask);
  if (res.success) {
    revalidatePath("/tasks");
  }
};
