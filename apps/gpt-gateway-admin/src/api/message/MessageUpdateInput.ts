import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  role?: "User" | "System" | "Assistant";
  template?: TemplateWhereUniqueInput | null;
};
