import React, { Component } from 'react'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageUrl: '',
            name: '',
            price: '',
            
        }
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    handleCancelClick = () => {
        this.setState({
            imageUrl: '',
            name: '',
            price: '',
            
        })
    }
    
    handleAddClick = () => {
        let product = this.state
        this.props.addProduct(product)
        this.setState({
            imageUrl: '',
            name: '',
            price: '',
            
        })
    }
    

   

   render() {
       return(
          <form className='form'>Form
              <img src={this.state.imageUrl} alt="" width='250' height='200'/>
              {'Image URL:'}
              <input type="text" name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/>
              {'Product name:'}
              <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
              {'Price:'}
              <input type="number" name='price' value={this.state.value} onChange={this.handleChange}/>
              <div className='button'>
                  <button onClick={this.handleCancelClick}>Cancel</button>
                  <button onClick={this.handleAddClick}>Add to Inventory</button>
              </div>
          </form> 
       )
   }
}
export default Form