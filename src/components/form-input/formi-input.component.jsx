import React from "react";

import { FormLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...others }) => {
  return (
    <Group>
      <Input {...others} />

      {label && <FormLabel shrink={others.value.length}>{label}</FormLabel>}
    </Group>
  );
};

export default FormInput;
