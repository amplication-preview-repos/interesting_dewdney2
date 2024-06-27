import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProxyService } from "./proxy.service";
import { ProxyControllerBase } from "./base/proxy.controller.base";

@swagger.ApiTags("proxies")
@common.Controller("proxies")
export class ProxyController extends ProxyControllerBase {
  constructor(protected readonly service: ProxyService) {
    super(service);
  }
}
