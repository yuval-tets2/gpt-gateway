import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageTypeUpdateManyWithoutTemplatesInput } from "./MessageTypeUpdateManyWithoutTemplatesInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TemplateUpdateInput = {
  messages?: MessageWhereUniqueInput | null;
  messageTypes?: MessageTypeUpdateManyWithoutTemplatesInput;
  model?: ModelWhereUniqueInput | null;
  params?: string | null;
};
