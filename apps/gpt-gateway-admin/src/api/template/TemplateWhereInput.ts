import { StringFilter } from "../../util/StringFilter";
import { MessageTypeWhereUniqueInput } from "../messageType/MessageTypeWhereUniqueInput";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  messageTypes?: MessageTypeWhereUniqueInput;
  model?: ModelWhereUniqueInput;
  params?: StringNullableFilter;
};
