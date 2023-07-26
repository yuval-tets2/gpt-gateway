import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { MessageTypeListRelationFilter } from "../messageType/MessageTypeListRelationFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  messages?: MessageWhereUniqueInput;
  messageTypes?: MessageTypeListRelationFilter;
  model?: ModelWhereUniqueInput;
  params?: StringNullableFilter;
};
