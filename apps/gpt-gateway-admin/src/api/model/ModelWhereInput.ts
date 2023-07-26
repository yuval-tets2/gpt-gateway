import { StringFilter } from "../../util/StringFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type ModelWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  templates?: TemplateListRelationFilter;
};
