import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { SymbolsDisplay } from "./ChessTranslations.js";

import { Language, chessTranslations } from "chess-notation/language";

export type Props = {
  placeholder: string
  select(lang?: Language | 'N/A'): void
}
export function LanguageSelect({ placeholder, select }: Props) {
  return (
    <Menu>
      <MenuButton p='1rem' as={Button} rightIcon={<FaChevronDown />}>{placeholder}</MenuButton>
      <MenuList maxH='60vh' overflowY='scroll'>
        <MenuItem onClick={() => select()}>Unselect</MenuItem>
        <MenuItem onClick={() => select('N/A')}>N/A</MenuItem>
        {Object.entries(chessTranslations).map(([lang, translations]) => (
          <MenuItem key={lang} onClick={() => select(lang as any)}>
            <VStack borderBottom='1px dotted white'>
              <Text>{lang}</Text>
              <SymbolsDisplay {...translations} />
            </VStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default LanguageSelect