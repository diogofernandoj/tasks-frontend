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

const AddTaskButton = () => {
  return (
    <Dialog>
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

        <TaskForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskButton;
