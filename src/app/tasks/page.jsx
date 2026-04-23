import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2>Task is Here: {tasks.length}</h2>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
