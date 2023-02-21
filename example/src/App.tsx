import React from 'react';
import { WriteReviewMAPP } from 'write-review-miniapp';

const App = () => {
  const data = {
    id: 1,
    productName: 'Jordan Shoes',
    type: '',
  };
  return (
    <>
      <WriteReviewMAPP
        dataIn={{}}
        dataLoad={data}
        dataOut={(value) => console.log(value)}
      />
    </>
  );
};

export default App;
