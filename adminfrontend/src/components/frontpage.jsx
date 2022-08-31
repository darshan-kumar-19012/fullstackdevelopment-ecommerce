import React from 'react';

class FrontPage extends React.Component {
    constructor(){
      super();
      this.Admin = this.Admin.bind(this);
      this.Product = this.Product.bind(this);
    }
    Admin(){
      this.props.history.push(`/Admin`);
    }
    Product(){
      this.props.history.push('/productPage');
    }

    render (){
      return(
        <div>
          <div style={{backgroundImage: "url(/images/temp1.jpg)",height:"640px",width:"1100px"}}>
          <h1 className="text-center w-100 p-3" style={{marginTop:'5%',marginBottom:'3% '}}></h1  >
          <div className='text-center'>
            <button className="btn btn-primary btn-lg w-50 p-3" onClick={this.Admin}> Admin </button>
          </div>
          <br />
          <div className='text-center'>
            <a className="btn btn-primary btn-lg w-50 p-3" style={{color:'white'}} href='http://localhost:3001/'> Product View </a>
          </div>
      </div>
        </div>
      )
    }
  }
export default FrontPage;