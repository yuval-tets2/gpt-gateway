import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { MESSAGETYPE_TITLE_FIELD } from "../messageType/MessageTypeTitle";
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
        <ReferenceField
          label="Message Types"
          source="messagetype.id"
          reference="MessageType"
        >
          <TextField source={MESSAGETYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Model" source="model.id" reference="Model">
          <TextField source={MODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Params" source="params" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
