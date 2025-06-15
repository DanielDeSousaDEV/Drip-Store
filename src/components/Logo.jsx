import LogoPrimary from '../assets/logo-header.svg';
import LogoWhite from '../assets/logo-footer.svg';

export function Logo({ isWhite = false, className= '' }) {

    const logoSVG = isWhite ? LogoWhite : LogoPrimary;
    
    return (
        <img title='Logo do site' className={className} src={logoSVG}></img>
    )
}