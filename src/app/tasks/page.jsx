import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2>Task is Here: {tasks.length}</h2>
    </div>
  );
};

export default TasksPage;
