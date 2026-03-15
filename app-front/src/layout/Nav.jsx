import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="site-nav">
            <ul className="nav-links">
                <li>
                    <NavLink className="nav-link" to="/">
                        Visao geral
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/cadastros">
                        Operacao
                    </NavLink>
                </li>
            </ul>

            <div className="nav-status">
                Clientes, pets e produtos em um unico fluxo.
            </div>
        </nav>
    );
}

export default Nav;
