import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/action";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        
        <Modal.Dialog>
          <Modal.Header closeButton>
            
            <Modal.Title style={{color:"#42b5b5",textAlign:"center"}}>{category}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img style={{height:"200px"}} src={image} alt="...img" />
            <Modal.Title style={{}}>{title}</Modal.Title>
            <p>{description}</p>
          </Modal.Body>
          <Modal.Title style={{color:"#e16a6a"}}>${price}</Modal.Title>


          <Modal.Footer>
          <Link to="/" style={{color:"white",textDecoration:"none"}}><Button variant="secondary" >Close</Button></Link>
            <Button variant="danger">Add to kart</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
};

export default ProductDetails;

