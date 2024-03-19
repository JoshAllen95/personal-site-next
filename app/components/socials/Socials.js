import Image from "next/image";

const Socials = () => {
    const linkedInUrl = "https://www.linkedin.com/in/joshua-allen-b467b2151";
    const githubUrl = "https://github.com/JoshAllen95";

    return (
        <div className="flex flex-row gap-4">
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
                <Image
                    src="/linkedin.svg"
                    height={32}
                    width={32}
                    alt="linkedin logo"
                    priority={true}
                    quality={100}
                    className="w-8 h-8 hover:opacity-50 transition-opacity"
                />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
                <Image
                    src="/github.png"
                    height={32}
                    width={32}
                    alt="github logo"
                    priority={true}
                    quality={100}
                    className="w-8 h-8 hover:opacity-50 transition-opacity"
                />
            </a>
        </div>
    );
};

export default Socials;
