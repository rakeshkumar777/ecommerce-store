import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div style={{display:"grid"}}>
      <Card style={{ width: '18rem' }} key={id}>
      <Link  to={`/product/${id}`} style={{textDecoration:"none"}}>
      <Card.Title style={{textAlign:"center",color:"#42b5b5"}}>{category}</Card.Title>
       <Card.Img variant="top" src={image} />
       <Card.Body>
         <Card.Title style={{textAlign:"center",color:"#e16a6a"}}>${price}</Card.Title>
         <Card.Title style={{textAlign:"center",color:"#8b8989"}}>{title}</Card.Title>
         
        
       </Card.Body>
       </Link>
     </Card>
     </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;






