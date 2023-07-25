import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MESSAGETYPE_TITLE_FIELD } from "../messageType/MessageTypeTitle";
import { MODEL_TITLE_FIELD } from "../model/ModelTitle";

export const TemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Templates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
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
      </Datagrid>
    </List>
  );
};
