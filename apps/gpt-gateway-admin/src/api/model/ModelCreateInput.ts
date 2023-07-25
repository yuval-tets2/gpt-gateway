import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type ModelCreateInput = {
  name: string;
  templates?: TemplateWhereUniqueInput | null;
};
