import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import * as Switch from "@radix-ui/react-switch";
import PropType from "prop-types";
import "../styles/navbar.css";

export default function Navbar({ navItems, _theme }) {
    const location = useLocation();
    const [theme, setTheme] = useState(_theme);

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            setTheme("dark");
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-choices">
                {
                    navItems.map((navItem, i) => (
                        <Link
                            to={navItem.path}
                            className={clsx({
                                "active-nav-item": location.pathname === navItem.path,
                                "ml-12": i > 0,
                            })}
                            key={navItem.label}
                        >
                            {navItem.icon && <img src={navItem.icon} className="nav-item-icon" />}
                            <p>{navItem.label}</p>
                        </Link>
                    ))
                }
            </div>
            <Switch.Root
                onClick={toggleTheme}
                className="SwitchRoot"
                checked={theme === "light"}
            >
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
        </nav>
    );
}

Navbar.propTypes = {
    navItems: PropType.arrayOf(PropType.object.isRequired).isRequired,
    _theme: PropType.string,
}