import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "params";

export const TemplateTitle = (record: TTemplate): string => {
  return record.params || String(record.id);
};
