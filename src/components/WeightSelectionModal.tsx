import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { PlayerType } from '../types';
import { number } from 'prop-types';

interface Props {
  currentPlayer: PlayerType,
  handleClose: (weight: number) => void,
  handleCancel: () => void,
  open: boolean,
}

interface State {
  selectedWeight: string,
  showErrorWeight: boolean,
}

class WeightModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedWeight: '',
      showErrorWeight: false,
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.currentPlayer !== prevProps.currentPlayer) {
      this.setState({
        selectedWeight: '',
        showErrorWeight: false,
      });
    }
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { showErrorWeight } = this.validateState(event.currentTarget.value);
    this.setState({
      ...this.state,
      showErrorWeight: showErrorWeight,
      [name]: event.currentTarget.value,
    });
  };

  validateState = (selectedWeight: string) => {
    const { weightRemaining } = this.props.currentPlayer;
    const nWeight = parseInt(selectedWeight);
    const showErrorWeight = isNaN(nWeight) || !Number.isInteger(nWeight) || nWeight > weightRemaining || nWeight <= 0;
    return {
      showErrorWeight
    };
  }

  handleSubmit = () => {
    let { selectedWeight } = this.state;
    const { showErrorWeight } = this.validateState(selectedWeight);
    if (showErrorWeight) {
      this.setState({
        showErrorWeight
      });
    } else {
      this.props.handleClose(parseInt(selectedWeight));
    }
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        scroll="paper"
        aria-labelledby="weight-dialog-title"
      >
        <DialogTitle id="weight-dialog-title">Weight Selection</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Select a Weight
          </DialogContentText>
          <TextField
            label="Weight"
            onChange={this.handleChange('selectedWeight')}
            margin="normal"
            variant="outlined"
            error={this.state.showErrorWeight}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default WeightModal;
