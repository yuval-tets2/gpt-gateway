import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type ModelWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  templates?: TemplateWhereUniqueInput;
};
