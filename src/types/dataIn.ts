import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type WriteReviewDataIn = {
    formContainerStyle?: StyleProp<ViewStyle>;

    headerStyle?: {
        headerText?: string;
        headerTextStyle?: StyleProp<TextStyle>;
    }

    productStyle?: {
        productReviewerText?: string;
        productReviewerTextStyle?: StyleProp<TextStyle>;
        productTextStyle?: StyleProp<TextStyle>;
    }

    submitButtonStyle?: {
        buttonText?: string;
        buttonStyle?: StyleProp<ViewStyle>;
        submitButtonTextStyle?: StyleProp<TextStyle>;
    }
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

        nicknameStyle?: {
            inputStyle?: StyleProp<TextStyle>;
            inputLabel?: string;
            placeholder?: string;
            inputLabelStyle?: StyleProp<TextStyle>;
            nicknameFieldIsShow?: boolean;
            placeholderTextColor?: string;
            multiline?: boolean;
            textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        }

        reviewTitleStyle?: {
            inputStyle?: StyleProp<TextStyle>;
            inputLabel?: string;
            placeholder?: string;
            inputLabelStyle?: StyleProp<TextStyle>;
            reviewTitleFieldIsShow?: boolean;
            placeholderTextColor?: string;
            multiline?: boolean;
            textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        }

        reviewDescriptionStyle?: {
            inputStyle?: StyleProp<TextStyle>;
            inputLabel?: string;
            placeholder?: string;
            inputLabelStyle?: StyleProp<TextStyle>;
            reviewDescriptionFieldIsShow?: boolean;
            placeholderTextColor?: string;
            multiline?: boolean;
            textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top';
        }


    }
    errorMessages?: {
        ratingErrorMessage?: string;
        nicknameFieldErrorMessage?: string;
        reviewTitleFieldErrorMessage?: string;
        reviewDescriptionFieldErrorMessage?: string;

    }
};