import { useState } from 'react';
import type {
  WriteReviewDataIn,
  WriteReviewDataLoad,
  WriteReviewDataOut,
} from 'src/types';

type Props = {
  dataIn: WriteReviewDataIn;
  dataLoad: WriteReviewDataLoad;
  dataOut: WriteReviewDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
  const [inputData, setInputData] = useState({
    nickName: '',
    reviewTitle: '',
    reviewDescription: '',
    rating: 0,
  });
  const [errorMessages, setErrorMessages] = useState({
    nickName: '',
    reviewTitle: '',
    reviewDescription: '',
    rating: '',
  });

  const dataToSave = () => {
    let dataToSave = {};

    if (dataIn?.textInputStyle?.nicknameStyle?.nicknameFieldIsShow === false) {
      dataToSave = {
        reviewTitle: inputData.reviewTitle,
        reviewDescription: inputData.reviewDescription,
        rating: inputData.rating,
      };
    } else if (
      dataIn?.textInputStyle?.reviewTitleStyle?.reviewTitleFieldIsShow === false
    ) {
      dataToSave = {
        nickName: inputData.nickName,
        reviewDescription: inputData.reviewDescription,
        rating: inputData.rating,
      };
    } else {
      dataToSave = {
        nickName: inputData.nickName,
        reviewTitle: inputData.reviewTitle,
        rating: inputData.rating,
      };
    }
    return dataToSave;
  };

  const validateInputData = (inputData: any) => {
    const errors = { ...errorMessages };

    if (inputData.rating === 0) {
      errors.rating =
        dataIn?.errorMessages?.ratingErrorMessage ||
        'Please provide a rating value';
    }

    if (
      dataIn.textInputStyle?.nicknameStyle?.nicknameFieldIsShow &&
      (inputData.nickName.length === 0 || inputData.nickName.length > 8)
    ) {
      errors.nickName =
        dataIn?.errorMessages?.nicknameFieldErrorMessage ||
        'Nickname must be between 1 and 8 characters long';
    }

    if (
      dataIn.textInputStyle?.reviewTitleStyle?.reviewTitleFieldIsShow &&
      inputData.reviewTitle.length === 0
    ) {
      errors.reviewTitle =
        dataIn?.errorMessages?.reviewTitleFieldErrorMessage ||
        'Review title cannot be empty';
    }

    if (
      dataIn.textInputStyle?.reviewDescriptionStyle
        ?.reviewDescriptionFieldIsShow &&
      inputData.reviewDescription.length === 0
    ) {
      errors.reviewDescription =
        dataIn?.errorMessages?.reviewDescriptionFieldErrorMessage ||
        'Review description cannot be empty';
    }

    return errors;
  };

  const handleFormSubmit = () => {
    const dataOnSave = dataToSave();
    const errors = validateInputData(inputData);
    setErrorMessages(errors);

    const hasErrors = Object.values(errors).some(
      (errorMessage) => errorMessage !== ''
    );

    if (!hasErrors) {
      dataOut({ ...dataLoad, ...dataOnSave, type: 'Successful' });
      setInputData({
        nickName: '',
        rating: 0,
        reviewTitle: '',
        reviewDescription: '',
      });
    } else {
      dataOut({
        id: dataLoad.id,
        productName: dataLoad.productName,
        type: 'Error',
      });
    }
  };

  const handleRatingChange = (value: number) => {
    setInputData({ ...inputData, rating: value });
    setErrorMessages({
      ...errorMessages,
      rating: '',
    });
  };
  const handleInputChange = (fieldName: string, value: string) => {
    setInputData({ ...inputData, [fieldName]: value });
    setErrorMessages({
      ...errorMessages,
      [fieldName]: '',
    });
  };

  return {
    handleFormSubmit,
    handleRatingChange,
    handleInputChange,
    inputData,
    errorMessages,
    dataToSave,
  };
};
