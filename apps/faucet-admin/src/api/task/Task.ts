export type Task = {
  createdAt: Date;
  id: string;
  lastRun: Date | null;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
