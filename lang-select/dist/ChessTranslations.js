import React from 'react';
import styled from '@emotion/styled';
import { chessIcons } from './chess-icons.js';
const Pieces = styled.ul `
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
		width: max-content;
		& :last-child {
			border-right: none;
		}
`;
const PieceTrans = styled.li `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 8px;
  border-right: 1px dotted white;
`;
const Icon = styled.span `
  margin-right: 4px;
`;
const Symbol = styled.span ``;
export function SymbolsDisplay(translations) {
    return (React.createElement(Pieces, null, Object.entries(translations).filter(([piece]) => piece !== 'P').map(([piece, symbol]) => (React.createElement(PieceTrans, { key: piece },
        React.createElement(Icon, null, chessIcons[piece]),
        React.createElement(Symbol, null, symbol))))));
}
