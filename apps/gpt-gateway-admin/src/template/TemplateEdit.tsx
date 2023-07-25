import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MessageTypeTitle } from "../messageType/MessageTypeTitle";
import { ModelTitle } from "../model/ModelTitle";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};