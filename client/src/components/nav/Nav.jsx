
import { Link } from './Link';
import style from './Nav.module.css';

export function Nav(){
    return (
        <nav className={style.mainNav}>
            <Link to='/moterims' title="Moterims" />
            <Link to='/vyrams' title="Vyrams" />
            <Link to='/vaikams' title="Vaikams" />
            <Link to='/namams' title="Namams" />
            <Link to='/pramogos' title="Pramogos" />
            <Link to='/gyvūnams' title="Gyvūnams" />
            <Link to='/apie-mus' title="Apie mus" />
            <Link to='/musu-platforma' title="Mūsų platforma" />
        </nav>
    );
}



