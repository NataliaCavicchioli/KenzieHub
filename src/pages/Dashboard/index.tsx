import { Button } from "../../components/Button/styles";
import Logo from "../../components/Logo";
import { ContainerLogo } from "../Register/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, ContainerContent } from "./styles";
import { toast } from "react-toastify";
import "animate.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ModalCreate from "../../components/ModalCreate";
import ListItem from "../../components/ListItem";
import ModalEdit from "../../components/ModalEdit";
import EmptyList from "../../components/EmptyList";

const Dashboard = () => {
  const { techs, user, loading, setIsModalOpen } = useContext(UserContext);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/");
    return toast("Bye-bye!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (loading) return <div>Carregando...</div>;

  return user ? (
    <>
      <Container>
        <ContainerLogo>
          <Logo></Logo>
          <Button
            backgroundColor="var(--gray)"
            color="var(--white)"
            height="3.3rem"
            fontSize="1.2rem"
            width="7rem"
            onClick={() => signOut()}
          >
            Sair
          </Button>
        </ContainerLogo>
        <div className="userName">
          <p className="animate__animated animate__zoomIn">Olá, {user.name}</p>
          <span>Você está no {user.course_module}</span>
        </div>
        <div className="title_button">
          <h3>Tecnologias</h3>
          <button onClick={() => setIsModalOpen(true)}>+</button>
        </div>
        <ContainerContent>
          {techs.length > 0 ? (
            techs.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </ContainerContent>
        <ModalCreate />
        <ModalEdit />
      </Container>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
