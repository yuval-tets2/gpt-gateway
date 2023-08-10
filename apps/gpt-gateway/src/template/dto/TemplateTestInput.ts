import { Field, InputType } from "@nestjs/graphql";
import { MessageParam } from "./MessageParam";

@InputType()
class TemplateTestInput {
  @Field(() => String, {
    nullable: true,
  })
  templateId!: string;

  @Field(() => [MessageParam])
  params!: MessageParam[];
}

export { TemplateTestInput };
