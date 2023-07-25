import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageTypeWhereInput = {
  id?: StringFilter;
  key?: StringFilter;
  template?: TemplateWhereUniqueInput;
};
