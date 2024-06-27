import { ProxyWhereInput } from "./ProxyWhereInput";
import { ProxyOrderByInput } from "./ProxyOrderByInput";

export type ProxyFindManyArgs = {
  where?: ProxyWhereInput;
  orderBy?: Array<ProxyOrderByInput>;
  skip?: number;
  take?: number;
};
