import "./App.css";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { PlanCard } from "./components/PlanCard/PlanCard";
import { Title } from "./components/Title/Title";

const mockedData = ['Consultas médicas sin cargo', 'Estudios y prácticas de diagnóstico y tratamientos sin cargo.', 'Servicio de internación clínica, quirúrgica y terapia intensiva sin cargo en clínicas y sanatorios incluidos en nuestra red de prestadores.', '40 sesiones por año sin cargo de fisiokinesioterapia y fonoaudiología.', '30 sesiones por año de consultas psiquiátricas y psicológicas con copago y 30 días sin cargo de internaciones psiquiátricas agudas.', 'Consultas, odontología general y urgencias sin cargo.', 'Descuento en farmacias. Entre 40% y 100% según PMOE.', 'Internacion en habitación individual en sanatorio güemes', 'Asistencia la viajero nacional e internacional', '1 anteojo por año por persona', 'Pension por acompañante sin cargo en sanatorio güemes en maternidad', 'Reintegro de hasta $3000 en perno y corona', 'Hasta 5 sesiones con medicación por persona en tratmiento escleorosante'];

const mockedData01 = [`Consultas médicas con copago. 
Consultas médicas en domicilio con copago. 
Servicios exclusivo de urgencias y emergencias.`, 'Estudios y prácticas de diagnóstico y tratamientos con copago.', 'Servicio de internación clínica, quirúrgica y terapia intensiva sin cargo en Sanatorio Güemes.', '30 sesiones por año de consultas psiquiátricas y psicológicas con copago y 30 días sin cargo de internaciones psiquiátricas agudas.', 'Consultas, odontología general y urgencias con copago.', 'Descuento en farmacias. Entre 40% y 100% según PMOE.']

function App() {
  return (
    <div className="App">
      <Navbar>
        <Button rounded className="nav-button">
          HOME
        </Button>
        <Button rounded className="nav-button">
          QUIENES SOMOS
        </Button>
        <Button rounded className="nav-button">
          PLANES
        </Button>
        <Button rounded className="nav-button">
          MEDIOS DE PAGO
        </Button>
        <Button rounded className="nav-button">
          CONTACTO
        </Button>
      </Navbar>
      <header className="header"></header>

      <Container
        img={
          "https://drive.google.com/uc?export=view&id=1yAKP1jwtFTjdPX2bJKkPR_zGUtk_JAgS"
        }
        order={"rtl"}
        title={"SOBRE NOSOTROS"}
      >
        Cuidamos tu salud a través de una cobertura médica innovadora
        especialmente diseñada para vos. Medicina Prepaga Hominis S.A. nace en
        Septiembre de 1990. Desde sus orígenes fue pensada como una Empresa
        dedicada al cuidado de la salud del Hombre (HOMINIS), ofreciendo planes
        médicos orientados a la prevención y asistencia de la salud promoviendo
        el bienestar de sus asociados. Contar con el Sanatorio Güemes como
        infraestructura sanatorial propia es muy bueno, ya que es el Sanatorio
        Privado más grande de Latinoamérica con tecnología de avanzada y
        profesionales altamente calificados. Lo que nos mueve es tu bienestar,
        por eso trabajamos para bridarte un servicio cada vez mejor, a un precio
        que podés acceder.
      </Container>

      <Container
        img={
          "https://drive.google.com/uc?export=view&id=1ZsHpZKRpPWWCYa5Zcx5jgjsWiM4roKSZ"
        }
        order={"ltr"}
        title={"PLANES"}
        bgColor="#654bad"
        className={"planes--title"}
      >
        Esta prepaga pone a disposición una completa propuesta en planes de
        salud (SG 1.0, SG 2.0, H 3.0) que varían en función del nivel de
        servicio y precio buscado. Abajo vas a encontrar el detalle de los
        principales planes.
      </Container>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          padding: '3rem'
        }}
      >
        <PlanCard 
          title="SG 01"
          description="Plan exclusivo para uso en el Sanatorio Güemes"
          benefits={mockedData01}/>

        <PlanCard 
          title="H 3.0"
          description="Todos los sanatorios de la carta disponibles"
          benefits={mockedData}
          popular/>

        <PlanCard 
          title="SG 02"
          description="Plan exclusivo para uso en el Sanatorio Güemes"
          benefits={mockedData01}/>
      </div>
    </div>
  );
}

export default App;
