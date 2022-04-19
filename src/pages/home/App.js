import CardList  from '../../components/card-list/card-list.component'
import Search from '../../components/search/search.component'
import './App.css'

import React from 'react'


class App extends React.Component{
  //step 1:
  constructor(){ 
    super()
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(monsters => this.setState({ users: monsters}))
  }

  //step 2
  render(){
    //step 3
    return(
      <div className="App">
        <h1>Monster Rollodex</h1>
        <Search/>
        <CardList monsters={this.state.users}/>
    </div>
    )
  }
}

export default App