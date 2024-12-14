import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { TaskDTO } from "../page";

const formSchema = z.object({
  title: z
    .string({ message: "Insira um título válido." })
    .trim()
    .min(1, { message: "O título não pode ficar em branco." }),
});

type FormSchema = z.infer<typeof formSchema>;

interface TaskFormProps {
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskDTO[]>>;
}

const TaskForm = ({ setDialogIsOpen, setTasks }: TaskFormProps) => {
  const form = useForm<FormSchema>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      const response = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: data.title }),
      });

      const task = await response.json();

      setTasks((prev: TaskDTO[]) => [...prev, task]);
      setDialogIsOpen(false);
      return toast.success("Tarefa adicionada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado!");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Insira o título da tarefa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          <PlusIcon size={18} />
          Adicionar tarefa
        </Button>
      </form>
    </Form>
  );
};

export default TaskForm;
