import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const dataProduct = [
  {
    productImg: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    categoryName:"Smart Phones",
    price:"2 290 000",
    priceMonth:"222 000",
    title:"Xiaomi Redmi 10 4/128GB Black",
    id: 1
  },
  {
    productImg: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    categoryName:"Smart Phones" ,
    price:"2 290 000",
    priceMonth:"222 000",
    title:"Xiaomi Redmi 10 4/128GB Black",
    id: 2
  },
  {
    productImg: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    categoryName:"Smart Phones" ,
    price:"2 290 000",
    priceMonth:"222 000",
    title:"Xiaomi Redmi 10 4/128GB Black",
    id: 3
  },
  {
    productImg: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    categoryName:"Smart Phones" ,
    price:"2 290 000",
    priceMonth:"222 000",
    title:"Xiaomi Redmi 10 4/128GB Black",
    id: 4
  },
  {
    productImg: "https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg",
    categoryName:"Smart Phones" ,
    price:"2 290 000",
    priceMonth:"222 000",
    title:"Xiaomi Redmi 10 4/128GB Black",
    id: 5
  }
]


class ProductCard extends Component {

  render() {
    const {productImg, categoryName, price, priceMonth, title} = this.props.data;
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <img className="d-block" src={productImg} alt=""/>
        <a href="#" className='category__name'>{categoryName}</a>
        <p className="price">{price}</p>
        <p className="price__month">{priceMonth} sum/ month</p>
        <p className="title">{title} </p>
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
            {
              dataProduct.map((v) => {
                return(
                  <div key={v.id} className="col-sm-6 col-md-4 col-lg-3">
                    <ProductCard data = {dataProduct[0]} />                  
                  </div>
                )
              })
            }
          </div> 
        </div>
      </div>


    </div>
  );
}

export default App;
