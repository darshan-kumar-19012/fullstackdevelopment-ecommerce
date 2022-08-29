import React from 'react';
import ProductService from '../services/ProductService';

class SearchUserComponent extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            users: [],
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
        ProductService.searchUser(this.state.search).then( res => {
            this.setState({users: res.data.content});
        })
    };
    resetSearch = ()=>{
        this.setState({"search":'',users:[]});
        
    };

    componentDidMount(){
        this.setState({"search":'',users:[]});

    }
    render() {
        return (
        <div>   
            <h1 className="text-center mt-5 ">Search Product</h1>
            <div className="container mt-2">
            <div style={{float: 'center'}} align="center">
                <div className="form-group mb-2">
                            <input type="text" className="form-control" name="search" size="50"  placeholder="Search Here" value={this.state.search}  onChange={this.searchBox}/>
                            <button type="button" name="search" className="btn btn-info my-2 text-center mr-2" onClick={this.searchOrder}>Search Product</button>
                            <button type="reset" className="btn btn-secondary text-center ml-5" style={{marginLeft:'10px'}} onClick={this.resetSearch   }>Clear Product</button>
                </div>
            </div>
            </div>
            <table className="table table-bordered border-info shadow">
                <thead>
                    <tr className='h5'>
                        <th> Product Name  </th>
                        <th> Product Category </th>
                        <th> Product Description </th>
                        <th> Product Price </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.length===0?
                        <tr align="center"><td colSpan="5">No Record Found</td></tr>:
                        this.state.users.map(
                            (users) =>(
                                <tr key = {users.productid}>
                                    <td> {users.productName} </td>   
                                    <td> {users.productCategory} </td>
                                    <td> {users.productDescription} </td>
                                    <td> {users.productPrice} </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>)
    }
}
export default SearchUserComponent;