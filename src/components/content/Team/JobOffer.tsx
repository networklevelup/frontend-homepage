import React from "react";
import anuncioPic from "../../../img/Team/Anuncio_Pic.jpg";
import "./JobOffer.css";

const JobOffer: React.FC = () => {
  return (
    <div className="container jobOffer">
      <img className="anuncioPic" alt="" src={anuncioPic} />

      <h1 className="titles">WE ARE HIRING!</h1>
      <h2 className="subtitle">Desarrollador Web (m/f/d)</h2>
      <h5>Quiénes somos</h5>
      <p>
        LevelUP es la primera red social de RRHH para el trabajo a distancia en
        Europa
      </p>
      <p>
        Nuestro objetivo es reducir el desempleo en España con nuevas
        tecnologías y contactos internacionales
      </p>
      <p className="moreMargin">
        Nuestra plataforma conecta empresas alemanas y profesionales españoles.
        Además, es la primera plataforma en Andalucia que recomienda de forma
        transparente la formación contínua y genera comparabilidad entre los
        candidatos. Si usted está altamente motivado y quiere revolucionar el
        proceso de solicitud, entonces aproveche esta oportunidad única y formar
        parte de un equipo único
      </p>

      <h5>Tus tareas</h5>
      <p>- Construyes con nosotros un Social Media HR(Frontend/Backend)</p>
      <p>- Investigación de nuevos algortimos de Matching, Rankings y más</p>
      <p>- Sabes lo que es un ERM</p>
      <p className="moreMargin">- Desarrollo en HTML, CSS, PHP, SQL</p>

      <h5>Tu perfil</h5>
      <p>- Tienes las primeras experiencias cons react.js, CSS y HTML5</p>
      <p>
        - Tienes un interés activo no solo en codigo de la aplicación, sino
        también en hacer grandes productos
      </p>
      <p>
        - Te gusta mejorar continuamente tu nivel de conocimiento sobre
        tecnologías relevantes
      </p>
      <p className="moreMargin">- Hablas Español e Inglés</p>

      <h5>Nuestros beneficios</h5>
      <p>- Le ofrecemos una tarea con sentido</p>
      <p>
        - La oportunidad de contribuir activamente a cambiar el mundo laboral
      </p>
      <p>-Libertad para construir procesos desde cero</p>
      <p>- Horas de trabajo flexibles y un entorno de trabajo ágil</p>
      <p>
        - Un auténtico trabajo en equipo con mucha diversión durante el trabajo
        y eventos regulares del equipo
      </p>
      <p className="moreMargin">
        - Un salario competitivo con ventajas adicionales
      </p>

      <p className="moreMargin">
        Si quieres luchar contra el desempleo en Andalucía junto a nosotros y
        crear una plataforma innovadora con contenidos de gamificación, estamos
        deseando recibir tu solicitud a la dirección de correo electrónico:
        team@network-levelup.com
      </p>
      <p>
        *Tu curriculum vitae y una breve explicación de porqué quieres ser
        miembro de nuestro equipo ¡ serán suficientes !
      </p>
    </div>
  );
};
export default JobOffer;
