import React from 'react';

function Mycard(props) {
  console.log("this is prop " , props)
  return (
    <>
      <div className="service-provide mt-5 mb-4 text-center">
        <h2>{props.CardData.title}</h2>
      </div>
        <p className="mt-3">{props.CardData.description_1}</p>
      <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
        <img
          effect="opacity"
          className="img-fluid w-75"
          src={props.CardData.imageUrl}
          alt="img"
        />
        <p className="mt-3">{props.CardData.description_2}</p>
       
      </div>
    </>
  );
}

export default Mycard;
