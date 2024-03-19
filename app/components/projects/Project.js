import Image from "next/image";

const Project = ({ title, description, image, link }) => {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-200">{title}</h2>
            <p className="border-l-4 border-teal-300 pl-2">{description}</p>
            <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                width="1915"
                height="920"
                quality={100}
            />
        </div>
    );
};

export default Project;
