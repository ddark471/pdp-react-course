import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class ProductCard extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <img className="d-block" src={"https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg"} alt=""/>
        <a href="#" className='category__name'>Smart Phones</a>
        <p className="price">2 290 000 sum</p>
        <p className="price__month">222 000 sum/ month</p>
        <p className="title">Xiaomi Redmi 10 4/128GB Black</p>
        <a href="#" className="btn">Buy</a>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <nav className='shadow '>
        <div className="container-fluid py-4">
          <img src={"https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg"} alt=""/>
        </div>
      </nav>

      <div id="cards" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
