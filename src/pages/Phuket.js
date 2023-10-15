import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "../style/Toyko.css"
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { Card, CardColumns } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import PhuketData from "../components/PhuketData";

const PhuketLandingPage = () => {
    let data = [
        {
            title: "1. Of course, the beaches of Phuket!",
            imageUrl: "https://content.phuket101.net/wp-content/uploads/20220407142408/freedom-beach-phuket-2-copy.jpg",
            description_2: "Phuket is blessed with more than 40 fantastic beaches, more than one could visit in a single holiday. And that’s for Phuket only! Trying to count all the dream beaches around Thailand would be impossible. The beaches in the south can be quite busy, but those in the north are equally beautiful and still peaceful. White powder sand with turquoise blue waters lined by swaying palm trees don’t only belong to Instagram; there are real here!",
            


        },
        {
            title: "2. Amazing landscapes",
            imageUrl: "https://content.phuket101.net/wp-content/uploads/20210728121852/samet-nangshe-viewpoint.jpg",
            description_2: "Thailand is a photographer’s paradise with places like Krabi and Phang Nga Bay with jaw-dropping viewpoints for fantastic sunsets. You don’t have to be a good photographer here; everyone will go home with stunning photos."


        },
        {
            title: "3. So many islands!",
            imageUrl: "https://content.phuket101.net/wp-content/uploads/20210626215509/koh-yao-island.jpg",
            description_2: "There are countless islands accessible from Phuket. The closest islands are just a 10 minutes longtail boat ride away, and others are worth a day trip or even a couple of nights. You can also spend a day hopping from island to island on a private cruise around the bay east of Phuket."


        },
        {
            title: "3. Cherry Blossom (Sakura) viewing",
            imageUrl: "https://homeiswhereyourbagis.com/wp-content/uploads/2020/06/Tokio-Cherry-Blossom-Sakura-1024x576.jpg",
            description_1: "One of the most picturesque scenes that are popular from Japan is the rows of cherry and plum blossom trees. The petals float through the air and look like snow, giving a great backdrop for photos. The only downside is that these blossoms are at their fullest during the spring and they only last about a week.",

        },
        {
            title: "4. Thai People",
            imageUrl: "https://www.phuket101.net/wp-content/uploads/thai-smile-1.jpg",
            description_2: "The first thing you notice in Thailand is how Thai people naturally smile at you for no particular reason. It’s surprising at first, but it seems to become quickly contagious. They are also surprisingly polite, prompt to share their food, and cheerful. After the tsunami, I was amazed by their resilience in the face of such unimaginable events. They are friendly, tolerant, respectful and easygoing. Isn’t it better to be in a country where people are healthy, smiling and friendly?"
        },
        {
            title: "5. Amazing Thai food",
            imageUrl: "https://content.phuket101.net/wp-content/uploads/20191202213922/baan-mae-taan-food.jpg",
            description_2: "Thai food is famous around the world. From basic street food to sophisticated Michelin Restaurants, the variations and choices of delicious Thai food seem endless. Often using simple ingredients, spices and sauces, Thai food doesn’t even make you fat (and Thais love to nibble all day long). Of course, there is a limit on how much you should eat, but considering the fantastic choice, Thai people look pretty healthy!"

        },
        {
            title: "6.So many tropical fruits!",
            imageUrl: "https://www.phuket101.net/wp-content/uploads/fruits-1.png",
            description_2: "The choice of tropical fruits you can taste in Phuket is like a dream come true. You can buy them at the market, on the street displays, or have them peeled and cut for you for a couple of baht from a street cart"

        },
        {
            title: "7.Warm weather all year round",
            imageUrl: "https://www.phuket101.net/wp-content/uploads/similans-islands-1.jpg",
            description_2: "How about an entire year without ever feeling cold? Sure, you could argue that it can be too hot from April to June, but even during the monsoon, the weather and water at the beach remain delightfully warm."

        },
        {
            title: "8. Explore night markets",
            imageUrl: "https://content.phuket101.net/wp-content/uploads/20190629085521/banzaan-night-market.jpg",
            description_2: "Night markets are fun to spend some time in Phuket at the end of the day. A few are only open on weekends, such as the Sunday Walking Street Market in Phuket Town, and others are open on weekdays, such as the popular Chillva Night Market. Night markets are not about shopping as much as eating, drinking, listening to music and having fun browsing an incredible array of food, objects and cloth."

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
                    <h1> Why is Phuket so popular? </h1>
                    <p>
                        Why is Phuket so popular? And what makes people come back to Phuket countless times? There are many good reasons to visit Phuket, and we picked the answers we thought were the most important.

                        Of course, there will always be some exceptions: some travellers didn’t like it, and some had unfortunate experiences. Some expats are grumpy because they forgot how lucky they are here and why they originally left. Of course, just like in any country, a few people are good, but the vast majority are, and hospitality and safety are higher than average here.

                        At the end of the day, why do people still come to Thailand? <a className="text-decoration-none text-primary" >Because not many other countries in the world offer all the things listed below in one place!</a> 
                    </p>
                   
                    <ul>
                        <li>1. Of course, the beaches of Phuket!</li>
                        <li>2. Amazing landscapes</li>
                        <li>3. So many islands!</li>
                        <li>4. Thai People</li>
                        <li>5. Amazing Thai Food</li>
                        <li>6. So many tropical fruits!</li>
                        <li>7. Warm weather all year round </li>
                        <li>8.  Explore night markets</li>

                    </ul>
                    <button className="btn btn-secondary mt-3">
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
                                src="https://www.phuket101.net/wp-content/uploads/similans-islands-1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className=" fs-4">Warm weather all year round</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://content.phuket101.net/wp-content/uploads/20210626215509/koh-yao-island.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className=" fs-4">CSo many islands!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://content.phuket101.net/wp-content/uploads/20210728121852/samet-nangshe-viewpoint.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className="fs-4">
                                Amazing landscapes
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="section2 mt-5 container">
                <div className="feature-service d-flex flex-column gap-5 gap-md-1 flex-md-row mt-4">
                    <div className="gap-2 flex-column flex-lg-row">
                        {data.map((item, index) => (
                            <PhuketData key={index} CardData={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="two-feature mb-5 mt-1 container d-flex flex-column flex-md-row gap-3">
                <div className="pop-card  w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
                    <h1 className="mb-5">Phuket: Tours and tickets</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/64be63357c919.png/156.webp" />
                                <Card.Body>
                                    <Card.Title>Ethical Elephant sanctuary</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/636bdc829761c.jpeg/156.webp" />
                                <Card.Body>
                                    <Card.Title>Southern Flavours Food</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/57fb48bc3eac3.jpeg/156.webp" />
                                <Card.Body>
                                    <Card.Title>Small Group City</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/f1516271973aa8dc.jpeg/156.webp" />
                                <Card.Body>
                                    <Card.Title>Maya Phi Phi And Bamboo Island</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/645f5041585fa.jpeg/156.webp" />
                                <Card.Body>
                                    <Card.Title>Paradis ATV Jungle Advanture</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/648039c32fdc1.jpeg/156.webp" />
                                <Card.Body>
                                    <Card.Title>Elephant Save & Care Program Tour</Card.Title>
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

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default PhuketLandingPage;


