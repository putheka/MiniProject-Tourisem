import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "../style/Toyko.css"
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card, CardColumns } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import Mycard from "../components/ToykoData";

const ToykoLandingPage = () => {
  let data = [
    {
      title : "Why you should visit Tokyo",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2019/12/Tokio-Mori-Tower-1024x576.jpg",
      description_1 : " Japan is one of the most popular travel destinations for the region. Japan maintains a strong sense of traditional and cultural history while also being a world leader in innovative technology and fashion. Tokyo, in particular, is an exciting and bustling city that boasts a wide range of activities. Here are eight reasons why you should pick Tokyo for your next vacation.",
      description_2 : ""


    },
    {
      title : "1. Akihabara",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2017/07/Tokyo-Akihabara-1024x576.jpg",
      description_1 : "For those with a strong interest in tech gear or geeky hobbies, Akihabara is the place to go. The area has many shops carrying everything from toy models to the latest digital devices. Beyond the gadget stores, there are large department stores you can visit.",
      description_2 : "Make sure you have control of your budget, as this is a higher-end district with prices to match. Shopping is a major pastime in this city. You can find the latest boutique fashions as well as tons of vintage shops and everything else in between. When you’re out, be sure to have your passport. You won’t be able to haggle at most places but there are some shop owners who might give you additional discounts."
      

    },
    {
      title : "2. Kabuki Theater",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2020/06/Tokio-Kabuki-1024x576.jpg",
      description_1 : "If you want to have a historical experience while in Tokyo, you can attend a Kabuki show. Kabuki is a type of drama with very elaborate makeup, involving bright white paint on actors’ faces as well as detailed masks. There is miming, music and dancing that depends largely on the actors’ skills. And despite the multitude of female characters in the plays, all the actors are men.",
      description_2 : "You can buy tickets on site for a show. If you want to learn more about the tradition of Kabuki we can recommend a guided and interactive tour of the Kabuki-za Gallery"
      

    },
    {
      title : "3. Cherry Blossom (Sakura) viewing",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2020/06/Tokio-Cherry-Blossom-Sakura-1024x576.jpg",
      description_1 : "One of the most picturesque scenes that are popular from Japan is the rows of cherry and plum blossom trees. The petals float through the air and look like snow, giving a great backdrop for photos. The only downside is that these blossoms are at their fullest during the spring and they only last about a week.",
      
    },
    {
      title : "4. Harajuku fashion",
      imageUrl : "https://japan-avenue.com/cdn/shop/articles/harajuku-min.webp?v=1693135149&width=1000",
      description_1 : "Outrageous fashion trends aren’t left to magazines in Tokyo. On a daily basis, you can see Japanese citizens wearing styles like Harajuku. Harajuku fashion involves bright colors, platform shoes and teased hair, sometimes also very colorful."
    },
    {
      title : "5. Shrines and Temples",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2017/07/Tokyo-Sensoji-Temple-Asakusa-1024x576.jpg",
      description_1:"A hallmark of Japanese scenery is the brightly painted shrines that are located around the city. The shrines are used for Buddhist or Shinto practices but are open to the public.",
      description_2:"There are many more temples and shrines in the Asakusa neighborhood like the Bentendo Hall, a part of Tokyo’s oldest temple, or the Shrine of the Three Gods, the Asakusa Temple. By the way: An exciting way to explore the area would be a Tokyo Asakusa rickshaw tour."

    },
    {
      title : "6. Odaiba",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2020/06/Tokio-Gundam-Odaiba-1024x576.jpg",
      description_1:"There is an otherworldly quality to the section of Tokyo known as Odaiba. Located next to the city center, Odaiba is its own floating island offering restaurants, gorgeous architecture and various entertainment. The National Museum of Emerging Science and Innovation is located there, as well as the enormous car showroom called the Toyota Mega Web.",
      description_2:"If you’re wondering where to stay in Tokyo with kids, consider staying in Odaiba as it will surely keep your children occupied with activities."

    },
    {
      title : "7. The Food",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2017/07/Tokyo-Ramen.jpg",
      description_1:"When people think of Japanese food, usually their first thought is sushi. Sushi in Tokyo is a delicious option but not the only one. You’ll find restaurants offering traditional Japanese staples like Ramen but also more western influenced eateries like fast food chains.",
      description_2:"There are also dessert-only cafes and maid cafes, which offer different themed foods. Definitely try Japanese curry, as it’s very different from the Indian and Caribbean versions of this dish. A great way to explore the Japanese cuisine is to take a guided Tokyo food tour."

    },
    {
      title : "8. Studio Ghibli Museum",
      imageUrl : "https://homeiswhereyourbagis.com/wp-content/uploads/2019/10/Tokio-Shibuya-1024x576.jpg",
      description_1:"Studio Ghibli is an animation house that has released several movies that have achieved worldwide popularity. The work within the museum focuses on director Miyazaki Hayao’s works, spanning the entirety of his career. This is an awesome choice for those who enjoy animated movies or have young members in their travel party.",
      description_2:"Staying in Tokyo can be a rich cultural experience and give you a host of new memories. Having an open mind as you move through the city can lead you to interesting shops, restaurants and just sights found off the beaten path. You can enjoy a traditional cultural experience or try something innovative."

    }
    
      
  ]
  return (
    <div className="d-flex flex-column service">
      <div
        className="container d-flex 
        gap-2
      flex-column flex-md-row justify-content-between mt-5"
      >
        <div className="text-side w-100 w-md-50 order-2 order-md-1">
          <h1> 8 Reasons Tokyo Should Be Your Next Travel Destination </h1>

          <p>Choosing the right destination for a vacation can be overwhelming. There are so many wonderful options offering different experiences. Romantic cities like Paris or Rome make great choices to vacation.<a className="text-decoration-none text-success" href="#">Traveling to asia</a> can bring new insights and tastes you might have only read about.</p>
          <ul>
            <li>1. Akihabara</li>
            <li>2. Kabuki Theater</li>
            <li>3. Cherry Blossom (Sakura) viewing</li>
            <li>4. Harajuku fashion</li>
            <li>5. Shrines and Temples</li>
            <li>6. Odaiba</li>
            <li>7. The Food</li>
            <li>8. Studio Ghibli Museum</li>

          </ul>

          <button className="btn btn-secondary mt-5">
            {" "}
            <span className="pre-scrollable  ">
              <strong> Discover More  </strong>
            </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="image-side order-1 order-md-3 text-center w-100 w-md-75 m-lg-5 p-lg-5   my-md-auto my-lg-0 ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-3 "
                src="https://homeiswhereyourbagis.com/wp-content/uploads/2017/07/Tokyo-Akihabara-1024x576.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className=" fs-4">Akihabara</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-3"
                src="https://homeiswhereyourbagis.com/wp-content/uploads/2020/06/Tokio-Cherry-Blossom-Sakura-1024x576.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className=" fs-4">Cherry Blossom (Sakura) viewing</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-3"
                src="https://homeiswhereyourbagis.com/wp-content/uploads/2017/07/Tokyo-Ramen-1024x576.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="fs-4">
                The Food
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="two-feature mb-5 mt-4 container d-flex flex-column flex-md-row gap-3">
      <div className="pop-card  w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
        <h1 className="mb-5">Tokyo: Tours and tickets</h1>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5534db7ebdf15b4d.jpeg/156.webp" />
              <Card.Body>
                <Card.Title>Mt. Fuji, Hakone, Lake Ashi Cruise </Card.Title>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Last updated 10 mins ago</small>
                <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
              </Card.Footer>
              
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/63d221b367ca6.jpeg/156.webp" />
              <Card.Body>
                <Card.Title>Full-Day Ture and Hakone Cruise</Card.Title>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Last updated 10 mins ago</small>
                <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/60e5561c429f3.jpeg/156.webp" />
              <Card.Body>
                <Card.Title>Digital Art Museum Entrance Ticket</Card.Title>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Last updated 10 mins ago</small>
                <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>


      <div className="section2 mt-5 container">
       
      

         <div className="feature-service d-flex flex-column gap-5 gap-md-1 flex-md-row mt-4">
         <div className="gap-2 flex-column flex-lg-row">
        {data.map((item, index) => (
          <Mycard key={index} CardData={item} />
        ))}
        </div>
      </div>
      </div>
      
      <div className="mt-5">
        <Footer />
      </div>


    </div>
  );
};

export default ToykoLandingPage;

