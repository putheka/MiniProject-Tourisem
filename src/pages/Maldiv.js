import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import '../style/MaldivesLandingPage.css';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const MaldivesLandingPage = () => {

  return (
    <div className="d-flex flex-column service">
      <div
        className="container d-flex 
        gap-2
      flex-column flex-md-row justify-content-between mt-5"
      >
        <div className="text-side w-100 w-md-50 order-2 order-md-1">
          <h1> Top 10 Reasons To Travel To Maldives </h1>

          <p>With more than a thousand splendid islands and the 26 coral atolls brimming with marine life, a dive into the unfathomable sea or sprawling across the sun-lounger on the powdery sand, the reasons to visit Maldives are unending; let’s check out the ten below:</p>
          <ul>
            <li>Relax on the Beaches</li>
            <li>Swim with the Sharks</li>
            <li>Dive into the Coral Reef</li>
            <li>Enjoy into the Coral Reef</li>
            <li>Cherish Maldivian Cultures</li>
            <li>Relish the Cuisine</li>
            <li>Get Spa Therapy</li>
            <li>Watch bioluminescent Water under the Stars</li>
            <li>Visit the Architectural Heritages</li>
            <li>Explore Male and Suburbs</li>
          </ul>

          <button className="btn btn-success mt-5">
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
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Swim-with-the-sharks.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className=" fs-4">Swim With The Sharks</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-3"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/water-sports.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className=" fs-4">Enjoy Water Sports</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-3"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Watch-Bioluminescent-Water-Under-The-Stars.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="fs-4">
                  Watch Bioluminescent Water Under The Stars
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="two-feature mb-5 mt-4  container  d-flex flex-column flex-md-row  gap-3">
        <div className="pop-card bg-success w-100 w-md-50 rounded-3 mt-3  px-5 py-5">

          <h2> Grand Park Kodhipparu </h2>
          <p className="mt-3">
            <b> Maldives </b>
            <br />
            <div>
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <FontAwesomeIcon icon={faStar} className="star-icon" />
        </div>
            <Button className="mt-5" variant="success">Book Now</Button>{' '}
          </p>
        </div>

        <div className="pop-card1 bg-success w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
          <h3 className="">New Arrivals</h3>
          <h2> Pothos Neon </h2>
          <p className="mt-5">
            <b> From </b> 
            <br />
            <strong> $ 25.06 </strong>
          </p>    
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2> 1. Relax On The Beaches </h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Relax-on-the-beaches.jpeg"
                alt=""
              />
              <p className="mt-3">Undoubtedly among the best reasons to visit Maldives will be the laid-back time on the beaches without any trace of littering, but the vast bluish green Indian Ocean kissing the horizon. While mornings with soft sunlight and calmer waves are blissful, the twilight hours with thousand hues of red, orange and purple are magical. Enjoy the sea breeze and the sound of the waves in constant 25-30-degree centigrade temperature. Redefine romance under the gazillion stars.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/bandos-maldives-island/">
                  <h4 className="d-inline">Must Read: </h4>
                  <h4 className="d-inline text-primary">
                    Bandos Maldives Island: An Ultimate Guide For A Blissful Staycation In 2022!
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2> 2. Swim With The Sharks </h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Swim-with-the-sharks.jpg"
                alt="2"
              />
              <p className="mt-3">The majestic and enormous whale sharks along with the smaller sized reef sharks lurking peacefully in the coral atolls and also on the surrounding lagoons of the resorts are the popular reasons to travel to Maldives. Although these sharks are endemic throughout the area, Baa and Ari atolls and Maaya Thila are the prospective places to encounter them up close. You can also enjoy watching them coming punctually during their daily feeding time near some resorts.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/bandos-maldives-island/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Parasailing In Maldives - A Complete Guide To This Fascination Sport
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2> 3. Dive Into The Coral Reef</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Dive-into-the-coral-reef.jpg"
                alt="2"
              />
              <p className="mt-3">Take a deep water diving session or snorkeling, the underwater marine life including the manta rays, sea turtles and barracuda swimming through the vibrant coral reef are another best-reason to visit Maldives. Make sure you visit Kuda Huraa for its warm water that does not need you to wear a wetsuit. The reef fishes are friendly and hence, it will be a good idea to bring a waterproof camera case or use a waterproof camera.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/fulhadhoo-island/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Fulhandhoo Island : An Ultimate Guide For A Blissful Escape In Maldives
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2> 4. Enjoy Water Sports </h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/water-sports.jpg"
                alt="2"
              />
              <p className="mt-3">Among the top 10 reasons to visit the Maldives will be to make the best out of water sports like kayaking, canoeing, sea bobbing, jet-skiing, snorkeling, rollerblading (known as X-Jet Blades) etc. The top resorts often offer instructors to guide you through regardless of what your skill level is. The dolphin and turtle safari boats should also be put on bucket list. Surfers of all levels would love the sunshine, monsoon wind and the consistent waves of the atolls like Laamu Atoll. Hands down, experiencing water sports in Maldives is one of the top things to do in the country.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/things-to-do-in-maldives-on-honeymoon/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Fulhandhoo Island : An Ultimate Guide For A Blissful Escape In Maldives
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2> 5. Cherish Maldivian Culture </h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Cherish-Maldivian-culture.jpg"
                alt="2"
              />
              <p className="mt-3">Apart from its natural beauty and heritage sites, Maldives is famous for its vibrant culture. If you wish to find out interesting facts about the Maldives, make sure to catch sight of Bodu Beru, the popular Maldivian folk dance which is often held during the evening on the beach. Capture the moment on camera or try out your legs with the dancers the choice is yours. Riding the Maldivian boat Dhoni can be equally charming to know about the local people and get acquainted with their culture.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/cottages-in-maldives/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    7 Cottages In Maldives To Savor The Luxury Of The Paradise In 2023!
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2>6. Relish The Cuisine</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Relish-the-cuisine.jpg"
                alt="2"
              />
              <p className="mt-3">If you are still asking “why visit the Maldives-”, this one will convince you. One of the reasons to go to the Maldives is to taste the local food like the Maldivian Curry with Tuna by the placid blue lagoon enjoying the intoxicating sea breeze. Gorge on the freshly caught and prepared seafood like Garudhiya that is a fish soup accompanied by lime, chili, rice, curry leaves, onions and a coconut. The Mashumi Roshi Tuna and Chapati as well as the Hedhika Tuna, egg, potato and coconut are also worth trying along with the street food Mas Kashi dried fish with mango and coconut.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/sultan-park-in-maldives/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Your Pocket Guide To Explore Sultan Park In Maldives In 2023!
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2>7. Get Spa Therapy</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Get-Spa-Therapy.jpeg"
                alt="2"
              />
              <p className="mt-3">When you ask what is the Maldives known for, spa therapies will surely be listed. The Maldives is famous for the rejuvenation of the mind, body, and soul through exclusive spa treatments. If massages inside seaside cabanas are too mainstream for you, make sure to pay a visit to the underwater Huvafen Fushi. While being pampered and rejuvenated by the reiki of the masseuse, your eyes will be glued to the panoramic view of the marine life in the house reef of the resort. You can also check out the Kuda Huraa for its transparent floor panels of the treatment rooms showing the marine life while you get a foot massage or full-body healing treatment and sipping ginger tea.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/como-cocoa-island-maldives/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Como Cocoa Island, Maldives: A Guide To The Most Dreamy Staycation
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2>8. Watch Bioluminescent Water Under The Stars</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Watch-Bioluminescent-Water-Under-The-Stars.jpg"
                alt="2"
              />
              <p className="mt-3">When you ask What is so great about the Maldives-, make sure you check out the Vaadhoo Island in Raa Atoll where you will see stars getting envious of the playful Sea of stars of the Indian Ocean! The phytoplankton dinoflagellates emitting the luminescent toxins with the movement of the waves are actually their defense mechanism to keep away fish and other creatures. Although not so scientifically friendly, you can obviously walk through them, creating more luminescence a memory created for a lifetime.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/maldives-in-august/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Maldives In August: A Guide That’ll Help You Plan Your Trip
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2>9. Visit The Architectural Heritages</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Visit-the-Architectural-Heritages.jpg"
                alt="2"
              />
              <p className="mt-3">Dominating the skyline of Male, the Grand Friday Mosque at the Islamic Centre with its glistening golden dome, Arabic calligraphy and wood carvings on the walls and the library is the largest in Maldives. To view the ornate chandeliers, intricately wooden carpet and the carved wooden door and side panels is amongst another important reasons as to why one should visit Maldives. Visit during 2 PM to 3 PM to explore without any crowd bustling inside. The Meedhoo Friday Mosque, Ihavandhoo Friday Mosque, Male Eid Mosque, Isdhoo Old Mosque and Fenfushi Friday Mosque are the other spectacular examples of coral stone work. Not to forget the Hukuru Miskiiy famous for its carved coral-stone work, wood carvings and lacquer work. There is an array of captivating places to visit in Maldives, and among those attractions, the architectural heritage sites of the country certainly top the list.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/maafushi-island/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary">
                    Maafushi Island: A Guide To The Unexplored Land In Maldives That’ll Leave You Mesmerized
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 mt-5 container">
        <div
          className="service-provide mt-5 
        mb-4 text-center"
        >
          <h2>10. Explore Male And suburbs</h2>
        </div>

        <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
          <div className="d-flex gap-2 flex-column flex-lg-row">
            <div className="service-card w-100 w-md-25 w-lg-25 text-center mx-3 px-2">
              <img
                effect="opacity"
                className="img-fluid w-75"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/Explore-Male-and-suburbs.jpg"
                alt="2"
              />
              <p className="mt-3">While many will love the idea of a laid-back island charm, you will hear many saying, I want to go to Maldives because Male and its suburbs bear the purest essence of Maldivian lifestyle. Visit the prison and royal bath at Villingili or go to Hulhumale to swim with the fishes through the coral atolls. You can also rent a scooty to ride through the less-explored nooks and corners of Male.

                The bustling fruit and fish market in Male can give you an opportunity to shop for fresh fish and fruits. If you visit during the morning, the fishermen coming with their catch can be seen. Explore the oldest industry of Maldives fishing or spend some money in buying papaya, mango, coconut, watermelon, dried fish etc.</p>
              <div>
                <a className="text-decoration-none text-success" href="https://traveltriangle.com/blog/maldives-villas/">
                  <h5 className="d-inline">Suggested Read : </h5>
                  <h5 className="d-inline text-primary ">
                    8 Maldives Villas That Are Perfect For A Luxurious Staycation In 2023!
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>


    </div>
  );
};

export default MaldivesLandingPage;

