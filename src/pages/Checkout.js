import { useState } from "react";
import { useHistory } from "react-router-dom";

import Fade from "react-reveal/Fade";

import Layout from "layouts/CheckoutLayout";

import BookingInfo from "containers/Checkout/BookingInfo";
import Payment from "containers/Checkout/Payment";
import Completed from "containers/Checkout/Completed";

import Button from "components/Button";

import Stepper from "components/Stepper";
import Step from "components/Stepper/Step";
import Title from "components/Stepper/Title";
import Content from "components/Stepper/Content";
import Controller from "components/Stepper/Controller";

import useResetPage from "hooks/useResetPage";

//TODO: Temporary
const detail = {
  _id: "asd1293uasdads1",
  name: "Village Angga",
  type: "Hotel",
  imageUrls: [
    {
      _id: "asd1293uasdads1",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    },
    {
      _id: "asd1293uasdads1",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    },
    {
      _id: "asd1293uasdads1",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  country: "Indonesia",
  city: "Bogor",
  price: "52",
  unit: "night",
  isPopular: true,
  hasBackyard: true,
  description:
    "<p>Minimal techno is a minimalist subgenre of techno music. It ischaracterized by a stripped-down aesthetic that exploits the use ofrepetition and understated development. Minimal techno is thought tohave been originally developed in the early 1990s by Detroit-basedproducers Robert Hood and Daniel Bell.</p><p>Such trends saw the demise of the soul-infused techno that typified theoriginal Detroit sound. Robert Hood has noted that he and Daniel Bellboth realized something was missing from techno in the post-rave era.</p><p>Design is a plan or specification for the construction of an object orsystem or for the implementation of an activity or process, or theresult of that plan or specification in the form of a prototype, productor process. The national agency for design: enabling Singapore to usedesign for economic growth and to make lives better.</p>",
  features: [
    {
      _id: "asd1293uasdads1",
      qty: "3",
      name: "bedroom",
      imageUrl: "/img/icons/ic_bed.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "1",
      name: "living room",
      imageUrl: "/img/icons/ic_lamp.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "2",
      name: "bath room",
      imageUrl: "/img/icons/ic_bathub.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "1",
      name: "dining room",
      imageUrl: "/img/icons/ic_dinning.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "10",
      name: "mbps",
      imageUrl: "/img/icons/ic_wifi.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "2",
      name: "units ready",
      imageUrl: "/img/icons/ic_ac.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "2",
      name: "refrigerator",
      imageUrl: "/img/icons/ic_refigerator.svg",
    },
    {
      _id: "asd1293uasdads1",
      qty: "1",
      name: "television",
      imageUrl: "/img/icons/ic_television.svg",
    },
  ],
  activities: [
    {
      _id: "asd1293uasdads1",
      name: "Kebun Park",
      type: "Nature",
      imageUrl: "/images/categoryItem1.png",
    },
    {
      _id: "asd1293uasdads1",
      name: "Water land",
      type: "Pool",
      imageUrl: "/images/categoryItem2.png",
    },
    {
      _id: "asd1293uasdads1",
      name: "Kebun Park",
      type: "Nature",
      imageUrl: "/images/categoryItem3.png",
    },
    {
      _id: "asd1293uasdads1",
      name: "Water land",
      type: "Pool",
      imageUrl: "/images/categoryItem4.png",
    },
  ],
  categories: [
    {
      _id: "asd1293uasdads1",
      name: "House with beauty backyard",
      items: [
        {
          _id: "asd1293uasdads1",
          name: "PSW Antasari",
          imageUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
        {
          _id: "asd1293uasdads1",
          name: "Kuretakeso",
          imageUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
        {
          _id: "asd1293uasdads1",
          name: "Arya Duta",
          imageUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: true,
        },
        {
          _id: "asd1293uasdads1",
          name: "Grand Dhika",
          imageUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
      ],
    },
  ],
  testimonial: {
    _id: "asd1293uasdads1",
    imageUrl:
      "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    name: "Happy Family",
    rate: 4.25,
    content:
      "What a great trip with my family and I should try again and again next time soon...",
    familyName: "Angga",
    familyOccupation: "UI Designer",
  },
};
const transaction = {
  _id: "asd1293uasdads1",
  duration: 3,
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
};

const Checkout = (props) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [proofPayment, setProofPayment] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankHolder, setBankHolder] = useState("");
  useResetPage("Vacation | Checkout");

  if (!transaction) {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Pilih kamar dulu
            <div>
              <Button
                className="btn mt-5"
                type="button"
                onClick={() => history.goBack()}
                isLight
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const doneBookingInfoForm =
    firstName !== "" && lastName !== "" && email !== "" && phone !== "";
  const donePaymentForm =
    proofPayment !== "" && bankName !== "" && bankHolder !== "";

  const onSubmit = async (nextStep) => {
    const payload = new FormData();
    payload.append("firstName", firstName);
    payload.append("lastName", lastName);
    payload.append("email", email);
    payload.append("phoneNumber", phone);
    payload.append("idItem", transaction._id);
    payload.append("duration", transaction.duration);
    payload.append("bookingStartDate", transaction.date.startDate);
    payload.append("bookingEndDate", transaction.date.endDate);
    payload.append("accountHolder", bankHolder);
    payload.append("bankFrom", bankName);
    payload.append("image", proofPayment[0]);

    await onPostBooking(payload);
    nextStep();
  };
  //TODO: Temporary
  const onPostBooking = (payload) => {
    console.log("CALL", payload);
  };

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInfo
          data={{ firstName, lastName, email, phone }}
          itemDetail={detail}
          checkout={transaction}
          onChangeFirstName={({ target }) => setFirstName(target.value)}
          onChangeLastName={({ target }) => setLastName(target.value)}
          onChangeEmail={({ target }) => setEmail(target.value)}
          onChangePhone={({ target }) => setPhone(target.value)}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={{ proofPayment, bankName, bankHolder }}
          itemDetail={detail}
          checkout={transaction}
          onChangeProofOfPayment={({ target }) => setProofPayment(target.value)}
          onChangeBankName={({ target }) => setBankName(target.value)}
          onChangeBankHolder={({ target }) => setBankHolder(target.value)}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <Layout {...props}>
      <Stepper steps={steps} initialStep="bookingInformation">
        {(prevStep, nextStep, currentStep, steps) => (
          <>
            <Step
              data={steps}
              current={currentStep}
              style={{ marginBottom: 50 }}
            />

            <Title data={steps} current={currentStep} />

            <Content data={steps} current={currentStep} />

            <Controller>
              {currentStep === "bookingInformation" && (
                <>
                  {doneBookingInfoForm && (
                    <Fade>
                      <Button
                        className="btn bg-primary text-white mb-3 w-100"
                        type="button"
                        block
                        elevated
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button
                    className="btn bg-light text-primary-light w-100"
                    type="link"
                    block
                    link={`/browse-by/${transaction._id}`}
                  >
                    Cancel
                  </Button>
                </>
              )}

              {currentStep === "payment" && (
                <>
                  {donePaymentForm && (
                    <Fade>
                      <Button
                        className="btn bg-primary text-white mb-3 w-100"
                        type="button"
                        block
                        elevated
                        onClick={() => onSubmit(nextStep)}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button
                    className="btn bg-light text-primary-light w-100"
                    type="button"
                    block
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                </>
              )}

              {currentStep === "completed" && (
                <>
                  <Button
                    className="btn bg-primary text-white w-100"
                    style={{ marginTop: 40, paddingTop: 12 }}
                    type="link"
                    block
                    elevated
                    link="/"
                  >
                    Back to Home
                  </Button>
                </>
              )}
            </Controller>
          </>
        )}
      </Stepper>
    </Layout>
  );
};

export default Checkout;
