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
        firstInputLabelName?: string;
        secondInputLabelName?: string;
        thirdInputLabelName?: string;
        firstInputPlaceholder?: string;
        secondInputPlaceholder?: string;
        thirdInputPlaceholder?: string;
        firstInputLabelStyle?: StyleProp<TextStyle>;
        secondInputLabelStyle?: StyleProp<TextStyle>;
        thirdInputLabelStyle?: StyleProp<TextStyle>;
        firstInputStyle?: StyleProp<TextStyle>;
        secondInputStyle?: StyleProp<TextStyle>;
        thirdInputStyle?: StyleProp<TextStyle>;
        placeholderTextColor?: string;
        multiline?: boolean;
        textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        firstInputIsShow?: boolean;
        secondInputIsShow?: boolean;
        thirdInputIsShow?: boolean;
    }
    errorMessages?: {
        ratingErrorMessage?: string;
        firstInputErrorMessage?: string;
        secondInputErrorMessage?: string;
        thirdInputErrorMessage?: string;

    }
};