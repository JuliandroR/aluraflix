import React from 'react';
import PropTypes from 'prop-types';

import {
  ContainerInput, Input, Label, TextArea,
} from './styles';

function FormFields({
  label, type, specific, name, value, onChange,
}) {
  if (type !== 'textarea') {
    return (
      <ContainerInput>
        <Input
          className="input"
          type={specific}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text className="label">{label}</Label.Text>
      </ContainerInput>
    );
  }
  return (
    <ContainerInput>
      <TextArea
        className="input"
        type={specific}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Label.Text className="label">{label}</Label.Text>
    </ContainerInput>
  );
}

FormFields.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormFields.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  specific: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormFields;
