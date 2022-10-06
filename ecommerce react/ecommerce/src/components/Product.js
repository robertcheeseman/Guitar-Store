import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const item = this.props.productData
    return (
      <div>
        <div key={this.props.id} className="card m-2" style={{width: '18rem'}}>
        <img src={item.guitarimg} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.guitarname}</h5>
            <p className="card-text">{item.guitarbrand}</p>
            <small>{item.guitardesc}</small>
        </div>
        </div>
      </div>
    );
  }
}
