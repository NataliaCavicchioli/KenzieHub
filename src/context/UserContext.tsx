import api from "../services/api";
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HeadersDefaults } from "axios";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs?: ITech[];
  works?: string[];
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

interface IUserProviderData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  signIn: (data: IResponseSignIn) => void;
  registerUser: (data: IResponseRegister) => void;
  loading: boolean;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpenEdit: boolean;
  setIsModalOpenEdit: Dispatch<SetStateAction<boolean>>;
  techs: ITech[];
  setTechs: Dispatch<SetStateAction<ITech[]>>;
  listId: ITech;
  setListId: Dispatch<SetStateAction<ITech>>;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export interface IResponseSignIn {
  email: string;
  password: string;
}

export interface IResponseRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);
  const [listId, setListId] = useState<ITech>({} as ITech);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie-hub: token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties;
          const { data } = await api.get("/profile");
          setUser(data);
          setTechs(data.techs);
          console.log(data);
        } catch (error) {
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [techs]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie-hub: token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties;
          const { data } = await api.get("/profile");
          setUser(data);
          setTechs(data.techs);
          console.log(data);
        } catch (error) {
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const signIn = (data: IResponseSignIn) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("@kenzie-hub: token", token);
        api.defaults.headers = {
          Authorization: `Bearer ${token}`,
        } as CommonHeaderProperties;

        setUser(response.data.user);
        setTechs(response.data.user.techs);
        navigate("/dashboard");

        return toast.success("Welcome!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("Try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  const registerUser = (data: IResponseRegister) => {
    api
      .post("/users", data)
      .then(() => {
        navigate("/");
        return toast.success("🦄 Good job!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("🦄 Try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        registerUser,
        loading,
        isModalOpen,
        setIsModalOpen,
        isModalOpenEdit,
        setIsModalOpenEdit,
        techs,
        setTechs,
        listId,
        setListId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
