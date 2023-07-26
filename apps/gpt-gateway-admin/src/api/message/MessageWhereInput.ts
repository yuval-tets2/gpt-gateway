import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  position?: IntNullableFilter;
  role?: "User" | "System" | "Assistant";
  template?: TemplateWhereUniqueInput;
};
