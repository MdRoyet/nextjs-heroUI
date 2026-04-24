import fs from "fs";
import path from "path";

// Define the path to your JSON file
const filePath = path.join(process.cwd(), "src/data/tasks.json");

export const getTasks = async () => {
  // Read fresh from disk to ensure we have the latest data
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);
  return data.tasks;
};

export const postTask = async (newTask) => {
  // 1. Read existing data
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);

  // 2. Create the new task object
  const taskWithId = {
    ...newTask,
    id: data.tasks.length + 1,
  };

  // 3. Add to the array and save to disk
  data.tasks.push(taskWithId);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return { success: true, message: "Task Added Successfully" };
};
