import s from "./App.module.css";
import Calculator from "./components/Calculator/Calculator";
import {RandomUser} from "./components/RandomUser/RandomUser";

export function App() {
    return (
        <div className={ s.root }>
            {/*<Calculator defaultA={2} defaultB={3} defaultOperator={'x'}/>*/ }
            <RandomUser/>
        </div>
    )
}
