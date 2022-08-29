import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            collectorName: '',
            productName: '',
            deliveryAddress: '',
            phoneNo: '',
            quantity: '',
            deliveryStatus: '',
            deliveryDate: '',
            deliveryBoy: ''
        }
        this.changeDeliveryStatusHandler = this.changeDeliveryStatusHandler.bind(this);
        this.UpdateOrder = this.UpdateOrder.bind(this);
    }

    componentDidMount(){
            OrderService.getOrderById(this.state.id).then( (res) =>{
                let order = res.data;
                this.setState({
                    collectorName: order.collectorName,
                    productName: order.productName,
                    deliveryAddress: order.deliveryAddress,
                    phoneNo: order.phoneNo,
                    quantity: order.quantity,
                    deliveryStatus: order.deliveryStatus,
                    deliveryDate: order.deliveryDate,
                    deliveryBoy: order.deliveryBoy
                });
            });
        }        

    UpdateOrder = (e) => {
        e.preventDefault();
        let order = {
            collectorName: this.state.collectorName,
            productName: this.state.productName,
            deliveryAddress: this.state.deliveryAddress,
            phoneNo: this.state.phoneNo,
            quantity: this.state.quantity,
            deliveryStatus: this.state.deliveryStatus,
            deliveryDate: this.state.deliveryDate,
            deliveryBoy: this.state.deliveryBoy
        }
        console.log('order => ' + JSON.stringify(order));
        OrderService.updateOrder(order, this.state.id).then( res => {
                this.props.history.push('/orders');
            });
    }
    
    changeDeliveryStatusHandler= (event) => {
        this.setState({deliveryStatus: event.target.value});
    }

    changeDeliveryBoyHandler= (event) => {
        this.setState({deliveryBoy: event.target.value});
    }

    cancel(){
        this.props.history.push('/orders');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" style={{background:"grey",height:"700px",width:"800px",paddingTop:"20px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 h3 ">
                            Update Order Details
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label className='h4'> Delivery Status: </label>
                                            <input placeholder="Delivery Status" name="deliveryStatus" className="form-control" 
                                                value={this.state.deliveryStatus} onChange={this.changeDeliveryStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label className='h4'> Delivery Boy : </label>
                                            <input placeholder="Delivery boy" name="deliveryBoy" className="form-control" 
                                                value={this.state.deliveryBoy} onChange={this.changeDeliveryBoyHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.UpdateOrder}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUserComponent;
