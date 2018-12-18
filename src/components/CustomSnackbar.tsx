import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';


const styles = (theme: Theme) => createStyles({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  message: string,
  onClose: () => void,
}

function MySnackbarContent(props: Props) {
  const { classes, message, onClose, ...other } = props;

  return (
    <SnackbarContent
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <ErrorIcon/>
          {message}
        </span>
      }
      className={classes.error}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default withStyles(styles)(MySnackbarContent);
