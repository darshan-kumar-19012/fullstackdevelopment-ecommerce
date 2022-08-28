import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        ProductService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name : &nbsp;</label>
                            <div> { this.state.user.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Product Category : &nbsp;</label>
                            <div> { this.state.user.productCategory }</div>
                        </div>
                        <div className = "row">
                            <label> Product Description : &nbsp;</label>
                            <div> { this.state.user.productDescription }</div>
                        </div>
                        <div className = "row">
                            <label> Product Price : &nbsp;</label>
                            <div> { this.state.user.productPrice }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent;
