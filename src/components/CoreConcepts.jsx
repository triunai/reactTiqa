import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts(){

    

    return (
        <>
        <h3 className='letsfindout'>Lets find out !</h3>
        <section id="core-concepts">
          <h2 className="coreCepts"> Core Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcept 
              key={concepts.title}
              {...concepts} />
            ))}
          </ul>
        </section>
        </>
    );
    
}