import { Link } from "react-router-dom";
const NavItem = ({to, label}) => {
    return(
        <Link
        to ={to}
        className="text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-8 decoration-emerald-500"> 
        {label}
        </Link>
    );
}

export default NavItem;