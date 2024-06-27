import * as graphql from "@nestjs/graphql";
import { ProxyResolverBase } from "./base/proxy.resolver.base";
import { Proxy } from "./base/Proxy";
import { ProxyService } from "./proxy.service";

@graphql.Resolver(() => Proxy)
export class ProxyResolver extends ProxyResolverBase {
  constructor(protected readonly service: ProxyService) {
    super(service);
  }
}
