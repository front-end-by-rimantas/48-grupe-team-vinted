
import {Logo} from '../logo/Logo';
import style from './Header.module.css';
 
function Header(){
    return (
        <>
        <Logo />
        <header className={style.mainHeader + ' grey-bg'}>
            <img className={style.logo} src={logo} alt="Logo" />
            <nav className={style.mainNav}>
                <a className={style.link} href="/">Home</a>
                <a className={style.link} href="/">About</a>
                <a className={style.link} href="/">Contact</a>
            </nav>
        </header>
        </>
    );
}
 
export { Header };