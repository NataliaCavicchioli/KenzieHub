import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button/styles";
import { Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import api from "../../services/api";
import { toast } from "react-toastify";
import "animate.css";

const ModalCreate = () => {
  const { techs, setTechs, isModalOpen, setIsModalOpen } =
    useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("Iniciante");

  const addTechs = () => {
    const tech = { title: inputName, status: inputStatus };
    setIsModalOpen(false);

    api
      .post("/users/techs", tech)
      .then((response) => setTechs([...techs, response.data]));

    return toast("Tecnologia criada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {isModalOpen && (
        <Container>
          <div className="modalContainer animate__animated animate__bounceIn">
            <div className="modalTitle">
              <p>Cadastrar nova tecnologia</p>
              <button onClick={() => setIsModalOpen(false)}>
                <AiOutlineCloseCircle />
              </button>
            </div>
            <div className="modalContent">
              <label htmlFor="nome">
                Nome
                <input
                  placeholder="Digite aqui a sua nova tecnologia"
                  value={inputName}
                  onChange={(event) => setInputName(event.target.value)}
                />
              </label>
              <label htmlFor="status">
                Selecionar status
                <select
                  onChange={(event) => setInputStatus(event.target.value)}
                >
                  <option value={"Iniciante"}>Iniciante</option>
                  <option value={"Intermediário"}>Intermediário</option>
                  <option value={"Avançado"}>Avançado</option>
                </select>
              </label>
              <Button
                backgroundColor="var(--primary)"
                color="var(--white)"
                height="3.3rem"
                fontSize="1.063rem"
                width="92%"
                onClick={() => addTechs()}
              >
                Cadastrar tecnologia
              </Button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default ModalCreate;
