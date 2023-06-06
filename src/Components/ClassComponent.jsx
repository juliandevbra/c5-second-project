import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Evangelina',
            age: 41
        }
        console.log('Class: Se ejecuta el constructor')
    }

    componentDidMount(){
        console.log('Class: Se montó el componente')
    }
    componentDidUpdate(){
        console.log('Class: se actualiza el componente')
    }
    componentWillUnmount(){
        console.log('Class: se desmontó el componente')
    }

  render() {
    console.log('Class: Se ejecuta el render')
    return (
      <div>
          <h1>Componente de clase</h1>

          <h2>{this.state.name}</h2>
            <button
                onClick={() => this.setState({name: 'Nicolas'})}
            >Cambiar el nombre</button>
      </div>
     
    )
  }
}
