import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const ProductComponent = (props) => {
  const navigate = useNavigate()
  const { data } = props;
  console.log(data, "data")
  // const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {data?.map((product, index) => {
        const { id, title, image, price, category } = product;
        return (
          <div key={index} onClick={()=>{navigate(`/product/${id}`)}} style={{ display: "grid" }}>
            <Card style={{ width: '15rem' }} key={id}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center", color: "#e16a6a" }}>${price}</Card.Title>
                <Card.Title style={{ textAlign: "center", color: "#8b8989" }}>{title}</Card.Title>
                <Card.Title style={{ textAlign: "center", color: "#42b5b5" }}>{category}</Card.Title>
              </Card.Body>

            </Card>
          </div>
        );
      })}
    </>
  )
};

export default ProductComponent;


// <Link  to={`/product/${id}`} style={{textDecoration:"none"}}>



