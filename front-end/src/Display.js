import React from "react";
import "./Display.css";
class Displayitems extends React.Component{
    render(){
        return(
        <div>
            <div className="display-items">
            <h1>Smart Phones</h1>
                <ul>
                    <li>
                    <a href="*">
                        <div className="list-inside">
                        <img src="/productimages/2/apple-iphone-6-1.jpeg"  width="190" height="300" alt=""/>
                        <h3>Apple Iphone 6S</h3>
                        <h4>₹40,000</h4>
                        <button>Buy</button>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="*">
                        <div className="list-inside">
                        <img  src="/productimages/3/mi-redmi-note-4-1.jpeg"  width="190" height="300" alt=""/>
                        <h3>Redmi Note 4</h3>
                        <h4>₹10,000</h4>
                        <button>Buy</button>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="*">
                        <div className="list-inside">
                        <img  src="/productimages/2/apple-iphone-6-1.jpeg"  width="190" height="300" alt=""/>
                        <h3>Apple Iphone 6S</h3>
                        <h4>₹40,000</h4>
                        <button>Buy</button>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="*">
                        <div className="list-inside">
                        <img src="/productimages/2/apple-iphone-6-1.jpeg"  width="190" height="300" alt=""/>
                        <h3>Apple Iphone 6S</h3>
                        <h4>₹40,000</h4>
                        <button>Buy</button>
                        </div>
                    </a>
                    </li>     
                </ul>
            </div>
        </div>)
    }
}
export default Displayitems;