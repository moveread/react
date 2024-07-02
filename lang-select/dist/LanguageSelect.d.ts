import React from 'react';
import { Language } from "chess-notation/language";
export type Props = {
    placeholder: string;
    select(lang?: Language | 'N/A'): void;
};
export declare function LanguageSelect({ placeholder, select }: Props): React.JSX.Element;
export default LanguageSelect;
