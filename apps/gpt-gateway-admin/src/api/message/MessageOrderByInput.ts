import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
};
