import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id).then( res => {
            this.setState({order: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Collector Name: &nbsp;</label>
                            <div> { this.state.order.collectorName }</div>
                        </div>
                        <div className = "row">
                            <label> Product Name: &nbsp;</label>
                            <div> { this.state.order.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Delivery Address: &nbsp;</label>
                            <div> { this.state.order.deliveryAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Phone No: &nbsp;</label>
                            <div> { this.state.order.phoneNo }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: &nbsp;</label>
                            <div> { this.state.order.quantity }</div>
                        </div>
                        <div className = "row">
                            <label> Delivery Boy: &nbsp;</label>
                            <div> { this.state.order.deliveryBoy }</div>
                        </div>
                        <div className = "row">
                            <label> Delivery Date : &nbsp;</label>
                            <div> { this.state.order.deliveryDate }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent;
