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

  const handleFormSubmit = () => {
    const error = { ...errorMessages };

    if (inputData.rating === 0) {
      error.rating =
        dataIn?.errorMessages?.ratingErrorMessage ||
        'Please provide a rating value';
    } else {
      error.rating = '';
    }
    if (inputData.nickName.length === 0 || inputData.nickName.length > 8) {
      error.nickName =
        dataIn?.errorMessages?.nicknameFieldErrorMessage ||
        'Nickname must be between 1 and 8 characters long';
    } else {
      error.nickName = '';
    }

    if (inputData.reviewTitle.length === 0) {
      error.reviewTitle =
        dataIn?.errorMessages?.reviewTitleFieldErrorMessage ||
        'Review title cannot be empty';
    } else {
      error.reviewTitle = '';
    }

    if (inputData.reviewDescription.length === 0) {
      error.reviewDescription =
        dataIn?.errorMessages?.reviewDescriptionFieldErrorMessage ||
        'Review description cannot be empty';
    } else {
      error.reviewDescription = '';
    }

    setErrorMessages(error);

    const hasErrors = Object.values(error).some(
      (errorMessage) => errorMessage !== ''
    );

    if (!hasErrors) {
      dataOut({ ...dataLoad, ...inputData });
    } else {
      dataOut({
        ...error,
        id: dataLoad.id,
        productName: dataLoad.productName,
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
    errorMessages,
  };
};
