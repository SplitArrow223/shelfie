import React, { Component } from 'react'


class Product extends Component {
    constructor(props){
        super(props)
        this.state = {         
          name: '',
          imageUrl: '',
          price: '',
          edit: false
        }
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    handleEditClick = () => {
        this.setState({edit: true})
     }
    
     handleUpdateClick = () => {
         this.props.updateProduct(this.state)
         this.setState({edit: false})
     } 

   render() {
       return this.state.edit ? (
          
          <form className='form'>
              <img src={this.state.imageUrl} alt="" width='250' height='200'/>
              {'Image URL:'}
              <input type="text" name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/>
              {'Product name:'}
              <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
              {'Price:'}
              <input type="number" name='price' value={this.state.value} onChange={this.handleChange}/>
              <div className='button'>
                  <button onClick={this.handleUpdateClick}>Save Changes</button>
              </div>
          </form> 
           
       ) : (
           <section>
              <img src={this.state.imageUrl} alt="" width='250' height='200'/>
              <p>{this.props.product.name}</p>
              <p>{this.props.product.price}</p>
              <div>
                <button className='DeleteBtn' onClick={() => this.props.deleteProduct(this.state)}>Delete</button>
                <button className='EditBtn' onClick={this.handleEditClick}>Edit</button>
                </div>
           </section>
       )
   }
}
export default Product