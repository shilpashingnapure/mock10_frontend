import {Signup , Login} from './Auth'
import {Profile} from './Profile'
import {EMICalulator} from './EMICalulator'
import {Routes , Route} from 'react-router-dom'

export const Allroutes = ()=>{

    return <Routes>
        <Route path='/' element={'Welcome'}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/EMIcal' element={<EMICalulator/>}/>

    </Routes>
}