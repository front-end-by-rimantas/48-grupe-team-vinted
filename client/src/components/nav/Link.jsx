import style from './Nav.module.css';


export function Link(params){

    const {title, isActive} = params;
    const activeClass = isActive === true ? style.active : '';
    
    return ( 
        <a className={`${style.navLink} ${activeClass}`} 
        href="/">{title}</a>
    );
}