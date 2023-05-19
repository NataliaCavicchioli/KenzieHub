import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button/styles";
import { Container } from "../ModalCreate/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import api from "../../services/api";
import { toast } from "react-toastify";
import "animate.css";

const ModalEdit = () => {
  const { techs, setTechs, isModalOpenEdit, setIsModalOpenEdit, listId } =
    useContext(UserContext);
  const [inputStatus, setInputStatus] = useState("Iniciante");

  const editTechs = () => {
    const tech = { status: inputStatus };
    setIsModalOpenEdit(false);
    // console.log(listId);

    api.put(`/users/techs/${listId.id}`, tech).then((response) => {
      const index = techs.findIndex((item) => item.id === listId.id);
      techs[index] = { ...techs[index], ...tech };
      console.log(response);
      setTechs([...techs]);

      return toast("Tecnologia editada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <>
      {isModalOpenEdit && (
        <Container>
          <div className="modalContainer animate__animated animate__bounceIn">
            <div className="modalTitle">
              <p>Editar tecnologia</p>
              <button onClick={() => setIsModalOpenEdit(false)}>
                <AiOutlineCloseCircle />
              </button>
            </div>
            <div className="modalContent">
              <label htmlFor="nome">
                Nome
                <input
                  placeholder="Digite aqui a sua nova tecnologia"
                  defaultValue={listId?.title}
                  disabled
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
                onClick={() => editTechs()}
              >
                Editar tecnologia
              </Button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default ModalEdit;
