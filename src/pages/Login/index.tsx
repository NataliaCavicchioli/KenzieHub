import { Button } from "../../components/Button/styles";
import Header from "../../components/Header";
import { Container, ContainerForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { schema } from "../../validator/loginUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { IResponseSignIn, UserContext } from "../../context/UserContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(UserContext);
  const [values, setValues] = useState({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResponseSignIn>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <div className="container_login">
        <Header />
        <ContainerForm>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                placeholder="Digite o seu e-mail aqui"
                id="email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </label>
            <label htmlFor="password">
              Senha
              <div className="inputShowPassword">
                <input
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Digite a sua senha aqui"
                  id="password"
                  {...register("password")}
                />
                <div className="buttonShowPassword">
                  <button onClick={handleClickShowPassword} type="button">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </button>
                </div>
              </div>
              <p>{errors.password?.message}</p>
            </label>
            <Button
              backgroundColor="var(--primary)"
              color="var(--white)"
              height="3rem"
              fontSize="1.2rem"
              width="100%"
              type="submit"
            >
              Entrar
            </Button>
            <span>Ainda não possui uma conta?</span>
            <Button
              backgroundColor="var(--gray)"
              color="var(--white)"
              height="3.5rem"
              fontSize="1.2rem"
              width="100%"
              onClick={() => navigate("../register")}
            >
              Cadastre-se
            </Button>
          </form>
        </ContainerForm>
      </div>
    </Container>
  );
};

export default Login;
