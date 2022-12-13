import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

  import {useNavigate} from 'react-router-dom'
import { handleAdd } from '../Redux/action'

export const Signup = ()=>{
    const navigate = useNavigate()
    function handleInput(e){
        e.preventDefault()
        let temp = e.target
        let detail = {
            name : temp[0].value ,
            email : temp[1].value ,
            password : temp[2].value

        }
        console.log(detail)
        fetch('http://localhost:5000/register' , {
            method:'POST' ,
            body : JSON.stringify(detail) ,
            headers :{
                'Content-Type':'Application/json'
            }
        }).then((res)=>{
            alert('sign up Succesfully')
            navigate('/login')
        }).catch((err)=>{
            alert(err.message)
        })
    }

    return <div>
        <form onSubmit={(e)=> handleInput(e)}>
            <FormControl isRequired>
                <FormLabel>User name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' />
            </FormControl>
            <Button colorScheme='blue' m='5'><input type='submit' value='Sign up' /></Button>
        </form>
    </div>

}

export const Login = ()=>{

    const dispatch = useDispatch()
    function haddleLoggedIn(data){
        dispatch(handleAdd(data))
    }
    const navigate = useNavigate()
    function handleInput(e){
        e.preventDefault()
        let temp = e.target
        let detail = {
            email : temp[0].value ,
            password : temp[1].value
        }
        console.log(detail)
        fetch('http://localhost:5000/register' , {
            method:'POST' ,
            body : JSON.stringify(detail) ,
            headers :{
                'Content-Type':'Application/json'
            }
        }).then((res)=>{
            return res.json()


        }).then((res)=>{
            haddleLoggedIn(res)
            alert('Login Succesfully')
            navigate('/profile')

        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    return <div>
        <form onSubmit={(e)=> handleInput(e)}>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' />
            </FormControl>
            <Button colorScheme='blue' m='5'><input type='submit' value='LogIn' /></Button>
        </form>
    </div>
}