import Project from "./Project";

const Projects = () => {
    return (
        <div className="flex flex-col gap-6">
            <Project
                title={"GSF Trade"}
                image="/gsf-trade.png"
                description={
                    "Our team revamped our garage customer service catalogue from the ground up, transitioning away from outdated technology (AngularJS .NET Framework) to a modern stack comprising .NET 6.0 and NextJS. Concurrently, we developed a comprehensive API tailored to seamlessly integrate with garage businesses. This grew significant growth to digital trading, shortly after this platform was released sales doubled and the amount of customers using our digital platform doubled."
                }
            />

            <Project
                title={"Business WhatsApp Integration"}
                image="/whatsapp.png"
                description={
                    "As part of our requirements, we aimed to transition branch staff from using personal WhatsApp accounts to utilizing a dedicated business WhatsApp account. To achieve this, I created a system that facilitated direct communication between our branches and customers. This system not only identified customers automatically but also provided access to relevant information, allowing branch staff to efficiently place orders on behalf of customers. The bespoke user interface designed for branch staff was well-received, enabling seamless transmission of parts and images to customers."
                }
            />

            <Project
                title={"Invoicing System"}
                image="/gsf-invoicing.png"
                description={
                    "I designed and developed an invoicing system using NextJS to consolidate data feeds from four different sources into a unified list of invoices. This system, crucial for invoicing our customers monthly, handles complexities such as bundle packages, and supports transactions totaling around £100k per month."
                }
            />

            <Project
                title={"Internal Feedback System"}
                image="/feedback.png"
                description={
                    "I developed a feedback system using NextJS, enabling both our internal branches and customers to submit feedback on our services, whether it be a complaint or a compliment. This system has played a pivotal role in enhancing our services and has achieved considerable success. Additionally, feedback is automatically forwarded to a Slack channel for visibility."
                }
            />
        </div>
    );
};

export default Projects;
