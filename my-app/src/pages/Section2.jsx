import '../css/section2.css';
import ImageFlotante from './ImageSection2';


function Section2() {
  return (
    <div class="container containerSection">
      <div class="row">
        <div class="p-rel col-6 col-md-4 my-4">
          <h1>Lorenzo Morena</h1>
          <span>Founder</span>
          <ImageFlotante />
        </div>
        <div class="col-md-8">
          <h1 className='titleSizeSection2'>We propel results-driven growth</h1>
          
          <p className='my-4'>
            The Massachusetts Institute of Technology (MIT) is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT has since played 
            a key role in the development of modern technology and science, ranking among the top academic institutions in the world.[10][11][12][13]

            Founded in response to the increasing industrialization of the United States, MIT adopted a European polytechnic university model and stressed laboratory instruction 
            in applied science and engineering. 
          </p>
          <button type="button" class="btn buttonColor2 btn-lg my-4">View Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
