import React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { PlayerType } from '../types';

const styles = (theme: Theme) => createStyles({
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
    margin: theme.spacing.unit,
  }
});

interface Props extends WithStyles<typeof styles> {
  playersList: Array<PlayerType>,
  handleClick: () => void,
  lastScores: Array<number>,
}

const GameOver = (props: Props) => {
  const { playersList, handleClick, classes } = props;
  const add = (a: number, b: number) => a + b
  let total = 0;
  for (let player of playersList) {
    if (!player) continue;
    total += player.scores.reduce(add);
  }

  let winners: Array<string> = [];
  let winnerScore = -1;
  const rows = playersList.map((player, i) => {
    if (!player) return null;
    const playerTotal = player.scores.reduce(add);
    if (playerTotal >= winnerScore) {
      if (playerTotal === winnerScore) {
        winners.push(player.name);
      } else {
        winners = [player.name];
        winnerScore = playerTotal;
      }
    }
    return {
      percentage: (playerTotal / total * 100.0).toFixed(2),
      name: player.name,
      totalScore: playerTotal,
      color: player.color,
      id: i,
    };
  });

  return (<Grid container justify="center">
  <Grid item xs={12} className={classes.grid}>
      <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
        Game Over! { winners.length > 1 ? winners.join(', ') : winners[0] } { winners.length > 1 ? "Win!" : "Wins!" }
      </Typography>
      </Grid>
      <Grid item xs={12}>
    <Table padding="dense">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell numeric>Total Score</TableCell>
          <TableCell numeric>Total %</TableCell>
          <TableCell numeric>Color</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => {
          if (!row) return null;
          return (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell numeric>{row.totalScore}</TableCell>
              <TableCell numeric>{row.percentage}</TableCell>
              <TableCell style={{ background: row.color }}></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </Grid>
    <Grid item>
    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
      New Game
    </Button>
    </Grid>
  </Grid>);
}

export default withStyles(styles)(GameOver);
