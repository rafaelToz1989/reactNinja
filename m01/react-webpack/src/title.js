'use strict'

import React from 'react'

const Title = ({name, lastname}) => (
    <h1>Olá { `${name} ${lastname.first} ${lastname.second}!` }</h1> 
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem sobrenome'
}

// const Title = React.createClass({
//     getDefaultProps: function(){
//         return{
//             name: 'Desconhecido',
//             lastname: {
//                 first: 'sem ',
//                 second:'sobrenome'
//             }
//         }
//     },
//     render: function(){
//         return(
//             <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.second}!</h1>
//         ) 

//     }
// })

export default Title