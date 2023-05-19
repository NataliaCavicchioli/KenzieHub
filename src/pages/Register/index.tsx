import { Button } from "../../components/Button/styles";
import Logo from "../../components/Logo";
import { Container, ContainerForm, ContainerLogo } from "./styles";
import { useNavigate } from "react-router-dom";
import { schema } from "../../validator/registerUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { IResponseRegister, UserContext } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResponseRegister>({ resolver: yupResolver(schema) });

  return (
    <>
      <Container>
        <div className="container_register">
          <ContainerLogo>
            <Logo></Logo>
            <Button
              backgroundColor="var(--gray)"
              color="var(--white)"
              height="3.3rem"
              fontSize="1.2rem"
              width="7rem"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
          </ContainerLogo>

          <ContainerForm>
            <h3>Crie sua conta</h3>
            <form onSubmit={handleSubmit(registerUser)}>
              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  placeholder="Digite o seu nome aqui"
                  id="name"
                  {...register("name")}
                />
              </label>
              <p>{errors.name?.message}</p>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  placeholder="Digite o seu e-mail aqui"
                  id="email"
                  {...register("email")}
                />
              </label>
              <p>{errors.email?.message}</p>
              <label htmlFor="password">
                Senha
                <input
                  type="password"
                  placeholder="Digite a sua senha aqui"
                  id="password"
                  {...register("password")}
                />
              </label>
              <p>{errors.password?.message}</p>
              <label htmlFor="confirmPassword">
                Confirmar senha
                <input
                  type="password"
                  placeholder="Digite novamente a sua senha aqui"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>
              </label>
              <label htmlFor="bio">
                Bio
                <textarea
                  placeholder="Fale sobre você"
                  id="bio"
                  {...register("bio")}
                />
                <p>{errors.bio?.message}</p>
              </label>
              <label htmlFor="contato">
                Contato
                <input
                  type="text"
                  placeholder="Opção de contato"
                  id="contato"
                  {...register("contact")}
                />
                <p>{errors.contact?.message}</p>
              </label>
              <label htmlFor="select">
                Selecione o seu módulo:
                <select {...register("course_module")}>
                  <option value="Escolha aqui">Escolha aqui...</option>
                  <option value="M1">M1</option>
                  <option value="M2">M2</option>
                  <option value="M3">M3</option>
                  <option value="M4">M4</option>
                  <option value="M5">M5</option>
                  <option value="M6">M6</option>
                </select>
                <p>{errors.course_module?.message}</p>
              </label>

              <Button
                backgroundColor="var(--primary-negative)"
                color="var(--white)"
                height="3rem"
                fontSize="1rem"
                width="100%"
                type="submit"
              >
                Cadastrar
              </Button>
            </form>
          </ContainerForm>
        </div>
      </Container>
    </>
  );
};

export default Register;
