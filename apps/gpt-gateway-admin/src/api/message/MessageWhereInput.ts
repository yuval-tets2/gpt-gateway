import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  role?: "user" | "system" | "assistant";
  template?: TemplateWhereUniqueInput;
};
