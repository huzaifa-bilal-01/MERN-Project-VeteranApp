import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            
        },
      //  borderRadius: '20px',
    },
    paper: {
       // padding: theme.spacing(1),
       borderRadius: '20px',
    },
    form: {
        borderRadius: '20px',
        marginTop: '0px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: 'white',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
        
    },
    buttonSubmit: {
        marginBottom: 10,
       
        marginRight: '10px',
    },
    buttonClear: {
        marginBottom: 10,
        
    },

    typo: {
        borderRadius: '20px',
        padding: '10',
        fontSize: '18px',
        fontFamily: 'Roboto',
    }
   
}));
    