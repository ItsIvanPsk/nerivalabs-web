import '../../styles/pages/projects/HospitalViladecans.css';
import ImagenProjecto1 from '../../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';
import ImagenProjecto2 from '../../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';
import ImagenProjecto3 from '../../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';
import ImagenProjecto4 from '../../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';
import ImagenProjecto5 from '../../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';


const HospitalViladecans = () => {
  return (
    <>
    <main className="main-container">
      <section>
        <h1>Hospital Viladecans - VR Experience</h1>
        <article>
            
        </article>
        <article className='project-article'>
          <div className='project-container'>
            <p>
              El proyecto del hospital de viladecans es un desarrollo de realidad virtual que hicimos de la mano del hospital
              para conmemorar el antiguo hospital de San Lorenzo. Viladecans en 2019 ha mejorado la infraestructura de su
              complejo hospitalario para poder proporcionar un mejor servicio, y es por ello que se ha desarrollado una
              experiencia de realidad virtual para recorrer la história del antiguo hospital.
            </p>
          </div>
        </article>
        <article className='project-gallery-article'>
          <div className='project-gallery-container'>
            <img src={ ImagenProjecto1 } alt='Imagen projecto Viladecans VR 1'/>
            <img src={ ImagenProjecto2 } alt='Imagen projecto Viladecans VR 2'/>
            <img src={ ImagenProjecto3 } alt='Imagen projecto Viladecans VR 3'/>
            <img src={ ImagenProjecto4 } alt='Imagen projecto Viladecans VR 4'/>
            <img src={ ImagenProjecto5 } alt='Imagen projecto Viladecans VR 5'/>
          </div>
        </article>
      </section>
    </main>
    </>
  );
};

export default HospitalViladecans;