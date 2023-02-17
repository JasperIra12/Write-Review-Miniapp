import React from 'react';
import { WriteReviewMAPP } from 'write-review-miniapp';

const App = () => {
  const data = {
    id: 1,
    productName: 'Jordan Shoes',
    nickName: '',
    reviewTitle: '',
    rating: 0,
    reviewDescription: '',
  };
  return (
    <>
      <WriteReviewMAPP
        dataIn={{
          textInputStyle: {},
          errorMessages: {},
        }}
        dataLoad={data}
        dataOut={(value) => console.log(value)}
      />
    </>
  );
};

export default App;
