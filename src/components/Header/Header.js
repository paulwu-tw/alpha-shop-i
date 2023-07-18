import './Header.css'

export default function Header() {
    return (
        <>
            <header className="site-header">
                <div className="header-container mx-auto">
                    {/* navbar-toggle */}
                    <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
                    <label for="navbar-toggle" className="burger-container">
                        <object data="../../public/icons/toggle.svg" className="icon-toggle cursor-point" aria-label="1"></object>
                    </label>

                    {/* navbar-menu */}
                    <nav className="navbar-menu">
                        <ul className="nav-list site-menu-list mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">男款</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">女款</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">最新消息</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">客製商品</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">聯絡我們</a>
                            </li>
                        </ul>
                        <ul className="nav-list site-action-list">
                            {/* search */}
                            <li className="nav-item">
                                <object data="./public/icons/search.svg" className="nav-icon cursor-point" type="image/svg+xml">
                                </object>
                            </li>
                            {/* cart */}
                            <li className="nav-item">
                                <object data="./public/icons/cart.svg" className="nav-icon cursor-point" type="image/svg+xml">
                                </object>
                            </li>
                            <li id="theme-toggle" className="nav-item">
                                {/* moon */}
                                <object data="./public/icons/moon.svg" className="nav-icon cursor-point">
                                </object>
                                {/* sun */}
                                {/* <object data="./public/icons/sun.svg" className="nav-icon cursor-point">
                                </object> */}
                            </li>
                        </ul>
                    </nav>

                    {/* logo */}
                    <a className="header-logo-container" href="/">
                        <img alt="" src="./public/icons/logo.svg" className="cursor-point" />
                    </a>
                </div>
            </header>
        </>
    );
}
