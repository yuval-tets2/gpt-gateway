import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEMPLATE_TITLE_FIELD } from "./TemplateTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { MODEL_TITLE_FIELD } from "../model/ModelTitle";

export const TemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Messages"
          source="message.id"
          reference="Message"
        >
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Model" source="model.id" reference="Model">
          <TextField source={MODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Params" source="params" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MessageType"
          target="templateId"
          label="Message Types"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Key" source="key" />
            <ReferenceField
              label="Template"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
