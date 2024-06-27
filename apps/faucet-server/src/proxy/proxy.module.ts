import { Module } from "@nestjs/common";
import { ProxyModuleBase } from "./base/proxy.module.base";
import { ProxyService } from "./proxy.service";
import { ProxyController } from "./proxy.controller";
import { ProxyResolver } from "./proxy.resolver";

@Module({
  imports: [ProxyModuleBase],
  controllers: [ProxyController],
  providers: [ProxyService, ProxyResolver],
  exports: [ProxyService],
})
export class ProxyModule {}
