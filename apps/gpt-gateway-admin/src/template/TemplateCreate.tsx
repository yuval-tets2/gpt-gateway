import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MessageTypeTitle } from "../messageType/MessageTypeTitle";
import { ModelTitle } from "../model/ModelTitle";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="messageTypes.id"
          reference="MessageType"
          label="Message Types"
        >
          <SelectInput optionText={MessageTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="Params" source="params" />
      </SimpleForm>
    </Create>
  );
};