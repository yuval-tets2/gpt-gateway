import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageTypeWhereUniqueInput } from "../messageType/MessageTypeWhereUniqueInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  messages?: MessageWhereUniqueInput;
  messageTypes?: MessageTypeWhereUniqueInput;
  model?: ModelWhereUniqueInput;
  params?: StringNullableFilter;
};
