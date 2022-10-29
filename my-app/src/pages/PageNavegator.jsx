import '../css/pageNavegator.css';

function PageNavegator() {
  const listCareers = [
    {"careers": "Engineering"},
    {"careers": "Research"},
    {"careers": "Sports"},
    {"careers": "Artistic"},
    {"careers": "Languages"},
    {"careers": "Administrative"}
  ]
  return (
    <div classNameName="background-pageNavegator">
    <footer className="text-center text-lg-start bg-light text-muted">
    
      <section className="font-footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Stella Studio University
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              Careers
              </h6>
              {listCareers.map((listCareer)=> {
                return(
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                      <p>
                        <a href="/#" className="text-reset">{listCareer.careers}</a>
                      </p>
                    </div>
                    );
                })}         
            </div>
  
    
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="/#" className="text-reset">Home</a>
              </p>
              <p>
                <a href="/#our" className="text-reset">Our</a>
              </p>
              <p>
                <a href="/#services" className="text-reset">Careers</a>
              </p>
              <p>
                <a href="/#generic_price_table" className="text-reset">Pricing</a>
              </p>
            </div>
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Pereira, Risaralda, CO</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                angelica.loaiza323@utp.edu.co
              </p>
              <p><i className="fas fa-phone me-3"></i> 3173562730</p>
              <p><i className="fab fa-whatsapp"></i> + 57 317 356 2730</p>
            </div>
          </div>
        </div>
      </section>
    
      <div className="bg-footer text-center p-4">
        © 2022 Copyright: 
        <a className="text-reset fw-bold" href="/#">Test Para Audifarma</a>
      </div>
    </footer>
    </div>
  );
}

export default PageNavegator;