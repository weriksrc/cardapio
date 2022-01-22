/**
 * Auxiliar de verificação de respostas de erros por StatusCode
 * @param {*} obj - Objeto de erro
 * @param {*} type - Tipo da ação
 * @param {*} description - Descrição da ação
 */
const response = (obj, type, description) => {
  let response = {};
  Object.assign(response, obj);

  return !navigator.onLine
    ? new Error("Sem acesso a internet, tente mais tarde")
    : !response
    ? new Error("Servidor indisponível, tente mais tarde")
    : new Error(verifyStatusResponse(response, type, description));
};

const verifyStatusResponse = (response, type, description) => {
  let data = response.response;
  const statusHttp = {
    401: () => "Não autenticado",
    400: () => verifyErrorsData(data),
    422: () => verifyErrorsData(data),
    404: () => "Não encontrado",
    500: () => verifyTypeAction(type, description),
    503: () => "Servidor indisponível",
    default: () => "Erro inesperado",
  };
  if (data == undefined) {
    return statusHttp.default();
  }
  return (statusHttp[data.status] || statusHttp.default)();
};

const verifyErrorsData = ({ data }) => {
  if (typeof data === "object") data = Object.values(data);
  return data && data !== {}
    ? data.length > 1
      ? getErrorValidationMessage(data[0][0])
      : getErrorValidationMessage(data[0])
    : "Existem erros a serem processados";
};

const verifyTypeAction = (action, description) => {
  let typesAction = {
    list: `Não foi possível realizar a listagem de ${description}, tente mais tarde.`,
    get: `Não foi possível realizar a consulta de ${description}, tente mais tarde.`,
    create: "Não foi possível realizar o cadastro, tente mais tarde.",
    update: "Não foi possível realizar a edição, tente mais tarde.",
    remove: "Não foi possível realizar a exclusão, tente mais tarde.",
    report:
      "Não foi possível realizar a geração do relatório, verifique sua consulta e tente novamente.",
    login: "Não foi possível realizar o login, tente mais tarde.",
    createUser: "Não foi possível cadastrar seu usuário, tente mais tarde.",
    default: "Erro de verificação",
  };
  return typesAction[action] || typesAction["default"];
};

const getErrorValidationMessage = (error) => {
  const errorsMessages = {
    "validation.required": "Campo obrigatório não preenchido",
    "validation.number": "Campo preenchido com valor não numérico",
    "validation.string": "Campo do tipo texto não preenchido",
    "validation.max": "Campo excedeu o número máximo de caracteres",
    "validation.min": "Campo excedeu o número mínimo de caracteres",
    "Server error": "Erro de servidor",
    "The cpf has already been taken.": "Este CPF já está em uso.",
    "The selected cpf is invalid.": "CPF Inválido",
    "The email has already been taken.": "Este e-mail já está em uso",
    default: "Valor preenchido inválido",
  };

  return errorsMessages[error] || errorsMessages.default;
};

export default response;
