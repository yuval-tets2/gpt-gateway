import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  role: "User" | "System" | "Assistant";
  template?: TemplateWhereUniqueInput | null;
};
