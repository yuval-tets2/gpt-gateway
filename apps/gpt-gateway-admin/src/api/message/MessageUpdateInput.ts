import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  role?: "user" | "system" | "assistant";
  template?: TemplateWhereUniqueInput | null;
};
