import React from 'react';
import WriteReviewScreen from './component/WriteReviewForm/WriteReviewForm';
import type {
  WriteReviewDataIn,
  WriteReviewDataLoad,
  WriteReviewDataOut,
} from './types';

type Props = {
  dataLoad: WriteReviewDataLoad;
  dataIn: WriteReviewDataIn;
  dataOut: WriteReviewDataOut;
};

const WriteReviewMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  return (
    <>
      <WriteReviewScreen
        dataLoad={dataLoad}
        dataIn={dataIn}
        dataOut={dataOut}
      />
    </>
  );
};
export { WriteReviewDataIn, WriteReviewDataLoad, WriteReviewDataOut };
export default WriteReviewMAPP;
