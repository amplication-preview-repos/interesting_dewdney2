import { Proxy as TProxy } from "../api/proxy/Proxy";

export const PROXY_TITLE_FIELD = "username";

export const ProxyTitle = (record: TProxy): string => {
  return record.username?.toString() || String(record.id);
};
