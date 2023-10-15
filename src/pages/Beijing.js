import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { Card, CardColumns } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import BeijingData from "../components/BeijingData";

const BeijingLandingPage = () => {
    let data = [
        {
            title: "1. You can hangout in hutongs",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP67910075_Hutongs_Travel.jpg?imwidth=1280",
            description_1: "Most of Beijing’s hutong districts have, alas, been swept away by the tide of progress, demolished to make way for new roads and shiny skyscrapers. But some of these low-rise, narrow-street neighbourhoods have clung on and today they offer a rare glimpse of a bygone Beijing. Some of the city’s best bars, restaurants and markets can be found in the last remaining hutongs where residents live cheek by jowl as they have done for centuries. ",

        },
        {
            title: "2.There’s a giant wall ",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/E4JYJ4_GreatWall_Travel.jpg?imwidth=1280",
            description_1: "Myths abound about the Great Wall of China, which, contrary to popular belief, cannot be seen from space (at least not with the naked eye). Built to keep marauding armies out of China, the defensive wall – which dates back to the 7th century – meanders roughly 5,500 miles across the country. Some of the best preserved sections, however, are located just outside Beijing, such as the scenic Juyong Pass."


        },
        {
            title: "3.You are (now) permitted to enter the Forbidden City",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP76405048_Forbidden_Travel.jpg?imwidth=1280",
            description_1: "A visit to the world’s largest palace complex is forbidden no more; in fact, for many tourists, a trip to this rambling fortress is one of Beijing’s numerous highlights. Off limits for nearly 500 years, the Forbidden City was home to two reclusive dynasties between 1420 and 1912, but today everyone can enjoy the imperial architecture and art of this Unesco World Heritage Site."


        },
        {
            title: "4. You can feel the weight of history in Tiananmen Square",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP73571837_Zhengyangmen_Tra.jpg?imwidth=1280",
            description_1: "China’s ceaseless censorship tsars work overtime to stop its citizens learning about the 1989 Tiananmen Square massacre, when government troops brutally supressed a pro-democracy rally, leaving scores dead. Feel the weight of history with a visit to the square, where the “Tank Man” famously stood in front of a column of tanks the day after the massacre.",

        },
        {
            title: "5. It has (nearly) all the tea in China",
            imageUrl: "https://imgs.search.brave.com/-T0WvaT49iXyoctZy626F2EMveqC34gKHLp2lvIqRq8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUy/ZGE5Njc3ZTRiMDNk/MzE0NTc1OTg1YS8x/NTc0NDQ1ODQ1NTI5/LUlZNUhMTEhSVFJJ/SUxUQ1dZU0tQL0Bl/bGVuYV9zdGFmeWV2/YSstK0J1bGdhcmkr/SG90ZWwrQmVpamlu/Zy5qcGc",
            description_1: "Taking tea is a time-honoured tradition in China and for travellers wedded to a builder’s brew, Beijing’s bountiful infusions could provide grounds for divorce. There’s a tea for every occasion in the city – green tea, gunpowder tea, golden monkey tea and jasmine tea, to name a few – and the best place to sample them is Maliandao Tea Market, where some 900 vendors ply their leafy trade."
        },
        {
            title: "6. It does the best Peking duck",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP100739203_Peking_Travel.jpg?imwidth=1280",
            description_1: "Most of us know a Chinese restaurant that does a decent Peking duck, but for the genuine article you really need to visit Beijing, formerly Peking, which invented the dish"

        },
        {
            title: "7. But there are many other culinary delights",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP98423292_Food_Travel.jpg?imwidth=1280",
            description_1: "Beijing is food mad and, as the capital of China, it champions cuisine from the country’s many provinces, which all have distinctly different tastes. Dine on dumplings, tickle your tongue with a hotpot, slurp soup, graze on grasshoppers, fill up on flatbreads and nosh noodles, then realise you’ve merely scratched the surface."

        },
        {
            title: "8. Leftfield architecture abounds",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/DJYMXW_Galaxy_Travel.jpg?imwidth=1280",
            description_1: "What could be a better metaphor for China’s lofty ambitions than Beijing’s bold, beautiful and, at times, bizarre architecture? It might not float everyone’s boat, but it’s hard not to be impressed by gregarious structures such as Galaxy Soho, the National Centre for Performing Arts and CCTV Headquarters, home to China Central Television. The National Stadium, which starred in the 2008 Olympic Games, is another architectural wonder not to be missed. "

        },
        {
            title: "9. You can lose yourself in imperial parks",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP72368801_Beihai_Travel.jpg?imwidth=1280",
            description_1: "Despite being blanketed by smog for much of the year, aesthetically speaking Beijing is quite a green city thanks to its many parks. Ritan, Ditan and Beihai are a few of Beijing’s most pleasant open spaces, where you can escape the bustle of the city, watch old people practice tai chi, and marvel at the imperial splendour of these ancient pleasure gardens. "

        },
        {
            title: "10. There are bargains to be had",
            imageUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/GettyImages-98003237_Panjia.jpg?imwidth=1280",
            description_1: "The economic reforms of the Seventies ushered in an era of mass consumerism in China, which could raise eyebrows amongst even the most ardent shoppers. Modern Beijing does a roaring trade in everything from knock-off designer goods to state-of-the-art electronics. Sleek shopping malls, kitsch night markets and designer boutiques are plentiful, but for more authentic wares hit the Panjiayuan Antique Market where bartering is considered a sport"
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
                    <h1> 10 reasons why Beijing should be on your radar</h1>
                    <p>
                    China’s pulsating capital – a city of imperial history, abundant restaurants, leafy parks and time-honoured tea rituals – is now that little bit closer for millions of Britons thanks to the launch of new direct flights between Manchester and Beijing. The four-times-a-week service with <a className="text-decoration-none text-primary" >Hainan Airlines</a>  makes Manchester the only UK airport outside of London to offer year-round direct access to mainland China.
                    
                    </p>
                   
                    <ul>
                        <li>1. You can hangout in hutongs</li>
                        <li>2. There’s a giant wall</li>
                        <li>3. You are (now) permitted to enter the Forbidden City</li>
                        <li>4. You can feel the weight of history in Tiananmen Square</li>
                        <li>5. It has (nearly) all the tea in China</li>
                        <li>6. It does the best Peking duck</li>
                        <li>7. But there are many other culinary delights</li>
                        <li>8. Leftfield architecture abounds</li>
                        <li>9. You can lose yourself in imperial parks</li>
                        <li>10. There are bargains to be had</li>
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
                                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP72368801_Beihai_Travel.jpg?imwidth=1280"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/AP73571837_Zhengyangmen_Tra.jpg?imwidth=1280"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/China/Beijing/E4JYJ4_GreatWall_Travel.jpg?imwidth=1280"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="section2 mt-5 container">
                <div className="feature-service d-flex flex-column gap-5 gap-md-1 flex-md-row mt-4">
                    <div className="gap-2 flex-column flex-lg-row">
                        {data.map((item, index) => (
                            <BeijingData key={index} CardData={item} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="two-feature mb-5 mt-1 container d-flex flex-column flex-md-row gap-3">
                <div className="pop-card  w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
                    <h1 className="mb-5">Best Beijing: Tours and tickets</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://data.travelchinaguide.com/package/image/great-wall10_0905193.jpg" />
                                <Card.Body>
                                    <Card.Title>4 Days Best Beijing Best Tour From <h4 className=" text-primary" >USD 539</h4> </Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://data.travelchinaguide.com/package/image/summer-palace8_0905193.jpg" />
                                <Card.Body>
                                    <Card.Title>3-Day Beijing City Tour From <h4 className=" text-primary" >USD 429</h4></Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                            <Card.Img variant="top" src="https://data.travelchinaguide.com/package/image/great-wall-beijing-0905193.jpg" />
                                <Card.Body>
                                    <Card.Title>2 Days Beijing Imperial Tour From  <h4 className=" text-primary" >USD 239</h4></Card.Title>
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
                                <Card.Img variant="top" src="https://data.travelchinaguide.com/tour/image/905/cycling-on-xian-city-wall.jpg" />
                                <Card.Body>
                                    <Card.Title>6 Day's Beijing - Xi'an From  <h4 className=" text-primary" >USD 919</h4></Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://data.travelchinaguide.com/tour/image/905/shagnhai-bund.jpg" />
                                <Card.Body>
                                    <Card.Title>6 Days Beijing - Shanghai<h4 className=" text-primary" >USD 989</h4></Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://data.travelchinaguide.com/tour/image/905/terracotta-army-xian.jpg" />
                                <Card.Body>
                                    <Card.Title>One Day Beijing To Terracotta<h4 className=" text-primary" >USD 119</h4></Card.Title>
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

export default BeijingLandingPage;


