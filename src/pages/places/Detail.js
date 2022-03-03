import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Layout from "containers/MainLayout";
import PageTitle from "containers/PlaceDetail/Title";
import FeatureImages from "containers/PlaceDetail/FeatureImages";
import Descriptions from "containers/PlaceDetail/Descriptions";

import InputNumber from "components/Form/InputNumber";

import { resetPagePosition } from "utils/page";
//TODO: Temporary
const data = {
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
          imageUrl: "/images/treasure-1.jpg",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
        {
          _id: "asd1293uasdads1",
          name: "Kuretakeso",
          imageUrl: "/images/treasure-2.jpg",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
        {
          _id: "asd1293uasdads1",
          name: "Arya Duta",
          imageUrl: "/images/treasure-3.jpg",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: true,
        },
        {
          _id: "asd1293uasdads1",
          name: "Grand Dhika",
          imageUrl: "/images/treasure-4.jpg",
          country: "South Korea",
          city: "Seoul Flore",
          isPopular: false,
        },
      ],
    },
  ],
  testimonial: {
    _id: "asd1293uasdads1",
    imageUrl: "/images/testimonial-detailspage.jpg",
    name: "Happy Family",
    rate: 4.25,
    content:
      "What a great trip with my family and I should try again and again next time soon...",
    familyName: "Angga",
    familyOccupation: "UI Designer",
  },
};

const PlaceDetail = (props) => {
  const [countNight, setCountNight] = useState("1");
  // eslint-disable-next-line no-unused-vars
  const [detailData, setDetailData] = useState(data);
  // eslint-disable-next-line no-unused-vars
  const [breadcrumbItems, setBreadcrumbsItems] = useState([
    { title: "Home", link: "/" },
    { title: "Product", link: "/" },
    { title: "Detail", link: "" },
  ]);

  const onChangeNight = (event) => {
    setCountNight(event.target.value);
  };

  useEffect(() => {
    resetPagePosition(detailData.name);
  });

  return (
    <Layout {...props}>
      <PageTitle data={detailData} breadcrumbs={breadcrumbItems} />
      <FeatureImages data={detailData.imageUrls} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <Descriptions data={detailData} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>Booking Form</Fade>
          </div>
        </div>
      </section>
      <InputNumber
        value={countNight}
        suffix="night"
        name="night"
        isSuffixPlural
        max={30}
        onChange={onChangeNight}
      />
    </Layout>
  );
};

export default PlaceDetail;
