import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Senha deve conter no mínimo 8 dígitos")
    .required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Tente novamente"),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup.string().required("O contato é obrigatório"),
  course_module: yup.string().required("O módulo é obrigatório"),
});
