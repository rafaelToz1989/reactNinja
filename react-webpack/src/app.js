'use strict'

import React, {Component} from 'react'
import Title from './title'
import Button from './button'
import LikeButton from './like-button'
 import SearchButton from './search-button'

class App extends Component{
    render (){
        return(
            <div className='container' 
            // onClick={(e) => {
            //     alert('clicou!')
            // }}
            >
              <LikeButton />
              <SearchButton />
             {/* <Title name='Rafael' lastname={{first: 'Cardoso', second: 'Tozi'}}/> */}
             {/* {['blue', 'red', 'green'].map((square, index) => (
                   <Square key={index} color={square}></Square>
             ))}            */}
            {/* <Square/> */}
            </div>
        )
    }
}


export default App;