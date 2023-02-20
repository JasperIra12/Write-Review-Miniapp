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

  const validateInputData = (inputData: any) => {
    const errors = { ...errorMessages };

    if (inputData.rating === 0) {
      errors.rating =
        dataIn?.errorMessages?.ratingErrorMessage ||
        'Please provide a rating value';
    }

    if (inputData.nickName.length === 0 || inputData.nickName.length > 8) {
      errors.nickName =
        dataIn?.errorMessages?.nicknameFieldErrorMessage ||
        'Nickname must be between 1 and 8 characters long';
    }

    if (inputData.reviewTitle.length === 0) {
      errors.reviewTitle =
        dataIn?.errorMessages?.reviewTitleFieldErrorMessage ||
        'Review title cannot be empty';
    }

    if (inputData.reviewDescription.length === 0) {
      errors.reviewDescription =
        dataIn?.errorMessages?.reviewDescriptionFieldErrorMessage ||
        'Review description cannot be empty';
    }

    return errors;
  };

  const handleFormSubmit = () => {
    const errors = validateInputData(inputData);
    setErrorMessages(errors);

    const hasErrors = Object.values(errors).some(
      (errorMessage) => errorMessage !== ''
    );

    if (!hasErrors) {
      dataOut({ ...dataLoad, ...inputData, type: 'Successful' });
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
  };
};
