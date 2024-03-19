const ExperienceCard = ({ title, date, description, tags, link }) => {
    const Tags = () => {
        return (
            <div className="flex flex-row flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div key={index}>
                        <span className="text-xs font-semibold text-teal-300 bg-teal-800 rounded-md px-2 py-1">
                            {tag}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <li className="group mb-12 rounded-md transition motion-reduce:transition-none cursor-pointer relative">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="lg:p-4 flex flex-col lg:flex-row gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg rounded">
                    <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 min-w-fit">
                        {date}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-medium leading-snug text-slate-200 lg:group-hover:text-teal-300">
                            <span>{title}</span>
                        </div>
                        <span className="text-sm leading-normal">
                            {description}
                        </span>
                        <Tags />
                    </div>
                </div>
            </a>
        </li>
    );
};

export default ExperienceCard;
