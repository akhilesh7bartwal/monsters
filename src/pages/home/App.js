import CardList  from '../../components/card-list/card-list.component'
import Search from '../../components/search/search.component'
import './App.css'

import React from 'react'

class App extends React.Component{
  /**Step 1 */
  constructor(){
   
     super()
     this.state = {
       users: [],
       searchValue:''
     }
   }
   /**Step 4 */
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     /** return result => result.json() => Array[] */
     .then(result =>result.json())
     /** return Array[] => this.state = {users:monsters} **/
     .then(monsters => this.setState(
           {
             users:monsters
           }
         )
     )
   }
 
   // for Onchange Function in Search
   handleOnChange = (event) => {
     this.setState({searchValue:event.target.value})
   }
   // let array = [1,2,3,4,5]
   // array.filter((value) => value = '')
   // [1,2,3,4,5]
   /**Step 2 */
   render(){
     const filteredMonsters = this.state.users.filter(
         (element, idx) => element.name === this.state.searchValue
     )
     /**Step 3 */
     return(
       <div className="App">
         <h1>Monsters Rollodex</h1>
         <Search changing = {this.handleOnChange}/>
         <CardList monsters={filteredMonsters}/>
       </div>
     )
   }
 }
 
 export default App