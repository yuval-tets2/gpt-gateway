import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messagesId?: SortOrder;
  messageTypesId?: SortOrder;
  modelId?: SortOrder;
  params?: SortOrder;
  updatedAt?: SortOrder;
};
