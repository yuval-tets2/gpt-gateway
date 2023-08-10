import { Module } from "@nestjs/common";
import { TemplateModuleBase } from "./base/template.module.base";
import { TemplateService } from "./template.service";
import { TemplateResolver } from "./template.resolver";
import { OpenAIModule } from "src/providers/openai/openai.module";

@Module({
  imports: [TemplateModuleBase, OpenAIModule],
  providers: [TemplateService, TemplateResolver],
  exports: [TemplateService],
})
export class TemplateModule {}
