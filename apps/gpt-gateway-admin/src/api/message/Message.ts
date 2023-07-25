export type Message = {
  content: string;
  createdAt: Date;
  id: string;
  role?: "user" | "system" | "assistant";
  updatedAt: Date;
};
