import { Module } from "@nestjs/common";
import { ModelModuleBase } from "./base/model.module.base";
import { ModelService } from "./model.service";
import { ModelResolver } from "./model.resolver";

@Module({
  imports: [ModelModuleBase],
  providers: [ModelService, ModelResolver],
  exports: [ModelService],
})
export class ModelModule {}
