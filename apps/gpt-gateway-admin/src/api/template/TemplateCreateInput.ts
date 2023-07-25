import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageTypeWhereUniqueInput } from "../messageType/MessageTypeWhereUniqueInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TemplateCreateInput = {
  messages?: MessageWhereUniqueInput | null;
  messageTypes?: MessageTypeWhereUniqueInput | null;
  model: ModelWhereUniqueInput | null;
  params?: string | null;
};
