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
import { IsString, IsEnum } from "class-validator";
import { EnumMessageRole } from "./EnumMessageRole";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
    enum: EnumMessageRole,
  })
  @IsEnum(EnumMessageRole)
  @Field(() => EnumMessageRole)
  role!: "user" | "system" | "assistant";
}

export { MessageCreateInput as MessageCreateInput };