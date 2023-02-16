import React from 'react';
import WriteReviewScreen from './screen/WriteReviewScreen';
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
