import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type ModelUpdateInput = {
  name?: string;
  templates?: TemplateWhereUniqueInput | null;
};
