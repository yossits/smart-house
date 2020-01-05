import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/Home.css'
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > svg': {
            margin: theme.spacing(2),
        },
    },
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}



const Home = ({ history }) => {
    const classes = useStyles();
    return ( <div>
        <Button onClick={() => history.push('/')} className={classes.root} variant="contained">
            <HomeIcon fontSize="large" />
        </Button>
    </div>

    )
}
export default withRouter(Home)