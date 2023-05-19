import { FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { ITech, UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { toast } from "react-toastify";
import "animate.css";

const ListItem = ({ title, status, id }: ITech) => {
  const { techs, setTechs, setIsModalOpenEdit, setListId } =
    useContext(UserContext);

  const openModal = () => {
    setIsModalOpenEdit(true);
    setListId({ title, status, id });
  };

  // console.log(techId)

  const removeItem = async (techId: string) => {
    console.log(id);
    await api.delete(`/users/techs/${techId}`).then((_) => {
      const filtered = techs.filter((item) => item.id !== techId);
      setTechs(filtered);
    });

    return toast("Tecnologia excluída com sucesso!", {
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
    <div className="listItem animate__animated animate__fadeInRight">
      <button onClick={() => openModal()}>{title}</button>
      <div className="span_button">
        <span>{status}</span>
        <button onClick={() => removeItem(id)}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
