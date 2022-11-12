import "./App.css";
import { Button } from "./components/Button/Button";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { ContactInfo } from "./components/ContactInfo/ContactInfo";
import { Container } from "./components/Container/Container";
import { ContactForm } from "./components/ContatcForm/ContactForm";
import { Navbar } from "./components/Navbar/Navbar";
import { PlanCard } from "./components/PlanCard/PlanCard";
import { PlansCardContainer } from "./components/PlansCardContainer/PlansCardContainer";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Button rounded className="nav-button" onClick={() => window.scrollTo(0, 400)}>
          QUIENES SOMOS
        </Button>
        <Button rounded className="nav-button" onClick={() => window.scrollTo(0, 1150)}>
          PLANES
        </Button>
        <Button rounded className="nav-button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          CONTACTO
        </Button>
      </Navbar>

      <header className="header">
        <CallToAction
          title={"Comenzá tu cobertura"}
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          btnTitle={"Asociate"}
        />
      </header>

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

      <PlansCardContainer />

      <div
        style={{
          backgroundColor: "var(--gray)",
          padding: "4rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ContactForm />

        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
