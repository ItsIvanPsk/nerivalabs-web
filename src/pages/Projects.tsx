
import '../styles/pages/Proyects.css';

const Projects = () => {
  return (
    <>
    <main className="main-container">
      <h1>Proyectos</h1>
      <section>
        <article>
          <p>
            Todos los proyectos son propiedad intelectual de NerivaLabs.
          </p>
        </article>
        <article>
          <h2>Hospital Viladecans - VR Experience</h2>
          <hr/>          <p>
            El proyecto del hospital de viladecans es un desarrollo de realidad virtual que hicimos de la mano
            del hospital para conmemorar el antiguo hospital de San Lorenzo. Viladecans en 2019 ha mejorado la infraestructura
            de su complejo hospitalario para poder proporcionar un mejor servicio, y es por ello que se ha desarrollado una
            experiencia de realidad virtual para recorrer la história del antiguo hospital.
          </p>
          <a href='/projectos/tintin60cat-vr-experience' className='btn btn-primary'>Leer más</a>
        </article>
        <article>
          <h2>TinTin60CAT - VR Experience</h2>
          
          <p>
            El projecto TinTin60CAT es una experiencia de realidad virtual creada para conmemorar el
            60 aniversario de la primera edición del cómic de tintin en catalán. En la experiencia podrás 
            adentrarte por toda la historia de los cómics del aventurero TinTín.
          </p>
          <a href='/projectos/tintin60cat-vr-experience' className='btn btn-primary'>Leer más</a>
        </article>
        <article>
          <h2>Club VR - Entorno</h2>
          <hr/>
          <p>
            El projecto Club VR es un entorno diseñado para proporcionar servicios al club de realidad virtual.
            Para poder crear el entorno hemos tenido que diseñar una pagina web que esté conectada a nuestra api 
            para poder proporcionar servicios, también está disponible una aplicación para tener todos los datos desde
            dispositivos móviles android.
          </p>
          <a href='/projectos/tintin60cat-vr-experience' className='btn btn-primary'>Leer más</a>
        </article>
      </section>
    </main>
    </>
  );
};

export default Projects;