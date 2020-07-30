import React from "react";

import { ContainerInput, Input, Label, TextArea } from "./styles";

function FormFields({ label, type, specific, name, value, onChange }) {
  if (type != "textarea") {
    return (
      <ContainerInput>
        <Label className="label">{label}</Label>
        <Input
          className="input"
          type={specific}
          name={name}
          value={value}
          onChange={onChange}
        />
      </ContainerInput>
    );
  } else {
    return (
      <ContainerInput>
        <Label className="label">{label}</Label>
        <TextArea
          className="input"
          type={specific}
          name={name}
          value={value}
          onChange={onChange}
        />
      </ContainerInput>
    );
  }
}

export default FormFields;
