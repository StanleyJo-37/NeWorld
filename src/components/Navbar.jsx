import { Link } from "react-router-dom";
import { NavItem } from "../types/Navbar";
import clsx from "clsx";
import { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";

export default function Navbar({ navItems }) {
    const [pathname, setPathname] = useState<string>('');
    
    useEffect(() => {
        setPathname(window.location.href);
    }, [window.location.href]);

    return (
        <nav className="navbar">
            {
                navItems.map(navItem => (
                    <Link
                        to={navItem.url}
                        className={clsx({
                            "active-nav-item": pathname === navItem.url,
                        })}
                    >
                        {navItem.icon && <img src={navItem.icon} className="nav-item-icon" />}
                        <p>{navItem.label}</p>
                    </Link>
                ))
            }
            <Switch.Root
                onChange={() => {
                    
                }}
            >
            
            </Switch.Root>
        </nav>
    );
}