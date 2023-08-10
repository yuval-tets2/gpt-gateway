import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { TemplateTestInput } from "./TemplateTestInput";

@ArgsType()
class TemplateTestArgs {
  @Field(() => TemplateTestInput, { nullable: false })
  data!: TemplateTestInput;
}

export { TemplateTestArgs };
