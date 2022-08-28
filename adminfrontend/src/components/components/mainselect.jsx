import React from 'react';

class MainSelect extends React.Component {
    constructor(){
      super();
      this.openUsers = this.openUsers.bind(this);
      this.openOrders = this.openOrders.bind(this);
      this.openProducts = this.openProducts.bind(this);
    }
    openUsers(){
      this.props.history.push(`/users`);
    }
    openOrders(){
      this.props.history.push('/orders');
    }
    openProducts(){ 
      this.props.history.push('/products');
    }
    render (){
      return(
        <div className='container'>
          <h1 className="text-center w-100 p-3" style={{marginTop:'5%',marginBottom:'3% '}}>Mobile Shop Management</h1  >
          <div className='text-center'>
            <button className="btn btn-primary btn-lg w-50 p-3" onClick={this.openUsers}> User Management</button>
          </div>
          <br />
          <div className='text-center'>
            <button className="btn btn-success btn-lg w-50 p-3" onClick={this.openOrders}> Order Management</button>
          </div>
          <br />
          <div className='text-center'>
            <button className="btn btn-warning btn-lg w-50 p-3" onClick={this.openProducts}> Product Management</button>
          </div>
      </div>
      )
    }
  }
export default MainSelect;