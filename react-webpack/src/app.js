'use strict'

import React, {Component} from 'react'
import Title from './title'
import Button from './button'
import Square from './square'
import LikeButton from './like-button'
 import SearchButton from './search-button'

class App extends Component{

    constructor (){
        super()
        this.state = {
            color: 'green'
        }
    }
    
    render (){
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
            <Square color={this.state.color} />

            {['red', 'green', 'blue'].map((color) => (
                <Button key={color} 
                handleClick={() => this.setState({ color })}>
                {color}
                </Button>
            ))}
            </div>
        )
    }
}


export default App;