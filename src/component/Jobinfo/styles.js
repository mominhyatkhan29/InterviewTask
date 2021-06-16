import { findByLabelText } from "@testing-library/dom";

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
        err: {
          backgroundColor: 'red',
          borderColor: 'red'
        }
  });