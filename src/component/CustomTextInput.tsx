import React from 'react';
import { Text, TextInput, View } from 'react-native';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

type Props = {
  inputStyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  inputLabel?: string;
  multiline?: boolean;
  textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top' | undefined;
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
});
export default CustomTextInput;
