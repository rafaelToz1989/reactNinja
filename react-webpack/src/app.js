'use strict'

import React, {Component} from 'react'
import Title from './title'
import Square from './square'

class App extends Component{
    render (){
        return(
            <div className='container'>
             {/* <Title name='Rafael' lastname={{first: 'Cardoso', second: 'Tozi'}}/> */}
             {['blue', 'red', 'green'].map((square, index) => (
                   <Square key={index} color={square}></Square>
             ))}           
            </div>
        )
    }
}


export default App;