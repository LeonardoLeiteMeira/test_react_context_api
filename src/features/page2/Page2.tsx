import { useContext } from "react"
import UserContext from "../../context/user/user_context"

export default function Page2(){
    const {user} = useContext(UserContext)

    return <>
        <h1>This is page 2</h1>
        <h2>Current User</h2>
        <li>
            <ul>Name: {user.name}</ul>
            <ul>Last Name: {user.lastName}</ul>
            <ul>Email: {user.email}</ul>
        </li>
    </>

}