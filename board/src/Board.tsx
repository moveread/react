import React, { useCallback, useMemo, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard'
import { Arrow, CustomSquareStyles, Piece, Square } from 'react-chessboard/dist/chessboard/types';

const OPTION_STYLE = (capture?: boolean) => {
  return capture 
  ? {
    background: 'radial-gradient(circle, transparent 75%, rgba(0,0,0,.1) 75%)'
  } : {
    background: 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
    borderRadius: '50%',
  }
}
const FROM_STYLE = {
  background: '#ff05'
}

export type BoardProps = Parameters<typeof Chessboard>[0]
export type Props = BoardProps & {
  fen: string
  arrows?: Array<{
    san: string
    color?: string
  }>
  onMove?(san: string, fenAfter: string): void
}

export function Board({ fen, onMove, arrows, ...props }: Props) {
  function move(from: Square, to: Square, piece: Piece): boolean {
    try {
      const game = new Chess(fen);
      const san = game.move({ from, to, promotion: piece[1].toLowerCase() }).san;
      const newFen = game.fen();
      onMove?.(san, newFen);
      return true;
    }
    catch {
      return false;
    }
  }

  const customArrows: Arrow[] = useMemo(() => {
    if (!arrows)
      return []
    const customArrows: Arrow[] = []
    const game = new Chess(fen)
    for (const { san, color } of arrows) {
      try {
        const { from, to } = game.move(san)
        customArrows.push([from, to, color])
      }
      catch {} // eslint-disable-line
    }
    return customArrows
  }, [fen, arrows])

  const [fromSquare, setFrom] = useState<Square|null>(null)
  const onClick = useCallback((square: Square) => {
    if (!fromSquare)
      return setFrom(square)

    const game = new Chess(fen)
    try {
      const san = game.move({ from: fromSquare, to: square }).san
      onMove?.(san, game.fen())
    }
    catch {
      setFrom(square)
    }
  }, [fromSquare, fen, onMove])

  const squareStyles = useMemo((): CustomSquareStyles => {
    if (!fromSquare)
      return {}
    const game = new Chess(fen)
    const moves = game.moves({ square: fromSquare, verbose: true })
    if (moves.length === 0)
      return {}
    const styles = {
      [fromSquare]: FROM_STYLE,
      ...Object.fromEntries(moves.map(move => {
        const capture = !!game.get(move.to)
        return [move.to, OPTION_STYLE(capture)]
      }))
    }
    console.log(styles)
    return styles
  }, [fen, fromSquare])

  return (
    <Chessboard position={fen} onPieceDrop={move} customArrows={customArrows}
      customSquareStyles={squareStyles} onSquareClick={onClick} {...props}
    />
  )
}

export default Board