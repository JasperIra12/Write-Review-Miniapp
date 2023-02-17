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
        nicknameFieldStyle?: StyleProp<TextStyle>;
        reviewTitleFieldStyle?: StyleProp<TextStyle>;
        reviewDescriptionFieldStyle?: StyleProp<TextStyle>;
        nicknameFieldLabel?: string;
        reviewTitleFieldLabel?: string;
        reviewDescriptionFieldLabel?: string;
        nicknameFieldPlaceholder?: string;
        reviewTitleFieldPlaceholder?: string;
        reviewDescriptionFieldPlaceholder?: string;
        nicknameFieldLabelStyle?: StyleProp<TextStyle>;
        reviewTitleFieldLabelStyle?: StyleProp<TextStyle>;
        reviewDescriptionFieldLabelStyle?: StyleProp<TextStyle>;
        placeholderTextColor?: string;
        multiline?: boolean;
        textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        nicknameFieldIsShow?: boolean;
        reviewTitleFieldIsShow?: boolean;
        reviewDescriptionFieldIsShow?: boolean;
    }
    errorMessages?: {
        ratingErrorMessage?: string;
        nicknameFieldErrorMessage?: string;
        reviewTitleFieldErrorMessage?: string;
        reviewDescriptionFieldErrorMessage?: string;

    }
};