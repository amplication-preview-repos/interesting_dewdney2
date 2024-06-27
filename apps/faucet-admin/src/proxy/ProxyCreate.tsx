import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProxyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
