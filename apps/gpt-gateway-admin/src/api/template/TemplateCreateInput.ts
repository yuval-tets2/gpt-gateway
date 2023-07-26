import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageTypeCreateNestedManyWithoutTemplatesInput } from "./MessageTypeCreateNestedManyWithoutTemplatesInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TemplateCreateInput = {
  messages?: MessageWhereUniqueInput | null;
  messageTypes?: MessageTypeCreateNestedManyWithoutTemplatesInput;
  model: ModelWhereUniqueInput | null;
  params?: string | null;
};
