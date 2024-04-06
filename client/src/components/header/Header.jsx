
import {Logo} from '../Logo/Logo';
import style from './Header.module.css';
 
function Header(){
    return (
        <>
        <header className={style.mainHeader + ' grey-bg'}>
             <Logo />
            
        </header>
        <header className='header2'>
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