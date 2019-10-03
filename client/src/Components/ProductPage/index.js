import React, {Component} from "react";
import Product from './Product';
import Menu from './Menu';

//we are going to use the api to generate content
class ProductPage extends Component {
  state = {
    type: "",
    selectedOption: "",
    error: null,
    isLoaded: false,
    products: []
  }

  //this function sets in state the selected user category
  //it also makes an API call to fetch category
  handleChange = (selectedOption) => {
    this.setState({
      type: selectedOption.value,
      selectedOption: selectedOption.value
    }, () => {
        this.fetchCategory()
    })
  }

  //callback that fetches api endpoint
  fetchCategory = () => {
    let endpoint;
    if (this.state.type === "All" ){
       endpoint = `/api/products`
    } else {
      endpoint = `/api/productfilter?category=${this.state.selectedOption}`
    }
    fetch(endpoint)
    .then(res => res.json())
    .then((data)=>{
        this.setState({
          products: data
      })
    })
  }

  //will fetch products from the api and then set it in state
  componentDidMount(){
    fetch('/api/products')
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            products: data
          });
        },
        (error) => 
        this.setState({
          isLoaded: true,
          error
        })
      )
  }
  render(){
    return(
      <React.Fragment>
      <Menu 
      selectedOption={this.state.selectedOption}
      toggleCheck={this.toggleCheck}
      checked={this.state.checked}
      category={this.category}
      handleChange={this.handleChange}/>
      <div className="grid">
         {this.state.products.map(item => 
         <Product key={item.product_id}
          name={item.product_name}
          photos={item.product_img}
          description={item.product_description}
          price={item.price}/>)
         }
      </div>
      </React.Fragment>
      
    );
  }
}

export default ProductPage;