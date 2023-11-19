import { ColumnDef } from "@tanstack/react-table";

export type Log = {
  level: string;
  message: string;
  resourceId: string;
  timestamp: string;
  traceId: string;
  spanId: string;
  commit: string;
  parentResourceId: string;
};
export const columns: ColumnDef<Log>[] = [
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "resourceId",
    header: "Resource ID",
  },
  {
    accessorKey: "timestamp",
    header: "TimeStamp",
  },
  {
    accessorKey: "traceId",
    header: "Trace ID",
  },
  {
    accessorKey: "spanId",
    header: "Span ID",
  },
  {
    accessorKey: "commit",
    header: "Commit",
  },
  {
    accessorKey: "parentResourceId",
    header: "Parent Resource ID",
  },
];
