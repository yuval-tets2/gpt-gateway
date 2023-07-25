import { MessageTypeWhereUniqueInput } from "../messageType/MessageTypeWhereUniqueInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TemplateCreateInput = {
  messageTypes?: MessageTypeWhereUniqueInput | null;
  model: ModelWhereUniqueInput | null;
  params?: string | null;
};
