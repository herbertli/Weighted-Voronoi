import React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) => createStyles({
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
    margin: theme.spacing.unit,
  }
});

interface Props extends WithStyles<typeof styles> {
  handleClick: () => void,
  roundNum: number,
  numPlayers: number
}

class RoundOver extends React.Component<Props> {

  saveBoard = () => {
    const link = document.createElement('a');
    const canvas = document.getElementById("physCanvas") as HTMLCanvasElement;
    link.href = canvas.toDataURL();
    link.download = "board.png";
    link.click();
  }

  render() {
    const { handleClick, classes, roundNum, numPlayers } = this.props;
    return (
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
            Round {roundNum} Over!
      </Typography>
        </Grid>
        {roundNum + 1 <= numPlayers ?
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
            Next Round
        </Button>
        </Grid> : null }
        {roundNum + 1 > numPlayers ?
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
            Next
        </Button>
        </Grid> : null }
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.saveBoard}>
            Save Board
      </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RoundOver);