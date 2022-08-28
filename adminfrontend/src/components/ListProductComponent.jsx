import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }

    deleteUser(id){
        ProductService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.productid !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-product/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-product/_add');
    }
    searchUser(){
        this.props.history.push('/productSearch');
    }

    render() {
        return (
            <div style={{marginTop:'4%'}}>
                 <h2 className="text-center">Product List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.searchUser}> Search </button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name  </th>
                                    <th> Product Category </th>
                                    <th> Product Description </th>
                                    <th> product Price </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.productid}>
                                             <td> {user.productName} </td>   
                                             <td> {user.productCategory} </td>
                                             <td> {user.productDescription} </td>
                                             <td> {user.productPrice} </td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.productid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.productid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.productid)} className="btn btn-info">View </button>
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

export default ListProductComponent;
