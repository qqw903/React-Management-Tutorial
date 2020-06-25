import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "조영균",
  birthday: "910830",
  gender: "남",
  job: "대학생",
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
