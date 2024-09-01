import { Footer } from "./Footer";
import "./styles/Homepage.css";
import React, { useEffect } from "react";
import initAOS from "./assets/aos";
export const Home = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <main>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="container-xxl top-img"
          id="home"
        >
          <img
            src="https://marketplace.canva.com/EAFIpPQExN0/1/0/1600w/canva-yellow-orange-and-black-fitness-and-gym-youtube-thumbnail-tywX2wVCRUM.jpg"
            alt="Fitness Banner"
            className="img-fluid w-100 "
          />
        </div>

        <div className="container gympngs ">
          <div className="row gympngs-1 container">
            <div className=" col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-item-center text-center ">
              <img
                data-aos="fade-left"
                src="https://cdn-icons-png.flaticon.com/256/10/10618.png"
                alt="Consistency Over Intensity"
                className="img-fluid mb-1  d-flex "
              />
              <p data-aos="fade-up" className="text-wrap paragraph-adjust">
                Consistency Over Intensity: Focus on regular workouts rather
                than pushing too hard in a single session. Small, consistent
                efforts yield long-term results.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column  text-center ">
              <img
                data-aos="fade-left"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfN8B-XLAu8DWyg_evevcYAaMpQuOtrUgwsmXvpQIeY8NUI6KWfdmnpkoE2qnrsshNx_8&usqp=CAU"
                alt="Mind-Muscle Connection"
                className="img-fluid mb-1"
              />
              <p data-aos="fade-up" className="text-wrap  paragraph-adjust">
                Mind-Muscle Connection: Concentrate on the muscles you're
                working during each exercise. This improves form and maximizes
                gains from every rep.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column text-center ">
              <img
                data-aos="fade-left"
                src="https://cdn-icons-png.flaticon.com/256/10/10699.png"
                alt="Rest and Recovery"
                className="img-fluid mb-1"
              />
              <p
                data-aos="fade-up"
                className="text-wrap text-md paragraph-adjust"
              >
                Rest and Recovery: Ensure you get adequate rest between
                workouts. Muscles grow and repair during recovery, making rest
                just as important as exercise.
              </p>
            </div>
          </div>
        </div>

        <div className="container gymImgs">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <img
                data-aos="fade-right"
                src="https://img.freepik.com/premium-photo/strong-muscular-men-flexing-muscles-from-back-he-is-showing-back-muscles-development_754108-1076.jpg"
                alt="Strong Muscular Men"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img
                data-aos="fade-up"
                src="https://www.shutterstock.com/image-photo/portrait-bearded-shirtless-bodybuilder-600nw-763494487.jpg"
                alt="Bearded Shirtless Bodybuilder"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img
                data-aos="fade-left"
                src="https://png.pngtree.com/background/20230605/original/pngtree-the-three-bodybuilders-with-their-beards-on-their-chest-and-their-picture-image_2874954.jpg"
                alt="Three Bodybuilders"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="goal container">
          <div className="row">
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2"
            >
              <img
                src="https://www.fittr.com/static-content/certified_4c6350ecb1.png"
                alt=""
                className="img-fluid"
              />
              <h6>Internationally Certified Coaches</h6>
              <p>
                Get expert help and guidance and achieve the results you desire
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2"
            >
              <img
                src="https://www.fittr.com/static-content/goal_f9007586c4.png"
                alt=""
                className="img-fluid"
              />
              <h6>Customised plans for your goals</h6>
              <p>
                Forget the one-size-fits-all approach! Personalised diet and
                workout plans that work for YOU!
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2"
            >
              <img
                src="https://www.fittr.com/static-content/30_day_d0ce88bbd0.png"
                alt=""
                className="img-fluid"
              />
              <h6>30-day money-back guarantee</h6>
              <p>
                Try FITTR risk-free, with our 'no questions asked' refund policy
              </p>
            </div>
          </div>
        </div>

        <div className="users container position-relative z-0 text-light mb-4">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            src="https://www.fittr.com/static-content/fittr_community_judgement_free_c2ff664eb3.webp"
            alt="Community Judgement Free"
            className="img-fluid mt-2 pt-2 mx-4 px-4"
          />
          <h1
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            style={{ width: "650px", fontSize: "50px" }}
            className="position-absolute top-0 start-0 z-1 pt-4 ms-4 ps-4 mt-4 text-dark "
          >
            <b>A judgement-free space for everyone</b>
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};
