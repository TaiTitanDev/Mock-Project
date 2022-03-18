import React from "react";
import Table from "../components/table/Table";
import callApi from "../components/api/Api";

const productsTableHead = ["", "name", "image", "price", "description"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>
      <img src={item.image} alt={item.image} class="img-thumbnail" />
    </td>
    <td>{item.price}</td>
    <td>{item.description}</td>
    <td>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={console.log(item.name)}
      >
        Edit
      </button>
    </td>
    <td>
      <button
        type="button"
        class="btn btn-danger onClick={console.log(item.name)}"
      >
        Delete
      </button>
    </td>
  </tr>
);

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isEditor: false,
      products: [],
    };
  }

  componentDidMount() {
    callApi("GET", `/products`, null).then((item) => {
      console.log(item.data);
      //setState data
      this.setState({
        isLoaded: true,
        products: item.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="page-header">Products</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                {this.state.isLoaded ? (
                  <Table
                    limit="10"
                    headData={productsTableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={this.state.products}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
