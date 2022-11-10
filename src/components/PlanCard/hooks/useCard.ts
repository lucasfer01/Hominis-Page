import { useState } from "react";

export function useCard() {
    const [isContracted, setIsContracted] = useState<boolean>(false);

    function toogleIsContracted() {
        setIsContracted(!isContracted);
    }

    return {isContracted, toogleIsContracted};
}