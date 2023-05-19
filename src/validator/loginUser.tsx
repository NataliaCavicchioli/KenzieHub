import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(8, "Senha deve conter no mínimo 8 dígitos")
    .required("A senha é obrigatória"),
});
