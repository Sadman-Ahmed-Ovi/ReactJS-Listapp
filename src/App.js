import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'react-uuid'
import newcomp from './newcomp';



class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      items:[],
      id:uuid(),
      item:"",
      editItem:false,
    }
  }
  handleChange=(e)=>{
    this.setState(
      {item:e.target.value}
    )
  }

  handleSubmit=(e)=>{
      e.preventDefault();
      const newItem={
        id:this.state.id,
        title:this.state.item
      };

      const updateItem=[...this.state.items,newItem];

      this.setState({
        items:updateItem,
        item:"",
        id:uuid(),
        editItem:false,
      });

      console.log(newItem)
  }

  clearList=()=>{
    this.setState({
      items:[],
    })
  }

  handleDelete=(id)=>{
    const filterItems=this.state.items.filter(item=>
      item.id!==id
    
    
    );

    this.setState({
      items:filterItems
    })
  }
  handleEdit=(id)=>{
    const filterItems = this.state.items.filter(item =>
      item.id !== id );
    
      const selectItem=this.state.items.find(item=>item.id===id)
    this.setState({
      items: filterItems,
      item:selectItem.title,
      editItem:true,
      id:id
    })
  }

  render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
              <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}/>
            </div>
          </div>
          
        </div>
      );
  }
  
  
}

export default App;
