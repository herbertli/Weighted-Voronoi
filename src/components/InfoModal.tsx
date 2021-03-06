import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { PieceType } from '../types';

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

interface Props {
  piece: PieceType | null,
  open: boolean,
  handleClose: () => void
}

const InfoModal = (props: Props) => {
  const { piece, open } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      TransitionComponent={Transition}
      onClose={props.handleClose}
    >
      <DialogTitle id="weight-dialog-title">Piece Info</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
            X Position: {piece ? piece.x : "null"}
        </Typography>
        <Typography variant="body1" paragraph>
            Y Position: {piece ? piece.y : "null"}
        </Typography>
        <Typography variant="body1" paragraph>
            Weight of Piece: {piece ? piece.weight : "null"}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default InfoModal;
