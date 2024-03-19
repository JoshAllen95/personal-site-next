const NavLink = ({ href, isDefault = false, text, currentAnchor }) => {
    const isSelectedLink =
        currentAnchor === href ||
        (isDefault &&
            (currentAnchor === "#about" ||
                currentAnchor === "/" ||
                currentAnchor === ""));

    const selectedNavDividerClass = "w-16 bg-slate-200";
    const selectedNavTextClass = "text-slate-200";

    return (
        <li>
            <a className="group flex items-center py-3 active" href={href}>
                <span
                    className={`nav-indicator mr-4 h-px  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                        isSelectedLink
                            ? selectedNavDividerClass
                            : "w-8 bg-slate-600"
                    }`}
                ></span>
                <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                        isSelectedLink ? selectedNavTextClass : "text-slate-500"
                    }`}
                >
                    {text}
                </span>
            </a>
        </li>
    );
};

export default NavLink;
