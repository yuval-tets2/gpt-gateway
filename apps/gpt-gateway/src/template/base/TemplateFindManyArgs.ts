/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TemplateWhereInput } from "./TemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TemplateOrderByInput } from "./TemplateOrderByInput";

@ArgsType()
class TemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TemplateWhereInput, { nullable: true })
  @Type(() => TemplateWhereInput)
  where?: TemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [TemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TemplateOrderByInput], { nullable: true })
  @Type(() => TemplateOrderByInput)
  orderBy?: Array<TemplateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TemplateFindManyArgs as TemplateFindManyArgs };
