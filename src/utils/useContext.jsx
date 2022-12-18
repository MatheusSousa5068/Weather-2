import { createContext } from "react";

const UnitContext = createContext({
    unitCont: 'C',
    setUnitCont: () => {}
});

export default UnitContext