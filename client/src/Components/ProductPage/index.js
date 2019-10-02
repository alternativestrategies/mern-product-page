import React, {Component} from "react";
import Product from './Product';
import Menu from './Menu';

//we are going to use an api to generate content
class ProductPage extends Component {
  state = {
    type: "",
    checked: false,
    selectedOption: "",
    error: null,
    isLoaded: false,
    products: []
  }

  //this sets checked in state to its inverse
  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }
  
  //this function sets in state the selected user category
  handleChange = (selectedOption) => {
    this.setState({
      type: selectedOption.value,
      selectedOption: selectedOption.label
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
    const {products, type, checked } = this.state;
    
    let results = []

    //sorts products by price
    if(checked === true){
      products.sort((a,b) => {
        return b.price - a.price;
      })
    }
    else if (checked === false){
      products.reverse(products.price)
    }

    //filters products by category and then passes props to the child component
    products.filter(item => {
      if(type === 'All' || type === ""){
        results.push(<Product key={item.product_id}
          name={item.product_name}
          photos={item.product_img}
          description={item.product_description}
          price={item.price}/>)
      }
      else if(type === item.category){
        results.push(<Product key={item.product_id}
          name={item.product_name}
          photos={item.product_img}
          description={item.product_description}
          price={item.price}/>)
      }
      return results;
    })

    return(
      <React.Fragment>
      <Menu 
      selectedOption={this.state.selectedOption}
      toggleCheck={this.toggleCheck}
      checked={this.state.checked}
      category={this.category}
      handleChange={this.handleChange}/>
      <div className="grid">
         {results}
     </div>
      </React.Fragment>
      
    );
  }
}

export default ProductPage;