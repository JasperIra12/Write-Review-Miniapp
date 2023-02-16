import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type WriteReviewDataIn = {
    formContainerStyle?: StyleProp<ViewStyle>;
    headerText?: string;
    productTextStyle?: StyleProp<TextStyle>;
    headerTextStyle?: StyleProp<TextStyle>;
    ratingLabelStyle?: StyleProp<TextStyle>;
    submitButtonStyle?: StyleProp<ViewStyle>;
    submitButtonTextStyle?: StyleProp<TextStyle>;

    textInputStyle?: {
        inputStyle?: StyleProp<ViewStyle>;
        firstInputLabel?: string;
        secondInputLabel?: string;
        thirdInputLabel?: string;
        firstInputPlaceholder?: string;
        secondInputPlaceholder?: string;
        thirdInputPlaceholder?: string;
        placeholderTextColor?: string;
        multiline?: boolean;
        textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top' | undefined;
    }
};