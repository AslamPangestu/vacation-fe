import { createRef, Component } from "react";

import Header from "components/Header";
import Hero from "containers/Home/Hero";
import MostPicked from "containers/Home/MostPicked";

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero {...statistic} refMostPicked={this.refMostPicked} />
        <MostPicked refs={this.refMostPicked} data={mostPicked} />
      </>
    );
  }
}
