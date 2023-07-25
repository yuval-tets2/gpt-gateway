import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "id";

export const MessageTitle = (record: TMessage): string => {
  return record.id || String(record.id);
};
