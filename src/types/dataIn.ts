import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type WriteReviewDataIn = {
    formContainerStyle?: StyleProp<ViewStyle>;
    headerText?: string;
    productTextStyle?: StyleProp<TextStyle>;
    headerTextStyle?: StyleProp<TextStyle>;
    ratingLabel?: string
    ratingLabelStyle?: StyleProp<TextStyle>;
    submitButtonStyle?: StyleProp<ViewStyle>;
    submitButtonTextStyle?: StyleProp<TextStyle>;

    textInputStyle?: {
        firstInputStyle?: StyleProp<TextStyle>;
        secondInputStyle?: StyleProp<TextStyle>;
        thirdInputStyle?: StyleProp<TextStyle>;
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
    errorMessages?: {
        ratingErrorMessage?: string;
        firstInputErrorMessage?: string;
        secondInputErrorMessage?: string;
        thirdInputErrorMessage?: string;

    }
};