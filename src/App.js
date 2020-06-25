import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "조영균",
    birthday: "910830",
    gender: "남",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이순신",
    birthday: "010210",
    gender: "남",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/4",
    name: "유관순",
    birthday: "110920",
    gender: "여",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.birthday}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
