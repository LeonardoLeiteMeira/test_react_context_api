import { useNavigate } from "react-router-dom";

const SimpleNavBar = ()=>{

    const navigateTo = useNavigate();
    return <div style={{width:"100vw", height:"5vh", backgroundColor:"blue"}}>
        <button onClick={()=>navigateTo("/")}>Home</button>
        <button onClick={()=>navigateTo("/page1")}>Page 1</button>
        <button onClick={()=>navigateTo("/page2")}>Page 2</button>
    </div>
}

export default SimpleNavBar