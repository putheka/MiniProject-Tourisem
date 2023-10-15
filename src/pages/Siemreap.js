import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { Card, CardColumns } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import SiemreapData from "../components/SiemreapData";

const SiemreapLandingPage = () => {
    let data = [
        {
            title: "1. Take to the clouds for views rivalling the world’s best hot air balloon destinations",
            imageUrl: "https://static.tripzilla.com/thumb/d/3/161235_800x.jpg",
            description_2: "When it comes to hot-air ballooning, most globetrotters would immediately think of Cappadocia in Turkey, Bagan in Myanmar, and Napa Valley in California. But did you know that you can also have the same thrilling adventure when in Siem Reap? Take a flight on a hot air balloon and enjoy the majestic Siem Reap scenery from high above! It’s one of the most magical moments you can have, as you gently rise up from the ground instead of the usual speedy takeoff. While hovering at a perfect altitude, you can fully see the landscape dotted with forests, open fields, and even a few ancient temples that you can spot from a distance. Best to enjoy this ride during late afternoon, so you can watch the sunset cast a golden glow over the landscape. Aside from that, you’ll also witness other hot air balloons up in the air, which makes for a sight on its own too. While you’re at it, savour your quick escape from the noise of the world below. ",

        },
        {
            title: "2. Witness mind-boggling spectacles at Phare: The Cambodian Circus ",
            imageUrl: "https://imgs.search.brave.com/bzzihqXRTfbWaUQDaXjIYZR_qKhaVQyTD2-KYOLniPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l2aXRhdGlzLmNv/bS9mL2NhbWJveWEv/c2llbS1yZWFwL3Bo/YXJlLWNhbWJvZGlh/bi1jaXJjdXMtNTg5/eDM5Mi5qcGc",
            description_2: "For most of us, the circus has always been an object of fascination when we were children. But Cambodia’s Phare is a lot more than the usual circus — it expertly combines theatre, modern dance, and acrobatics to tell a story centred on various kinds of Cambodian stories: historical, folk, and modern. Think of it as a circus with a dash of history and culture lessons — sounds interesting, doesn’t it? Eight different productions are rotated monthly, each conveying a subtle but striking social message that will stick with you even after you’ve left Siem Reap. In fact, the world-class performers here are graduates of Phare Ponleu Selpak — an NGO performing arts training centre founded by former Cambodian refugees. Top that off with costumes that are as vibrant as the performers’ talents, and you’ve got a circus experience you won’t forget! Whether you’re travelling with friends or family, this show is bound to be enjoyed by anyone of any age. Since shows usually get sold out fast, it’s best to arrive early at the venue to get your tickets. For a fuss-free experience, you can also order or reserve your tickets online. "


        },
        {
            title: "3. Conquer an obstacle course in the heart of the jungle with Flight of the Gibbon",
            imageUrl: "https://static.tripzilla.com/thumb/e/3/161251_800x.jpg",
            description_2: "If you consider yourself an adrenaline seeker, then you’re in for a thrill! Don’t leave Siem Reap without trying the one-of-a-kind zipline experience that is the Flight of the Gibbon (alternatively known as Angkor Zipline). It’s housed inside Angkor Archaeological Park, and features 15 ziplines, four sky bridges, and 21 platforms.Soar through the centuries-old canopy while listening to the sound of exotic birds in the background. Watch out for the elusive gibbons — monkey-like apes known for swiftly swinging through trees with their long arms. They’re also said to be the fastest among all apes. "


        },
        {
            title: "4. Pick up a new hobby at Angkor Pottery Centre",
            imageUrl: "https://static.tripzilla.com/thumb/d/6/161238_800x.jpg",
            description_2: "Another interesting thing to do in Siem Reap, outside the usual tourist activities, would be getting to know the local art. Khmer pottery has been around for over 4,000 years and is said to be even older than the Angkor temples. Imagine that!The Angkor Pottery Centre is founded and run by Siem Reap’s most famous traditional potter, Paruth Hann. It aims to reintroduce ancestral pottery techniques and help develop contemporary local ceramic art. Apart from the usual tour around the studio, it also offers ceramics and pottery workshops led by expert local artisans. In under two hours, you can learn how to express yourself in clay and Khmer carvings using various tools, as well as gain a deeper understanding of the history of the craft. After honing your pottery skills, you can bring home a piece of this ancient art form — whether it’s the one you made or one made by the artisans themselves. Don’t you think that would make a lovely souvenir?",

        },
        {
            title: "5. Hit the countryside roads on a heart-pumping Jeep/ATV tour",
            imageUrl: "https://imgs.search.brave.com/7T_6jbf4L61_wz4xEchE_2Gqppmi1GdKmHs5GHy4nQk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aWdv/dG91cnMuY29tL2lt/Zy1jYWNoZS9zbGlk/ZXJsYXN0LzYtMTU1/MjAzNTU2Ni01Yzgy/MmVlZTJhMjkxLmpw/ZWc",
            description_2: "Enjoy an off-road adventure aboard a jeep or ATV (quad bike) as you visit the outskirts of Siem Reap. Speed through dirt roads, hills, and all sorts of terrain that you can only find in the countryside. And while you’re at it, take the time to stop by and commune with the locals for a full cultural immersion. Take a full-day tour to explore nearby temples, jungles, and ruins. There’s Phnom Kulen, a mountain range known for being the birthplace of the ancient Khmer empire. Its main attractions are the waterfalls at the top and the Preah Ang Thom pagoda that houses an eight-metre Buddha statue. You can even have a picnic at one of the hammocks by the riverbank! "
        },
        {
            title: "6. Enjoy a day of horseback riding at Happy Ranch",
            imageUrl: "https://static.tripzilla.com/thumb/d/f/161247_800x.jpg",
            description_2: "Enjoy an off-road adventure aboard a jeep or ATV (quad bike) as you visit the outskirts of Siem Reap. Speed through dirt roads, hills, and all sorts of terrain that you can only find in the countryside. And while you’re at it, take the time to stop by and commune with the locals for a full cultural immersionTake a full-day tour to explore nearby temples, jungles, and ruins. There’s Phnom Kulen, a mountain range known for being the birthplace of the ancient Khmer empire. Its main attractions are the waterfalls at the top and the Preah Ang Thom pagoda that houses an eight-metre Buddha statue. You can even have a picnic at one of the hammocks by the riverbank! "

        },
        {
            title: "7. Live like a local — explore the floating villages of Tonle Sap Lake",
            imageUrl: "https://imgs.search.brave.com/uNK-UscMcGqKkiw_28l4THdYp8u3fAMHyFRUHjX--lQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/ZG9tZGVzdGluYXRp/b25zLmNvLnVrL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9NYWluLVRv/bmxlLVNhcC03MDB4/NDY1LmpwZw",
            description_2: "Another highly recommended thing to do in Siem Reap is to visit a nearby floating village (or two). Take a quick break from the touristy bustle of Siem Reap, and catch a glimpse of the everyday lives of Cambodian fishermen living around Tonle Sap Lake.Some of the closest villages are Kompong Khleang, Kompong Phlouk, and Mechrey. Each village is distinct from another, with their own unique charm and unusual attractions. Kompong Khleang is the largest fishing village in Cambodia, where the stilt houses are painted in colourful shades.< Meanwhile, Kompong Phluk is often visited for its makeshift crocodile farm. Housed inside floating wooden cages, freshwater crocodiles captured from around the area are a local source of livelihood; these scaly critters allow locals to craft handsome leather goods. Don’t forget to try out some croc meat at one of the floating restaurants, too!While lesser-known compared to the rest, Mechrey is worth the visit. A mere 25km from Siem Reap, it’s situated close to a wildlife sanctuary that is home to hundreds of bird species. It also features a floating garden and floating cemetery. Trust us — you have to see it to believe it!"

        },
        {
            title: "8. Treat your tastebuds to exotic grub at Bugs Cafe",
            imageUrl: "https://static.tripzilla.com/thumb/e/0/161248_800x.jpg",
            description_2: "Remember that scene in The Lion King, where Simba tries out the insect grub offered to him? Well, you can have a similar fascinating experience by trying out the exotic insect cuisine. (Don’t worry, they’re cooked!)Bugs Cafe is a crowd favourite among locals and tourists for serving up delicious Khmer dishes — bug-infused meals, especially. Situated at the heart of downtown Siem Reap, this culinary attraction is a must-visit for adventurous foodies. This first-ever insect tapas restaurant in Cambodia is owned by French expats Davy and Marjolaine Blouzard and operated with the help of Khmer chef Seiha Soeun. Its cosy Western décor helps many travellers feel more at home while they venture into the unknown realm of peculiar dishes. Among the top-recommended dishes are the Bug Burger, Spicy Scorpion & Papaya Salad, and the Discovery Platter. The latter consists of finger food that will give you a little taste of several insects at once: red ants, tarantulas, crickets, and silkworms. For dessert, try out their version of a chocolate fondue — but instead of just fruits, you also dip in crickets and worms! "

        },
        {
            title: "9. Party the night away at Pub Street",
            imageUrl: "https://static.tripzilla.com/thumb/e/6/161254_800x.jpg",
            description_2: "Not to be outdone by daytime attractions, you can find the best of the Siem Reap nightlife scene at Pub Street. Here you’ll find bars, entertainment outlets, and restaurants decked out in neon lights and lively party music. And the best part? The whole street is pedestrian-only starting at 5pm, so walking around the block is definitely easier. "

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
                    <h1> 9 Reasons to Visit Siem Reap Besides Angkor Wat</h1>
                    <p>
                    Ancient temples have always been utterly fascinating. Their history, architecture, and even artefacts shroud them with an air of mystery that is both alluring and foreboding. Then there are also pop culture icons like Indiana Jones and Lara Croft, as well as the celebrated 2010s game Temple Run — all of which make temple exploration seem like a dream! And with the abundance of such temples in <a className="text-decoration-none text-primary" >Siem Reap</a> , Cambodia, it’s no wonder that many globetrotters-slash-adventurers flock here all year round. 
                    </p>
                   
                    <ul>
                        <li>1. Take to the clouds for views rivalling the world’s best hot air balloon destinations</li>
                        <li>2. Witness mind-boggling spectacles at Phare: The Cambodian Circus</li>
                        <li>3. Conquer an obstacle course in the heart of the jungle with Flight of the Gibbon</li>
                        <li>4. Pick up a new hobby at Angkor Pottery Centre</li>
                        <li>5. Hit the countryside roads on a heart-pumping Jeep/ATV tour</li>
                        <li>6. Enjoy a day of horseback riding at Happy Ranch</li>
                        <li>7. Live like a local — explore the floating villages of Tonle Sap Lake </li>
                        <li>8. Treat your tastebuds to exotic grub at Bugs Cafe</li>
                        <li>9. Party the night away at Pub Street</li>

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
                                src="https://imgs.search.brave.com/9UxQCkYLsLxt862xmDJVi10q8ljwNLDR2tFSdKmRtfs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2V0eW91cmd1aWRl/LmNvbS9pbWcvdG91/ci82Mzc0OThlZDI1/YThlLmpwZWcvMTMy/LmpwZw"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className=" fs-4">AngKor Wat</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/0d/2e/5a.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className=" fs-4">Siem Reap Countryside Quad Biking Tour</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-3"
                                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/a9/2b/97.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className="fs-4">
                                Tonle Sap with Sunset
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
                            <SiemreapData key={index} CardData={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="two-feature mb-5 mt-1 container d-flex flex-column flex-md-row gap-3">
                <div className="pop-card  w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
                    <h1 className="mb-5">Best Siem Reap: Tours and tickets</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/10/01/ea/68.jpg" />
                                <Card.Body>
                                    <Card.Title>2-Day Angkor Wat With Small, Big Circuit and Banteay Srei Tour</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/11/8a/3c/9a.jpg" />
                                <Card.Body>
                                    <Card.Title>2-Day Temples with Sunrise Small Group Tour of Siem Reap</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Last updated 10 mins ago</small>
                                    <Button className="mt-1 ml-auto" variant="secondary">Book Now</Button>{' '}
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/10/27/05/c7.jpg" />
                                <Card.Body>
                                    <Card.Title>Kulen Elephant Forest by private tour of Siem Reap</Card.Title>
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

export default SiemreapLandingPage;


