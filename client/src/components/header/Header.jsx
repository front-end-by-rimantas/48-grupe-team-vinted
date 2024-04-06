import {Logo} from '../Logo/Logo';
import { Nav } from '../nav/Nav';
import style from './Header.module.css';
import { VscTriangleDown } from "react-icons/vsc";


function Header(){
    return (
        <>
        <header className={style.header}>
             <Logo />
             
            <form>
                <input className={style.search} type="text" placeholder='prekės'/>
            </form>
            <div className={style.container}>
            <div className={style.formRow}>
                <button className={style.button} type="submit">Registruotis | Prisijungti</button>
            </div>
            <div className={style.formRow}>
                <button className={style.button1} type="submit">Įkelti prekę</button>
            </div>
            </div>
            <div className={style.formRow}>
                <button className={style.button2} type="submit">?</button>
            </div>
            <div className={style.formRow}>
                <button className={style.button3} type="submit">LT<VscTriangleDown /></button>
            
            </div>

        </header>
        <Nav />
        </>
    );
}
 
export { Header };