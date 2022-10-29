import '../css/services.css';

function Services() {
  return (
    <section id="what-we-do">
        <div id='services' className="container-fluid containerSection">
            <h2 className="section-title mb-2 h1">Careers</h2>
            <p className="text-center text-muted h5">
                Stella Studio University is an equal opportunity employer that is committed to inclusion and diversity. 
                We take affirmative action to ensure equal opportunity for all applicants without regard to race, 
                color, religion, sex, sexual orientation, gender identity, national origin, disability, Veteran status, 
                or other legally protected characteristics. Learn more about your EEO rights as an applicant.
            </p>
            <div className="row mt-5">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-1">
                            <h3 className="card-title">Engineering</h3>
                            <p className="card-text">The application of science and mathematics to solve problems. Find practical uses for scientific discoveries.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-2">
                            <h3 className="card-title">Research</h3>
                            <p className="card-text">The reconstruction of the facts that will provide an explanation to an observed events.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-3">
                            <h3 className="card-title">Sports</h3>
                            <p className="card-text"> Refer to any job that is involved with the athletic industry, including athletic and non-athletic positions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-4">
                            <h3 className="card-title">Artistic</h3>
                            <p className="card-text"> Refers to a job that involves being creative or producing works of art, often using a specific medium.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-5">
                            <h3 className="card-title">Languages</h3>
                            <p className="card-text">Provides lots of ideas on various career areas, as well as how to gain related skills and experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-block block-6">
                            <h3 className="card-title">Administrative</h3>
                            <p className="card-text"> Schedule appointments and meetings, ensure an efficient environment, and answer enquiries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </section>
  );
}

export default Services;