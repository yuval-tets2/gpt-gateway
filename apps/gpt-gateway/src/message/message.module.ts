import { Module } from "@nestjs/common";
import { MessageModuleBase } from "./base/message.module.base";
import { MessageService } from "./message.service";
import { MessageResolver } from "./message.resolver";

@Module({
  imports: [MessageModuleBase],
  providers: [MessageService, MessageResolver],
  exports: [MessageService],
})
export class MessageModule {}
