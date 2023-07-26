/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MessageTypeWhereUniqueInput } from "../../messageType/base/MessageTypeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MessageTypeUpdateManyWithoutTemplatesInput {
  @Field(() => [MessageTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageTypeWhereUniqueInput],
  })
  connect?: Array<MessageTypeWhereUniqueInput>;

  @Field(() => [MessageTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageTypeWhereUniqueInput],
  })
  disconnect?: Array<MessageTypeWhereUniqueInput>;

  @Field(() => [MessageTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageTypeWhereUniqueInput],
  })
  set?: Array<MessageTypeWhereUniqueInput>;
}

export { MessageTypeUpdateManyWithoutTemplatesInput as MessageTypeUpdateManyWithoutTemplatesInput };