import React, { useState, useEffect } from "react";
import Table from "../components/table/Table";

const productsTableHead = ["", "name", "image", "price", "description"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td><img src={item.image} alt="" width="160" height="120" /></td>
    <td>{item.price}$</td>
    <td>{item.description}</td>
  </tr>
);

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("*******************");
    fetch("https://6221aca0afd560ea69b68260.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((result) => {
          setProducts(result);
      });
  },[]);

  return (
    <div>
      <h2 className="page-header">Products</h2>
      {console.log(products)}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={productsTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={products}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
