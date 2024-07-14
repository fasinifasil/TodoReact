import React, { Component } from 'react'
class Todopage extends Component {
  state={
    input:"",
    items:[]
  }
 
  addvalues=(event)=>
  {
    this.setState({
      input:event.target.value
      // [event.target.name]:
    });
    console.log(this.state.input);

  };

  // storeItems = (event) =>
  // {
  //   event.preventDefault();
  //   const { input }= this.state;
  //   const allitems = this.state.items;
  //   allitems.push(input);
  //   this.setState ({
  //     items:allitems
  //   });

  // };

   storeItems = (event) =>
  {
    event.preventDefault();
    const { input }= this.state;
   
    this.setState ({
      items:[...this.state.items,input],
      input:""
    });

  };
  // deleteItem =key =>
  // {
  //   // console.log(key)

  //   const allItems =this.state.items;
  //   allItems.splice(key,1);
  //   this.setState({
  //     items:allItems
  //   })

  // }
   deleteItem =key =>
  {

    this.setState({
      items:this.state.items.filter((data,index)=> index !==key)
    });

  };
  render() {

    
  // destructuring 
  // const{input,emial,password}=this.state;
  const{input,items}=this.state;
  console.log(items);

    return (
      <div className='Todopage'>
        <div className='mainbody'>
        <h2 >Todo Content</h2>
        <div className='formbox'>
          <form className='input-form' onSubmit={this.storeItems}>
          <input type='text' name="inp1" onChange={this.addvalues} value={input} />

          </form>
          {/* <input type='text' name="inp1"onChange={this.addvalues} value={this.state.input}/> */}


        </div>
        <div className='titlediv'>
          <ul>
          {items.map((data,index) =>(
              <li key ={index}>{data} <i className="fa-regular fa-trash-can deleteicon" onClick={()=>this.deleteItem(index)}></i><i class="fa-solid fa-pen-to-square"></i></li>
          ))
          }
            
          </ul>
        </div>


        </div>
      </div>
    )
  }
}
export default Todopage;