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

const formSchema = z.object({
  title: z
    .string({ message: "Insira um título válido." })
    .trim()
    .min(1, { message: "O título não pode ficar em branco." }),
});

type FormSchema = z.infer<typeof formSchema>;

const TaskForm = () => {
  const form = useForm<FormSchema>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    console.log(data);
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
