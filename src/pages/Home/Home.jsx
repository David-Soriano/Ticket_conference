import { useLocation } from "react-router-dom";
import { IntroHome } from "../../components/Intro/IntroHome";
import { Ticket } from "../../components/Ticket/Ticket";
import { DecorBottom } from "../../components/DecorBottom/DecorBottom";
export function Home() {
  const location = useLocation();
  const { nombre, correo, GitHubUser, file_upload } = location.state || {}
  return (
    <>
      <IntroHome nombre={nombre} correo={correo}/>
      <Ticket nombre={nombre} github={GitHubUser} avatar={file_upload}/>
      <DecorBottom />
    </>
  );
}


