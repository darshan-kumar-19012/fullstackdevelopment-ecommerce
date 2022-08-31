import React from 'react'
import OrderService from '../services/OrderService';

class SearchOrderComponent extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            search: ' '
        }
        this.searchBox = this.searchBox.bind(this);
        this.searchOrder = this.searchOrder.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }


    searchBox = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    };

    searchOrder = () => {
        OrderService.searchOrder(this.state.search).then( res => {
            this.setState({orders: res.data.content});
        })
    };
    resetSearch = ()=>{
        this.setState({"search":'',orders:[]});
        
    };

    componentDidMount(){
        this.setState({"search":'',orders:[]});

    }
    render() {
        return (
        <div>   
            <h1 className="text-center mt-5 ">Search Order</h1>
            <div className="container mt-2">
            <div style={{float: 'center'}} align="center">
                <div className="form-group mb-2">
                            <input type="text" className="form-control" name="search" size="50"  placeholder="Search Here" value={this.state.search}  onChange={this.searchBox}/>
                            <button type="button" name="search" className="btn btn-info my-2 text-center mr-2" onClick={this.searchOrder}>Search Order</button>
                            <button type="reset" className="btn btn-secondary text-center ml-5" style={{marginLeft:'10px'}} onClick={this.resetSearch   }>Clear Order</button>
                </div>
            </div>
            </div>
            <table className="table table-bordered border-info shadow">
                <thead>
                    <tr className='h5'>
                        <th> CollectorName </th>
                        <th> ProductName </th>
                        <th> Delivery Status</th>
                        <th> Delivery Boy</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.orders.length===0?
                        <tr align="center"><td colSpan="5">No Record Found</td></tr>:
                        this.state.orders.map(
                            (orders) =>(
                                <tr key = {orders.orderid}>
                                    <td> {orders.collectorName} </td>  
                                    <td> {orders.productName}</td> 
                                    <td> {orders.deliveryStatus} </td>
                                    <td> {orders.deliveryBoy} </td>
                                    
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>)
    }

}
export default SearchOrderComponent;