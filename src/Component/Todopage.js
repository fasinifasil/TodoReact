import React, { Component } from 'react'
import './Todopage.css'
class Todopage extends Component {
  render() {
    return (
      <div className='Todopage'>
        <div className='mainbody'>
        <h2 >Todo Content</h2>
        <div className='formbox'>
          <input type='text' name="inp1"/>

        </div>
        <div className='titlediv'>
          <ul>
          <li> items <i class="fa-regular fa-trash-can"></i></li>
          <li>Checking <i class="fa-regular fa-trash-can"></i></li>
            
          </ul>
        </div>


        </div>
      </div>
    )
  }
}
export default Todopage;