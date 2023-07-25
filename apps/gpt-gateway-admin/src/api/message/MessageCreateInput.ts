import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  role: "user" | "system" | "assistant";
  template?: TemplateWhereUniqueInput | null;
};
