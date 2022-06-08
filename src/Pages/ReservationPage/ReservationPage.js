import "./ReservationPage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import {useSelector} from "react-redux";


const ReservationPage = (props) =>{
    const isSuper = useSelector((state)=> state.auth.auth.isSuper);
    return (
        <div className={"Rezervation-Page"}>
            <NavigationBar tabValue={isSuper?2:1}/>
    </div>);
}

export default ReservationPage;