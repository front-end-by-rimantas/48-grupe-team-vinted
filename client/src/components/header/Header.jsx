
import {Logo} from '../Logo/Logo';
import { Nav } from '../nav/Nav';
import style from './Header.module.css';

function Header(){
    return (
        <>
            <header className={style.header}>
                <Logo />
            </header>
            <Nav />
        </>
    );
}
 
export { Header };