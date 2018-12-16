import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { OptionsType, ResultsType } from '../types'


const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center",
  },
});

interface Props extends WithStyles<typeof styles> {
  handleSubmit: (options: OptionsType) => void,
}

interface State {
  numPlayers: string,
  numStones: string,
  gravPer: string,
  minDist: string,
  showErrorPlayers: boolean,
  showErrorStones: boolean,
  showErrorGrav: boolean,
  showErrorDist: boolean,
}

class GameStart extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      numPlayers: "2",
      numStones: "5",
      gravPer: "1000",
      minDist: "60",
      showErrorPlayers: false,
      showErrorStones: false,
      showErrorGrav: false,
      showErrorDist: false,
    }
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = this.validateState({
      ...this.state,
      [name]: event.currentTarget.value
    });
    let propName = "";
    if (name === 'numPlayers') {
      propName = 'showErrorPlayers';
    } else if (name === 'numStones') {
      propName = 'showErrorStones';
    } else if (name === 'gravPer') {
      propName = 'showErrorGrav';
    } else if (name === 'minDist') {
      propName = 'showErrorDist';
    }
    this.setState({
      ...this.state,
      [name]: event.target.value,
      [propName.toString()]: isValid[propName.toString()],
    });
  }

  handleSubmit = () => {
    const { showErrorPlayers, showErrorStones, showErrorGrav, showErrorDist } = this.validateState(this.state);
    if (showErrorPlayers || showErrorStones || showErrorGrav || showErrorDist) {
      this.setState({
        showErrorPlayers, showErrorStones, showErrorGrav, showErrorDist
      });
    } else {
      const numPlayers = parseInt(this.state.numPlayers);
      const numStones = parseInt(this.state.numStones);
      const gravPer = parseInt(this.state.gravPer);
      const minDist = parseInt(this.state.minDist);
      const newOptions = {
        numPlayers, numStones, gravPer, minDist
      }
      this.props.handleSubmit(newOptions);
    }
  }

  validateState = (state: State): ResultsType => {
    const { numPlayers, numStones, gravPer, minDist } = state;
    const nNum = parseInt(numPlayers);
    const nStone = parseInt(numStones);
    const nGrav = parseInt(gravPer);
    const nDist = parseInt(minDist);
    const showErrorPlayers = isNaN(nNum) || nNum % 1 != 0 || nNum <= 1;
    const showErrorStones = isNaN(nStone) || nStone % 1 != 0 || nStone < 1;
    const showErrorGrav = isNaN(nGrav) || nGrav % 1 != 0 || nGrav <= 0;
    const showErrorDist = isNaN(nDist) || nDist < 0;
    return {
      showErrorPlayers, showErrorStones, showErrorGrav, showErrorDist
    };
  }

  render() {
    const { numPlayers, gravPer, numStones, minDist, showErrorDist, showErrorPlayers, showErrorGrav, showErrorStones } = this.state;
    const { classes } = this.props;

    return <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" component="h3">
        Game Options
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center" spacing={8}>
        <Grid item xs={12}>
          <TextField
            label="Number Of Players"
            value={numPlayers}
            onChange={this.handleChange("numPlayers")}
            margin="normal"
            variant="outlined"
            error={showErrorPlayers}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Available Gravity Per Player"
            value={gravPer}
            onChange={this.handleChange("gravPer")}
            margin="normal"
            variant="outlined"
            error={showErrorGrav}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Max Stones Per Player"
            value={numStones}
            onChange={this.handleChange("numStones")}
            margin="normal"
            variant="outlined"
            error={showErrorStones}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Minimum Distance"
            value={minDist}
            onChange={this.handleChange("minDist")}
            margin="normal"
            variant="outlined"
            error={showErrorDist}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  }
}

export default withStyles(styles)(GameStart);
