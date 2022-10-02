import axios from "axios";
import React, { useEffect, useState } from "react";
import starSrc from "./utility/star.png";
import {useDispatch} from 'react-redux'
import { incrementCounter } from "../action/Action";



function Product() {
  const dispatch = useDispatch()
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(
        "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      )
      .then((resp) => {
        const items = resp.data;
        let temp = [];
        for (let key in items) {
          temp.push(items[key]);
        }
        setDataArray(temp);
      });
  };


  return (
    dataArray &&
    dataArray.map((data) => (
      <div key={data.id} className="card">
        <div
          className="product-img"
          style={{
            backgroundImage: `url(${data.productImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "307px",
          }}
        ></div>
        <div className="product-details">
          <p className="productName">{data.productName}</p>
          <div className="tag">
            <img alt="star" src={starSrc} className="stars-image" />

            <div className="price">
              <s className="oldPrice">{data.oldPrice}/-</s>
              <p className="newPrice">{data.newPrice}/-</p>
            </div>
          </div>
        </div>
        <button className="cart" onClick={() => dispatch(incrementCounter())} >ADD TO CART</button>
      </div>
      // onClick={() => dispatch(IN_NUM())}
    ))
  );
}

export default Product;
