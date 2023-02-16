import React from 'react';
import { WriteReviewMAPP } from 'write-review-miniapp';

const App = () => {
  const data = {
    productName: 'Jordan Shoes',
    nickName: 'Jasper',
    reviewTitle: 'Satisfied Costumer',
    reviewDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
