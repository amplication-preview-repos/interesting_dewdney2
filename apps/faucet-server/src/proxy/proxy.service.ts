import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProxyServiceBase } from "./base/proxy.service.base";

@Injectable()
export class ProxyService extends ProxyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
