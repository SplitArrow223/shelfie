import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Product from '../Product/Product'
import Form from '../Form/Form'

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
          inventory: []
        }
      } 
      updateProduct = product => {
        axios.put(`/api/product/${product.id}`, product).then(res => {
            this.setState({inventory: res.data})
        }).catch(err => console.log('failed to edit:', err))
    }
    
    addProduct = product => {
        axios.post('/api/product', product).then(res => {
            this.setState({inventory: res.data})
        }).catch(err => console.log('failed to add:', err))     
    }
    
    deleteProduct = product => {
        axios.delete(`/api/product/${product.id}`, product).then(res => {
            this.setState({inventory: res.data})
        }).catch(err => console.log('failed to edit:', err))
    }
    
      componentDidMount() {
        axios.get('/api/inventory').then(res => {
          this.setState({inventory: res.data})
        })
      }
   render() {
       return(
          <div>
            <Form inventory={this.state.inventory}
            addProduct={this.addProduct} /> 

              {this.state.inventory.map(product => {
                  return <Product key={product.id} product={product}
                  updateProduct={this.updateProduct}
                  deleteProduct={this.deleteProduct} />
              })}
             
          </div> 
       )
   }
}
export default Dashboard