import React from 'react';
import { Text } from 'react-native';

const Title: React.FC<{ text: string }> = ({ text }) => (
  <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{text}</Text>
);

export default Title;
