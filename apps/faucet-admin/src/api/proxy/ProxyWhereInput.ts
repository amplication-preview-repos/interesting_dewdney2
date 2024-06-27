import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProxyWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  port?: IntNullableFilter;
  username?: StringNullableFilter;
};
