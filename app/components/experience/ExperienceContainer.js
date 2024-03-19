import ExperienceCard from "./ExperienceCard";

const ExperienceContainer = () => {
    return (
        <div>
            <ol className="group/list">
                <ExperienceCard
                    title={"Lead Software Engineer - GSF"}
                    date={"2016 - Present"}
                    description={
                        "Responsible for building cataloguing software for car parts and all of the APIs and apps that go along with it."
                    }
                    tags={[
                        "JavaScript",
                        "Next.js",
                        "React",
                        "Node.js",
                        "AngularJS",
                        "C#",
                        "VB.NET",
                        "MySQL",
                    ]}
                    link={"https://www.gsfcarparts.com/"}
                />
            </ol>
        </div>
    );
};

export default ExperienceContainer;
