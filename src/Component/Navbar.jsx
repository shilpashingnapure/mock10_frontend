import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
export const Navbar = ()=>{
    const user = useSelector(store => store)
    return <nav>

        {
            Object.keys(user).length != 0 ? <div>
                <Link to='/profile'>Profile</Link>
                <Link to='/EMICalculator'>EMI Calculator</Link>
                <Link to='/'>Log Out</Link>
            </div>:<div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
            </div>
        }
    </nav>
}