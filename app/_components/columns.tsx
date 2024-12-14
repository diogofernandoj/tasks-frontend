"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TaskDTO } from "../page";

export const columns: ColumnDef<TaskDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Tarefa",
  },
];
