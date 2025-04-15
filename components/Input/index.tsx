import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={{ fontWeight: 'bold' }}>{label}</Text>
    <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 }}
      {...props}
    />
  </View>
);

export default InputField;
