import { Message } from "../message/Message";
import { MessageType } from "../messageType/MessageType";
import { Model } from "../model/Model";

export type Template = {
  createdAt: Date;
  id: string;
  messages?: Message | null;
  messageTypes?: Array<MessageType>;
  model?: Model | null;
  params: string | null;
  updatedAt: Date;
};
