import React from 'react';
import { WriteReviewMAPP } from 'write-review-miniapp';

const App = () => {
  const data = {
    id: 1,
    productName: 'Jordan Shoes',
    nickName: 'Test',
    reviewTitle: 'Test',
    rating: 0,
    reviewDescription: 'Test',
  };
  return (
    <>
      <WriteReviewMAPP
        dataIn={{
          textInputStyle: {},
          errorMessages: {},
        }}
        dataLoad={data}
        dataOut={(value) => console.log('dataOut: ', value)}
      />
    </>
  );
};

export default App;
