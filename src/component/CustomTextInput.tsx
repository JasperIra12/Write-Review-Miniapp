import React from 'react';
import { Text, TextInput, View } from 'react-native';
import {
  StyleProp,
  TextStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

type Props = {
  inputStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  inputLabelStyle?: StyleProp<TextStyle>;
  value?: string;
  placeholder: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  inputLabel?: string;
  multiline?: boolean;
  textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top' | undefined;
  error?: string;
};

const CustomTextInput = ({
  inputStyle,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  inputLabel,
  multiline,
  textAlignVertical,
  error,
}: Props) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.textInputLabel]}>{inputLabel}</Text>
      <TextInput
        style={[styles.textInputStyle, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  textInputLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  textInputStyle: {
    height: 45,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  error: {
    color: 'red',
  },
});
export default CustomTextInput;
