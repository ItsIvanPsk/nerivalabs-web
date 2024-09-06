import React from 'react';
import Hero from './Hero';
import '../styles/pages/Layout.css';
import '../styles/core/PageMainStyle.css'
import EventoCastañada1 from '../assets/events/Evento-Carnaval-1.jpg';
import EventoTinTin3 from '../assets/events/Evento-TinTin-3.jpg';
import Projecto1 from '../assets/projects/tintin-vr-experience/TinTinVRExperience-1.png';
import Projecto2 from '../assets/projects/hospital-viladecans-vr-experience/HospitalViladecans-1.png';

const Layout: React.FC = () => {
  return (
    <>
    <div className="layout">
        <Hero />
    </div>
    <main className='main-container'>
      <div className='main-container'>
        <section>
          <article className='project-article'>
            <h3>Projectos</h3>
            <p>
              Desarrollamos soluciones informaticas de todo tipo,
              tanto páginas web, CRMs y experiencias de realidad virtual.
            </p>
            <div className='project-container'>
              <div>
                <img src={ Projecto2 } alt='Imagen proyecto Hospital Viladecans'/>
                <p className='project-container-title'><b>Hospital Viladecans</b></p>
                <p className='project-container-subtitle'><em>VR, Experiencia, Inmersivo</em></p>
                <a href='projects/hospital-viladecans-vr-experience' className='btn'>Leer más</a>
              </div>
              <div>
                <img src={ Projecto1 } alt='Imagen proyecto TinTin60Cat'/>
                <p className='project-container-title'><b>TinTin60CAT</b></p>
                <p className='project-container-subtitle'><em>VR, Museo, Experiencia, Inmersivo</em></p>
                <a href='projects/titin60cat-vr-experience' className='btn'>Leer más</a>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className='team-article'>
            <h3>Nuestro equipo</h3>
            <p>
              En Itsy Dev apostamos por tener un equipo multidisciplinar para poder
              ofertar el mejor servicio posible a nuestros clientes.
            </p>
            <div className='team-container'>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Ivan <em>'ItsIvanPsk'</em> Figueredo</h3>
                <p>Founder & Lead Programer</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Nerea <em>'Remtail'</em> López</h3>
                <p>Project Manager</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>William <em>'Darkoul'</em> Molina</h3>
                <p>Programer & 3D Artist</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Jenner <em>'Okamen'</em> Sarmiento</h3>
                <p>System Management & SysOps</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Mireia <em>'Luniare'</em> Lopez</h3>
                <p>Event Manager</p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className='event-article'>
            <div>
              <h3>Eventos</h3>
              <p>
                Uno de nuestros servicios, orientado en gran medida en el desarrollo de experiencias de realidad virtual, son 
                la organizacion de eventos de muestras de dichas experiencias. Durante el dia o dias de muestra de la experiencia,
                el estudio organiza la experiencia en base a las necesidades del evento, además de dar cobertura técnica al evento.
              </p>
            </div>
            <div className='event-gallery'>
              <a href='/'>
                <img src={EventoCastañada1} alt='Imagen de evento de presentación de TinTin60CAT'></img>
              </a>
              <a href='/'>
                <img src={EventoTinTin3} alt='Imagen de evento de presentación de TinTin60CAT'></img>
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
    </>
  );
}

export default Layout;
