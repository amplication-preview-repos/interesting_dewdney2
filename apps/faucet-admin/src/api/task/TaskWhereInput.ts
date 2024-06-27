import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  lastRun?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
