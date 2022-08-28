import React from 'react';
import { Link } from 'react-router-dom';
function MainSelect() {

    return (
        <div className='container'>
        <h2 className="text-center w-100 p-3" style={{marginTop:'5%'}}>E-Shop Management</h2>
        <Link to="/users" className="btn btn-primary btn-lg w-50 p-3" style={{marginTop:'5%',marginLeft:'24%'}}>
        User Management
        </Link>
        <br />
        <br />
        <Link to="/orders" className="btn btn-primary btn-lg w-50 p-3" style={{marginTop:'5%',marginLeft:'24%'}}>
        Order Management
        </Link>
        <Link to="/products" className="btn btn-primary btn-lg w-50 p-3" style={{marginTop:'5%',marginLeft:'24%'}}>
        Product Management
        </Link>
      </div>
    );
  }
export default MainSelect;