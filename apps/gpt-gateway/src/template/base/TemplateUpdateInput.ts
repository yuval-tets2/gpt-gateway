/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageTypeWhereUniqueInput } from "../../messageType/base/MessageTypeWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ModelWhereUniqueInput } from "../../model/base/ModelWhereUniqueInput";

@InputType()
class TemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MessageTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessageTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => MessageTypeWhereUniqueInput, {
    nullable: true,
  })
  messageTypes?: MessageTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelWhereUniqueInput)
  @IsOptional()
  @Field(() => ModelWhereUniqueInput, {
    nullable: true,
  })
  model?: ModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  params?: string | null;
}

export { TemplateUpdateInput as TemplateUpdateInput };