import { userInfo } from "os";
import { useContext, useState } from "react"
import UserContext from "../../context/user/user_context"

export default function Page1(){
    const {user, setUser} = useContext(UserContext);

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const submit = ()=> setUser({name,lastName,email}); 
    

    return <>
        <h1>This is the page 1</h1>
        <h2>Form to update user</h2>

        <form>
            <h3>Insert Data</h3>
            <input
                type="text"
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
            />
            {"  "}
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e)=>setLastName(e.target.value)}
            />
            {"  "}
            <input
                type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            <button type="button" onClick={submit}>Send</button>
        </form>

        {"============================="}

        <h2>Current User</h2>
        {user.name}<br/>
        {user.lastName}<br/>
        {user.email}
    </>
}