import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            productCategory: '',
            productDescription: '',
            productPrice: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeproductCategoryHandler = this.changeproductCategoryHandler.bind(this);
        this.changeproductDescriptionHandler = this.changeproductDescriptionHandler.bind(this);
        this.changeproductPriceHandler = this.changeproductPriceHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({
                    productName : user.productName,
                    productCategory: user.productCategory,
                    productDescription: user.productDescription,
                    productPrice: user.productPrice
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            productName : this.state.productName,
            productCategory: this.state.productCategory,
            productDescription: this.state.productDescription,
            productPrice: this.state.productPrice
        }
        console.log('employee => ' + JSON.stringify(user));
        if(this.state.id === '_add'){
            ProductService.createUser(user).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeproductCategoryHandler= (event) => {
        this.setState({productCategory: event.target.value});
    }

    changeproductDescriptionHandler= (event) => {
        this.setState({productDescription: event.target.value});
    }

    changeproductPriceHandler= (event) => {
        this.setState({productPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Category : </label>
                                            <input placeholder="Product Category" name="productCategory" className="form-control" 
                                                value={this.state.productCategory} onChange={this.changeproductCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Description: </label>
                                            <input placeholder="Product Description" name="productDescription" className="form-control" 
                                                value={this.state.productDescription} onChange={this.changeproductDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control" 
                                                value={this.state.productPrice} onChange={this.changeproductPriceHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
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

export default CreateProductComponent
