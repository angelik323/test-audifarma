import '../css/section2.css';
import ImageFlotante from './ImageSection2';


function Section2() {
  return (
    <div id='our' class="container containerSection">
      <div class="row">
        <div class="p-rel col-6 col-md-4 my-4">
          <h1>Stella Studio University</h1>
          <ImageFlotante />
        </div>
        <div class="col-md-8">
          <h1 className='titleSizeSection2'>We propel results-driven growth</h1>
          
          <p className='my-4'>
            The Stella Studio University is a private land-grant research university in Colombia, Audifarma. Established in 1861, SSU has since played 
            a key role in the development of modern technology and science, ranking among the top academic institutions in the world.

            Founded in response to the increasing industrialization of the Colombia, SSU adopted a European polytechnic university model and stressed laboratory instruction 
            in applied science and engineering. 
          </p>
          <button type="button" class="btn buttonColor2 btn-lg my-4">View Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
