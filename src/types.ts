export type PlayerType = {
    name: string,
    color: string,
    weightRemaining: number,
    piecesPlaced: number,
    scores: Array<number>,
};

export type PieceType = {
    x: number,
    y: number,
    weight: number,
    playerInd: number
};

export type OptionsType = {
    numPlayers: number,
    gravPer: number,
    minDist: number,
}

export type ResultsType = {
    showErrorPlayers: boolean,
    showErrorStones: boolean,
    showErrorGrav: boolean,
    showErrorDist: boolean,
    [key: string]: boolean,
}