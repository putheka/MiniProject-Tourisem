import React from 'react';
import Button from 'react-bootstrap/Button';

function SiemreapData(props) {
  return (
    <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <div className="service-provide mt-5 mb-5 text-center">
        <h2 className="mt-5">{props.CardData.title}</h2>
      </div>
        <p className="mt- mx-3">{props.CardData.description_1}</p>
      <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
        <img
          effect="opacity"
          className="img-fluid w-75 mb-5"
          src={props.CardData.imageUrl}
          alt="img"
        />
        <p className="mt-1 mx-3 my-5">{props.CardData.description_2}</p>
        <Button className='mb-5' variant="secondary">Read More</Button>{' '}
      </div>
    </div>
  );
}

export default SiemreapData;


