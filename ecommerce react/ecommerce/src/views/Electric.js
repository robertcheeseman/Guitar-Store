import React, { Component } from 'react'
import product from '../components/Product'

export default class Electric extends Component {
  constructor(){
      super()
      this.state = {
          products: []
      }
  }

  componentDidMount(){
      this.getProducts()
  }

  getProducts = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/posts')
      const data = await response.json()
      console.log(data)
      this.setState({products: data.products})
  }

  showProducts = () => {
      return this.state.products.map((item) => {
          return (
              <div>
                  <product key={item.id} productData={item}/>
              </div>
          )
      })
  }

render() {
  return (
    <div>{this.showProducts()}</div>
  )
}
}