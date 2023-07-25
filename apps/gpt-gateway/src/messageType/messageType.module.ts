import { Module } from "@nestjs/common";
import { MessageTypeModuleBase } from "./base/messageType.module.base";
import { MessageTypeService } from "./messageType.service";
import { MessageTypeResolver } from "./messageType.resolver";

@Module({
  imports: [MessageTypeModuleBase],
  providers: [MessageTypeService, MessageTypeResolver],
  exports: [MessageTypeService],
})
export class MessageTypeModule {}
