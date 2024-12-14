import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import TaskForm from "./task-form";
import { useState } from "react";
import { TaskDTO } from "../page";

interface AddTaskButtonProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskDTO[]>>;
}

const AddTaskButton = ({ setTasks }: AddTaskButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="font-bold">
          <PlusIcon /> Nova tarefa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar tarefa</DialogTitle>
          <DialogDescription>Preencha os dados abaixo.</DialogDescription>
        </DialogHeader>

        <TaskForm setTasks={setTasks} setDialogIsOpen={setDialogIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskButton;
