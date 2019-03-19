'use strict'

import React, {Component} from 'react'
// import Title from './title'
// import Button from './button'
// import Square from './square'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
import Timer from './timer'

class App extends Component{

    constructor (){
        console.log('constructor')
            
        super()
        this.state = {
            // color: 'green'
            time: 0,
            showTimer: true
        }
    }

    componentWillMount(){
        console.log('componentWillMount')        
    }

    componentDidMount(){
        console.log('componentDidMount')        
    }   
    
    render (){
        console.log('render')
        return(
            <div>
             {/* onClick={() => this.setState({
                text: 'outro texto'
            })} */}
           
              {/* <LikeButton />
              <SearchButton /> */}

             {/* <Title name='Rafael' lastname={{first: 'Cardoso', second: 'Tozi'}}/> */}
             {/* {['blue', 'red', 'green'].map((square, index) => (
                   <Square key={index} color={square}></Square>
             ))}            */}
            {/* <Square color={this.state.color} />

            {['red', 'green', 'blue'].map((color) => (
                <Button key={color} 
                handleClick={() => this.setState({ color })}>
                {color}
                </Button>
            ))} */}
            
            {/* {this.state.showTimer && <Timer time={this.state.time} />}
            <button onClick={() => {
                this.setState({ showTimer: !this.state.showTimer })
            }}>Show / Hide timer</button> */}

            <Timer time={this.state.time}/>

            <button onClick={() => {
                this.setState({ time: this.state.time + 10 })
            }}>Change props</button>
            </div>
        )
    }
}


export default App;