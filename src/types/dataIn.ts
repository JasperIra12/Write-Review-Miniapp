import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type WriteReviewDataIn = {
    formContainerStyle?: StyleProp<ViewStyle>;
    headerText?: string;
    headerTextStyle?: StyleProp<TextStyle>;
    productReviewerText?: string;
    productReviewerTextStyle?: StyleProp<TextStyle>;
    productTextStyle?: StyleProp<TextStyle>;
    buttonText?: string;
    submitButtonStyle?: StyleProp<ViewStyle>;
    submitButtonTextStyle?: StyleProp<TextStyle>;

    ratingStyle?: {
        ratingLabel?: string
        ratingLabelStyle?: StyleProp<TextStyle>;
        ratingIconSize?: number;
        selectedRatingIconColor?: string;
        unSelectedRatingIconColor?: string;
        showRating?: boolean;
        ratingTextValue?: string[]
        ratingTextValueColor?: string
        ratingTextValueSize?: number
    }
    textInputStyle?: {
        firstInputFieldLabelName?: string;
        secondInputFieldLabelName?: string;
        thirdInputFieldLabelName?: string;
        firstInputFieldPlaceholder?: string;
        secondInputFieldPlaceholder?: string;
        thirdInputFieldPlaceholder?: string;
        firstInputFieldLabelStyle?: StyleProp<TextStyle>;
        secondInputFieldLabelStyle?: StyleProp<TextStyle>;
        thirdInputFieldLabelStyle?: StyleProp<TextStyle>;
        firstInputFieldStyle?: StyleProp<TextStyle>;
        secondInputFieldStyle?: StyleProp<TextStyle>;
        thirdInputFieldStyle?: StyleProp<TextStyle>;
        placeholderTextColor?: string;
        multiline?: boolean;
        textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        firstInputFieldIsShow?: boolean;
        secondInputFieldIsShow?: boolean;
        thirdInputFieldIsShow?: boolean;
    }
    errorMessages?: {
        ratingErrorMessage?: string;
        firstInputFieldErrorMessage?: string;
        secondInputFieldErrorMessage?: string;
        thirdInputFieldErrorMessage?: string;

    }
};