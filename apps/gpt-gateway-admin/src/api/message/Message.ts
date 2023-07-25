import { Template } from "../template/Template";

export type Message = {
  content: string;
  createdAt: Date;
  id: string;
  role?: "user" | "system" | "assistant";
  template?: Template | null;
  updatedAt: Date;
};
