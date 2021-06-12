export const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    buttongroup: {
      display: 'flex',
      justifyContent: 'Space-between',
    },
    daysButton: {
      padding: '3%',
      display: 'flex',
      justifyContent: 'Space-evenly',
      alignItems: 'center',
    },
    active: {
      color: "white",
      backgroundColor: 'blue'
    },
    disable: {
      
    }
  });