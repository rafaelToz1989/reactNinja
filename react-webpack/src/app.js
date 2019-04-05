'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Button from './button'
// import Square from './square'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'
import $ from "jquery"
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {

    constructor() {
        console.log('constructor')
        super()
        this.state = {
            // color: 'green'
            // time: 0,
            // showTimer: true
            // value: 'Valor Inicial',
            // selected: '2',
            checked: false,
            showContent: false
        }
    }

    // componentWillMount(){
    //     console.log('componentWillMount')        
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')

    //     $.ajax({
    //         url: '/test/PersonSubmit',
    //         type: 'post',
    //         dataType: 'json',
    //         contentType: 'application/json',
    //         success: function (data) {
    //            console.log()               
    //         },
    //         data: JSON.stringify(person)
    //     })

    // }

    render() {
        console.log('render')
        return (
            <div className='app'>
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

                {/* <Timer time={this.state.time}/>

            <button onClick={() => {
                this.setState({ time: this.state.time + 10 })
            }}>Change props</button> */}

                {/* <Button handleClick={() => console.log('Clicou')}>Clique em mim</Button> */}

                {/* <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log('event', e)
                }}

                    onChange={(e) => {
                        console.log('name', e.target.name)
                        console.log('value', e.target.value)

                    }}
                >

                    <input type='name' name='name'/>
                    <input type='email' name='email' />

                    <input type='checkbox' /> */}

                {/* <input type="text" value={this.state.value} onChange={(e) => {
                        console.log(e.nativeEvent)
                        this.setState({
                            value: e.target.value
                        })
                    }} />
                    <label>
                        <input type='checkbox'
                            value='my-checkbox'
                            checked={this.state.checked}
                            onChange={(e) => {
                                this.setState({ checked: e.target.checked })
                            }} />
                        Checkbox
                    </label>

                    <input type='radio' name='rd' value='1' defaultChecked/> Radio 1
                    <input type='radio' name='rd' value='2' /> Radio 2 */}
                {/* <select multiple value={['1', '2']} onChange={(e) =>{
                        this.setState({value: e.target.selected})
                    }}>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select> */}
                {/* <textarea name='textarea' defaultValue={'textarea \nvalue'} /> */}
                {/* <button type='submit'>Enviar</button>
                </form> */}
                {/* <label>
                    <input type="checkbox" checked={this.state.checked} onChange={() => {
                        this.setState({
                            checked: !this.state.checked
                        }, () => {
                            this.setState({
                                showContent: this.state.checked
                            })
                        })
                    }} /> Mostrar Conteúdo
                </label>

                {this.state.showContent && <div>Olha eu aqui!</div>} */}

                <Search />
                <UserInfo />
                <Actions />
                <Repos className='repos'
                    title='Repositórios: '
                    repos={[{
                        name: 'Nome do repositório',
                        link: '#'
                    }]} />

                <Repos className='starred'
                    title='Favoritos: '
                    repos={[{
                        name: 'Nome do repositório',
                        link: '#'
                    }]} />
            </div>
        )
    }
}


export default App