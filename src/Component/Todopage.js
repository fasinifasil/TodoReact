import React, { Component } from 'react';
import './Todopage.css';

class Todopage extends Component {
  state = {
    input: "",
    items: []
  };

  addvalues = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input.trim() !== "") {
      this.setState({
        items: [...this.state.items, input],
        input: ""
      });
    }
  };

  deleteItem = (index) => {
    const updatedItems = this.state.items.filter((item, i) => i !== index);
    this.setState({
      items: updatedItems
    });
  };
  editItem = (index) => {
    const { items } = this.state;
    const editedItem = prompt("Edit your todo item:", items[index]);
    if (editedItem !== null && editedItem.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[index] = editedItem;
      this.setState({
        items: updatedItems
      });
    }
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className='Todopage'>
        <div className='mainbody'>
          <h2>Todo Content</h2>
          <div className='formbox'>
            <form className='input-form' onSubmit={this.storeItems}>
              <input
                type='text'
                name="inp1"
                onChange={this.addvalues}
                value={input}
                placeholder="Add a new todo"
              />
            </form>
          </div>
          <div className='titlediv'>
            <ul>
              {items.map((item, index) => (
                
                <li key={index}>
                  {item}
                  <i
                    className="fa-regular fa-trash-can deleteicon"
                    onClick={() => this.deleteItem(index)}
                  ></i>
                  <i className="fa-solid fa-pen-to-square" onClick={() => this.editItem(index)}></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todopage;
