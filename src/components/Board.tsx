import React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { checkValid, colors, colorRGB } from './../utils';
import InfoModal from './InfoModal';
import { PieceType } from '../types';

const styles = () => createStyles({
  parentDiv: {
    position: 'relative',
    width: '500px',
    height: '500px',
    margin: 'auto',
  },
  hCanvas: {
    border: "1px solid hsl(0, 0%, 0%)",
    position: "absolute",
    top: '0px',
    left: '0px',
    zIndex: 1
  },
  pCanvas: {
    border: "1px solid hsl(0, 0%, 0%)",
    position: "relative",
    zIndex: 0
  }
});

interface BoardProps extends WithStyles<typeof styles> {
  piecesList: Array<PieceType>,
  owners: Array<Array<number>>,
  newPiece: PieceType | null,
  handleCanvasClick: (x: number, y: number) => void | null,
  currentPlayer: number,
  minDist: number
}

interface BoardState {
  showInfo: boolean,
  selectedPiece: PieceType | null
}

class Board extends React.Component<BoardProps, BoardState> {

  canvas = React.createRef<HTMLCanvasElement>();
  hoverCanvas = React.createRef<HTMLCanvasElement>();

  constructor(props: BoardProps) {
    super(props);

    this.state = {
      showInfo: false,
      selectedPiece: null,
    }
  }

  componentDidMount() {
    const { piecesList, owners, newPiece } = this.props;
      const ctx = this.canvas.current!.getContext('2d');
      if (!ctx) return;
      this.clearCanvas(ctx);
      this.drawBoard(ctx, owners);
      this.drawStones(ctx, piecesList, newPiece);
  }

  componentDidUpdate() {
    const { piecesList, owners, newPiece } = this.props;
    const ctx = this.canvas.current!.getContext('2d');
    const htx = this.hoverCanvas.current!.getContext('2d');
    if (!ctx || !htx) return;
    this.clearCanvas(ctx);
    this.clearCanvas(htx);
    this.drawBoard(ctx, owners);
    this.drawStones(ctx, piecesList, newPiece);
  }

  shouldComponentUpdate(nextProps: BoardProps, nextState: BoardState) {
    if (nextState.showInfo !== this.state.showInfo) {
      return true;
    }
    if (nextProps.piecesList !== this.props.piecesList) {
      return true;
    } else {
      return false;
    }
  }

  clearCanvas(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 500, 500);
  }

  drawStones(ctx: CanvasRenderingContext2D, piecesList: Array<PieceType>, newPiece: PieceType | null) {
    const radius = 5;
    for (let b = 0; b < piecesList.length; b += 1) {
      const { x, y, playerInd } = piecesList[b]!;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = colors[playerInd];
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
    }
    if (newPiece) {
      const { x, y, playerInd } = newPiece;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = colors[playerInd];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffcc00';
      ctx.stroke();
    }
  }

  drawBoard(ctx: CanvasRenderingContext2D, owners: Array<Array<number>>) {
    const imageData = ctx.getImageData(0, 0, 500, 500);
    const { data } = imageData;
    for (let y = 0; y < 500; y += 1) {
      for (let x = 0; x < 500; x += 1) {
        const index = (y * 500 + x) * 4;
        const owner = owners[x][y];
        if (owner > -1) {
          const gridColor = colorRGB[owner];
          for (let i = 0; i < 3; i += 1) {
            data[index + i] = gridColor[i];
          }
          data[index + 3] = 125;
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  handleClick = (event: React.MouseEvent) => {
    const { piecesList } = this.props;
    if (!this.canvas) return;
    var rect = this.canvas.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    let hoveringPiece = null;
    for (let piece of piecesList) {
      if (!piece) continue;
      const nx = piece.x;
      const ny = piece.y;
      const dist = Math.pow(nx - x, 2) + Math.pow(ny - y, 2);
      if (dist <= Math.pow(7, 2)) {
        hoveringPiece = piece;
        break;
      }
    }
    if (hoveringPiece) {
      this.setState({
        showInfo: true,
        selectedPiece: hoveringPiece,
      });
    } else if (this.props.handleCanvasClick) {
      this.props.handleCanvasClick(x, y);
    }
  }

  handleHover = (event: React.MouseEvent) => {
    if (!this.props.handleCanvasClick) return false;
    const { currentPlayer, piecesList, minDist } = this.props;
    if(!this.hoverCanvas) return;
    const ctx = this.hoverCanvas.current!.getContext('2d');
    if (!ctx) return;
    this.clearCanvas(ctx);

    var rect = this.hoverCanvas.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const isValid = checkValid(x, y, piecesList, minDist);
    if (isValid) {
      const r = colorRGB[currentPlayer][0];
      const g = colorRGB[currentPlayer][1];
      const b = colorRGB[currentPlayer][2];
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b}, 1)`;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffcc00';
      ctx.fill();
      ctx.stroke();
    }
  }

  render() {
    const { classes } = this.props;
    const { showInfo, selectedPiece } = this.state;

    return (
      <div className={classes.parentDiv}>
        <canvas
          id="physCanvas"
          className={classes.pCanvas}
          height={500}
          width={500}
          ref={this.canvas}
        />
        <canvas
          className={classes.hCanvas}
          height={500}
          width={500}
          ref={this.hoverCanvas}
          onClick={(e) => this.handleClick(e)}
          onMouseMove={(e) => this.handleHover(e)}
        />
        <InfoModal piece={selectedPiece} open={showInfo} handleClose={() => this.setState({ showInfo: false, })} />
      </div>
    );
  }
}

export default withStyles(styles)(Board);
