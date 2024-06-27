import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProxyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
