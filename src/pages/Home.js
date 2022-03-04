import { useRef } from "react";

import Layout from "layouts/MainLayout";

import Category from "containers/Category";
import Testimonial from "containers/Testimonial";

import Hero from "containers/Home/Hero";
import MostPicked from "containers/Home/MostPicked";

import useResetPage from "hooks/useResetPage";

//TODO: Temporary
const statistic = {
  travelers: 80490,
  cities: 662,
  treasures: 1492,
};
const mostPicked = [
  {
    _id: 0,
    price: "100",
    unit: "nights",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    name: "Nama Tempat",
    city: "Kota",
    country: "Negara",
  },
  {
    _id: 1,
    price: "100",
    unit: "nights",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    name: "Nama Tempat",
    city: "Kota",
    country: "Negara",
  },
  {
    _id: 2,
    price: "100",
    unit: "nights",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    name: "Nama Tempat",
    city: "Kota",
    country: "Negara",
  },
  {
    _id: 3,
    price: "100",
    unit: "nights",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    name: "Nama Tempat",
    city: "Kota",
    country: "Negara",
  },
  {
    _id: 4,
    price: "100",
    unit: "nights",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    name: "Nama Tempat",
    city: "Kota",
    country: "Negara",
  },
];
const categories = [
  {
    id: 0,
    name: "Category 1",
    data: [
      {
        _id: 0,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: true,
      },
      {
        _id: 1,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 2,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 3,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
    ],
  },
  {
    id: 1,
    name: "Category 2",
    data: [
      {
        _id: 0,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 1,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: true,
      },
      {
        _id: 2,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 3,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
    ],
  },
  {
    id: 2,
    name: "Category 3",
    data: [
      {
        _id: 0,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 1,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 2,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: false,
      },
      {
        _id: 3,
        price: "100",
        unit: "nights",
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        name: "Nama Tempat",
        city: "Kota",
        country: "Negara",
        isPopular: true,
      },
    ],
  },
];
const testimony = {
  _id: 0,
  imageUrl:
    "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  name: "Testimony Name",
  content:
    "What a great trip with my family and  I should try again next time soon",
  familyName: "Family Name",
  familyOccupation: "Family Occupation",
  rate: 3.4,
};

const Home = (props) => {
  useResetPage("Vacation | Home");
  const refMostPicked = useRef(null);

  return (
    <Layout {...props}>
      <Hero {...statistic} refMostPicked={refMostPicked} />
      <MostPicked refs={refMostPicked} data={mostPicked} />
      {categories.map((item, index) => (
        <Category title={item.name} data={item.data} key={index} />
      ))}
      <Testimonial data={testimony} />
    </Layout>
  );
};

export default Home;
