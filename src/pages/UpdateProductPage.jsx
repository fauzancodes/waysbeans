import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdateProductPage(props) {
  useEffect(() => {document.title = `Update Product | WaysBeans`;}, []);

  const params = useParams();
  const Products = props.Products;
  let Product = Products.filter(Product => Product.id === parseInt(params.id));
  Product = Product[0];

  return (
    <Container>
      <Row className="custom-margin-top justify-content-between mx-5 responsive-margin-x">
        <Col xs={12} lg={6} className="mb-4 animate__animated animate__slideInLeft">
          <h1 className="fw-bold custom-text-primary mb-5">Update Product</h1>
          <Form onSubmit={props.UpdateProductOnSubmit}>
            <Form.Group className="mb-4 d-none" controlId="formId">
              <Form.Control type="text" onChange={props.UpdateProductOnChange} placeholder="Id" value={props.formUpdateProduct.id} name="id" className="font-size-18px p-3 custom-form-input" required/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Control type="text" onChange={props.UpdateProductOnChange} placeholder="Name" value={props.formUpdateProduct.name} name="name" className="font-size-18px p-3 custom-form-input" required/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formStock">
              <Form.Control type="number" onChange={props.UpdateProductOnChange} placeholder="Stock" value={props.formUpdateProduct.stock} name="stock" className="font-size-18px p-3 custom-form-input" required/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formPrice">
              <Form.Control type="number" onChange={props.UpdateProductOnChange} placeholder="Price" value={props.formUpdateProduct.price} name="price" className="font-size-18px p-3 custom-form-input" required/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formDescription">
              <Form.Control as="textarea" onChange={props.UpdateProductOnChange} placeholder="Product Description" value={props.formUpdateProduct.description} name="description" className="font-size-18px p-3 custom-form-input" rows={4} required/>
            </Form.Group>
            <div id="product-photo-container" className="font-size-18px p-3 py-2 custom-form-input rounded w-50">
              <label htmlFor="product-photo" className="d-flex justify-content-between align-items-center" style={{ color:"rgba(97, 61, 43, 0.5)",cursor:"pointer" }}>
                Product Photo
                <img src="/images/icon-paperclip.png" alt="Attach File" style={{ width:"2rem",transform:"rotate(-45deg)" }}/>
              </label>
              <input id="product-photo" type="file" onChange={props.handleImageUpload} name="photo" className="d-none"/>
            </div>
            <div className="d-flex justify-content-center mb-2 mt-5">
              <Button variant="primary" type="submit" className="custom-btn-primary w-50 fw-bold font-size-18px py-1">Update Product</Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} lg={5} className="mb-4 animate__animated animate__slideInRight">
          <img src={props.imageUrl} alt={Product.name} className="w-100 h-75" style={{ objectFit:"cover" }}/>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateProductPage; 