import {Button, Card, CardActions, CardHeader, CardMedia, IconButton} from "@mui/material";
import { Favorite } from '@mui/icons-material';
import {useSelector} from "react-redux";
const FieldCard = (props) =>{

    let user = useSelector(state => state.auth.user.array);
    user = user.filter((x)=>{
        return (x.userId === props.field.ownerID)
    })
    return(
        <Card variant={"outlined"}>
            <CardHeader
                title={props.field.name}
                subheader={user[0].username}
            ></CardHeader>
            <CardMedia
                src={"./image/soccer-field.jpg"}
                component="img"
                alt="Field Image"
                height="150"
            />
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <Favorite sx={{ color: props.field.isFavorite ? "#FF0000" : "#808080" }}/>
                </IconButton>
                <Button variant={"contained"} size="small">Details</Button>
            </CardActions>
        </Card>
    );
}

export default FieldCard;