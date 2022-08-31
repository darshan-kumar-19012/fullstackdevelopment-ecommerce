import React from "react";
import "./Display.css";
import ProductService from './service/ProductService'
class Displayitems extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
    }
    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }
    render(){
        return(
        <div>
            <div className="display-items">
            <h1>Smart Phones</h1>
                <ul>
                        {
                            this.state.products.map(
                                product => 
                                <li key={product.productid}>
                                <a href="*">
                                <div className="list-inside">
                                <img src={`productimages/${product.productName}.png`} width="260" height="300" alt={product.productName}/>
                                <h3>{product.productName}</h3>
                                <h4>₹{product.productPrice}</h4>
                                <button>Buy</button>
                                </div>
                                </a></li>)
                        }   
                </ul>
               
            </div>
        </div>)
    }
}
export default Displayitems;