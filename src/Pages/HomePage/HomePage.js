import "./HomePage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import {useSelector} from "react-redux";
import FieldGrid from "../../Components/FieldGrid/FieldGrid";
import {Container, IconButton} from "@mui/material";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {useState} from "react";
import {PlayArrow} from "@mui/icons-material";

const HomePage = (props) => {

    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const searchBarHandler  = (flag) => {
        setSearchBarOpen(flag);
    }

    return(
        <div className={"HomePage"}>
            <NavigationBar tabValue={0}/>
            <FieldGrid/>
            <SearchBar open={searchBarOpen} handler={searchBarHandler}/>
            <div className={"Search-Bar-Button-Container"}>
                <IconButton onClick={()=>{
                    setSearchBarOpen(true);
                }}>
                    <PlayArrow sx={{ height: 38, width: 38 , color:"white"}} />
                </IconButton>
            </div>
        </div>
    );
}

export default HomePage;

