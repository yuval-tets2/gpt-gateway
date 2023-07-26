import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { MessageTypeListRelationFilter } from "../messageType/MessageTypeListRelationFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  messageTypes?: MessageTypeListRelationFilter;
  model?: ModelWhereUniqueInput;
  params?: StringNullableFilter;
};
