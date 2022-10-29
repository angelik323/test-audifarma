import '../css/services.css';

function Services() {
    const careers = [
        {"title": "Engineering", "text": "The application of science and mathematics to solve problems. Find practical uses for scientific discoveries.", "icon": "block-1"},
        {"title": "Research", "text": "The reconstruction of the facts that will provide an explanation to an observed events.", "icon": "block-2"},
        {"title": "Sports", "text": "Refer to any job that is involved with the athletic industry, including athletic and non-athletic positions.", "icon": "block-3"},
        {"title": "Artistic", "text": "Refers to a job that involves being creative or producing works of art, often using a specific medium.", "icon": "block-4"},
        {"title": "Languages", "text": "Provides lots of ideas on various career areas, as well as how to gain related skills and experience.", "icon": "block-5"},
        {"title": "Administrative", "text": "Schedule appointments and meetings, ensure an efficient environment, and answer enquiries.", "icon": "block-6"},

    ];

    const description = "Stella Studio University is an equal opportunity employer that is committed to inclusion and diversity. We take affirmative action to ensure equal opportunity for all applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, Veteran status, or other legally protected characteristics. Learn more about your EEO rights as an applicant.";

    return (
        <section id="what-we-do">
            <div id='services' className="container-fluid containerSection">
                <h2 className="section-title mb-2 h1">Careers</h2>
                <p className="text-center text-muted h5">
                    {description}       
                </p>
                <div className='row mt-5'>
                    {careers.map((career)=> {
                        return(
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className={`card-block ${career.icon}`}>
                                        <h3 className="card-title">{career.title}</h3>
                                        <p className="card-text">{career.text}</p>
                                    </div>
                                </div>
                            </div>
                            );
                        })}         
                </div>
            </div>	
        </section>
    );
}

export default Services;