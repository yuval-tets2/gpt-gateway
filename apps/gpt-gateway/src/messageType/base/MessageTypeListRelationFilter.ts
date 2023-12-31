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
import { MessageTypeWhereInput } from "./MessageTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MessageTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MessageTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageTypeWhereInput)
  @IsOptional()
  @Field(() => MessageTypeWhereInput, {
    nullable: true,
  })
  every?: MessageTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageTypeWhereInput)
  @IsOptional()
  @Field(() => MessageTypeWhereInput, {
    nullable: true,
  })
  some?: MessageTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageTypeWhereInput)
  @IsOptional()
  @Field(() => MessageTypeWhereInput, {
    nullable: true,
  })
  none?: MessageTypeWhereInput;
}
export { MessageTypeListRelationFilter as MessageTypeListRelationFilter };
