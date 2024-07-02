import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { SymbolsDisplay } from "./ChessTranslations.js";
import { chessTranslations } from "chess-notation/language";
export function LanguageSelect({ placeholder, select }) {
    return (React.createElement(Menu, null,
        React.createElement(MenuButton, { p: '1rem', as: Button, rightIcon: React.createElement(FaChevronDown, null) }, placeholder),
        React.createElement(MenuList, { maxH: '60vh', overflowY: 'scroll' },
            React.createElement(MenuItem, { onClick: () => select() }, "Unselect"),
            React.createElement(MenuItem, { onClick: () => select('N/A') }, "N/A"),
            Object.entries(chessTranslations).map(([lang, translations]) => (React.createElement(MenuItem, { key: lang, onClick: () => select(lang) },
                React.createElement(VStack, { borderBottom: '1px dotted white' },
                    React.createElement(Text, null, lang),
                    React.createElement(SymbolsDisplay, Object.assign({}, translations)))))))));
}
export default LanguageSelect;
