import { useSelector , useDispatch } from "react-redux"
import { handleAdd } from '../Redux/action'
import { useEffect } from "react"
import { Heading , Center} from "@chakra-ui/react"
import {Card , Avatar , Text} from '@chakra-ui/react'
export const Profile = ()=>{
    const user  = useSelector(store => store.payload)

    const dispatch = useDispatch()
    function haddleLoggedIn(data){
        dispatch(handleAdd(data))
    }

    useEffect(()=>{
        fetch('https://mock10-backend-h281.onrender.com/profile' , {
            method:'POST' ,
            body : JSON.stringify({'_id':user._id}) ,
            headers :{
                'Content-Type':'Application/json'
            }
        }).then((res)=>{
            return res.json()


        }).then((res)=>{
            haddleLoggedIn(res)
        })
        .catch((err)=>{
            alert(err.message)
        })


    } , [])

    return <Center>
        <Card p='6'>
            <Center><Avatar src='https://i.pravatar.cc/300' size='2xl'/></Center>
            <Heading m='5'>{user.email}</Heading>
            <Text m='2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quae optio <br/>facilis quis aut nisi numquam consequatur beatae veritatis id</Text>
            <span>Created TimeStamp -: {user.createdAt.slice(0,10)}</span>
        </Card>
    </Center>
}