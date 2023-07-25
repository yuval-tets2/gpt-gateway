import { Template } from "../template/Template";

export type Model = {
  createdAt: Date;
  id: string;
  name: string;
  templates?: Template | null;
  updatedAt: Date;
};
