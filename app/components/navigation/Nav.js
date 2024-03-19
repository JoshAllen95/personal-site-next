"use client";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
const Nav = () => {
    const [currentAnchor, setCurrentAnchor] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentAnchor(window.location.hash);
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <NavLink
                    href="#about"
                    text="About"
                    isDefault={true}
                    currentAnchor={currentAnchor}
                />
                <NavLink
                    href="#experience"
                    text="Experience"
                    currentAnchor={currentAnchor}
                />
                <NavLink
                    href="#projects"
                    text="Projects"
                    currentAnchor={currentAnchor}
                />
            </ul>
        </nav>
    );
};

export default Nav;
