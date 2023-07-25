import { MessageType } from "../messageType/MessageType";
import { Model } from "../model/Model";

export type Template = {
  createdAt: Date;
  id: string;
  messageTypes?: MessageType | null;
  model?: Model | null;
  params: string | null;
  updatedAt: Date;
};
