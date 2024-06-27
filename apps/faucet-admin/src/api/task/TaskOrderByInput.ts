import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastRun?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
