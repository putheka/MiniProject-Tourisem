import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Silder() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='d-flex justify-content-center align-items-center mt-5'>
      <Carousel.Item>
        <img src="https://imgs.search.brave.com/Fod6qso08E2tmdZ1KNwEbQH_e2GTHopCdqYA_yRpb8g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5MjQy/MjM2NDctNDBhYmJh/YzA3N2MwP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVROOGZHTmhi/V0p2WkdsaGZHVnVm/REI4ZkRCOGZId3cm/dz0xMDAwJnE9ODA" width={600} height={400} />
        <Carousel.Caption>
          <h3>Angkor Wat (Angkor Archaeological Park)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="https://images.unsplash.com/photo-1645623533810-5f6404017080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhbWJvZGlhJTIwb3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width={600} height={400}/>
        <Carousel.Caption>
          <h3>Koh Kong Province</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://images.unsplash.com/photo-1582414004129-a955c6087f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" width={600} height={400} />
        <Carousel.Caption>
          <h3>Sihanoukville</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Silder;
