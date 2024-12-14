"use client";

import { useEffect, useState } from "react";
import { DataTable } from "./_components/ui/data-table";
import { columns } from "./_components/columns";
import { Button } from "./_components/ui/button";
import { PlusIcon } from "lucide-react";
import AddTaskButton from "./_components/add-task-button";

export interface TaskDTO {
  id: string;
  title: string;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("http://localhost:4000/tasks");

      const data = await response.json();
      setTasks(data);
    };
    getTasks();
  }, []);

  return (
    <div className="p-8 h-screen">
      <div className="h-full w-full space-y-8 rounded-lg p-8 bg-white">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-gray-500">
              To do list
            </span>
            <h2 className="text-xl font-semibold text-black">Tasks</h2>
          </div>
          <AddTaskButton />
        </div>
        <DataTable columns={columns} data={tasks} />
      </div>
    </div>
  );
};

export default HomePage;
