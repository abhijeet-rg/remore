import validation from "./validation";

function validateFormData(data) {
  return {
    nameError: validation.checkIfspecialChar(data.name),
    contactError: validation.checkContactNumber(data.contact),
    emailError: validation.validateEmail(data.email),
  };
}

export default validateFormData;
