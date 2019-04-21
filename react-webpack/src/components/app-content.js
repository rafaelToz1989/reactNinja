'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred }) => (
    <div className='app'>
        <Search />
        {!!userinfo && <UserInfo />}
        {!!userinfo && <Actions />}
        {!!repos.length &&
            <Repos className='repos'
                title='Repositórios: '
                repos={[{
                    name: 'Nome do repositório',
                    link: '#'
                }]} />}

        {!!starred.length && 
        <Repos className='starred'
            title='Favoritos: '
            repos={[{
                name: 'Nome do repositório',
                link: '#'
            }]} />}
    </div>
    )

AppContent.protoTypes = {
    
}
    
export default AppContent