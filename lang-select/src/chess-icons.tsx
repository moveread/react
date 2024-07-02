import React from 'react';
import { PieceType } from 'chess-notation/language';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight } from 'react-icons/fa';

export const chessIcons: Record<PieceType, JSX.Element> = {
    K: <FaChessKing />,
    Q: <FaChessQueen />,
    R: <FaChessRook />,
    B: <FaChessBishop />,
    N: <FaChessKnight />
}
