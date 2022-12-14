import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orders: []
        }
        this.searchOrder = this.searchOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder= this.deleteOrder.bind(this);
    }

    deleteOrder(id){
        OrderService.deleteOrder(id).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.orderid!== id)});
        });
    }
    viewOrder(id){
        this.props.history.push(`/view-order/${id}`);
    }
    editOrder(id){
        this.props.history.push(`/add-order/${id}`);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data});
        });
    }

    searchOrder(){
        this.props.history.push('/orderSearch');
    }

    render() {
        return (
            <div style={{marginTop:'4%'}}>
                 <h2 className="text-center" style={{fontSize:"38px",color:"red"}}>Order List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.searchOrder}> Search </button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr className='h5'>
                                    <th> CollectorName </th>
                                    <th> ProductName </th>
                                    <th> Delivery Status</th>
                                    <th> Delivery Boy</th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderid}>
                                             <td> {order.collectorName} </td>  
                                             <td> {order.productName}</td> 
                                             <td> {order.deliveryStatus} </td>
                                             <td> {order.deliveryBoy} </td>
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.orderid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.orderid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.orderid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent;
