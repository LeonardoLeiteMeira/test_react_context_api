import { Routes, Route} from "react-router-dom";
import App from "../App";
import SimpleNavBar from "../components/simple_navbar";
import Page1 from "../features/page1/Page1";
import Page2 from "../features/page2/Page2";

export default function MyRouter(){
    return <>
        <SimpleNavBar/>
        <Routes>
        <Route path="" element={<App/>} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
    </Routes>
    </>
}