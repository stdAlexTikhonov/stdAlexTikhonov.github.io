import { makeStyles } from "@material-ui/core/styles";
import ava from "./avatar.jpg";

export const useStyles = makeStyles({
    img: {
        borderRadius: "50%",
        width: 300,
        height: 300,
        backgroundOrigin: 'center center',
        backgroundSize: '100%',
        backgroundImage: `url("${ava}")`
    },
});
