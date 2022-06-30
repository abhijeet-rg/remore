import validation from "./validation";

function validateFormData(data) {
  const nameErrorHandle = () => {
    if (data?.name) {
      return validation.checkIfspecialChar(data?.name);
    } else return true;
  };

  return {
    nameError: nameErrorHandle(),
    contactError: !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(
      data?.contact
    ),
    emailError: !validation.validateEmail(data?.email),
    qualityError: data?.quality > 0 ? false : true,
    behaviourError: data?.behaviour > 0 ? false : true,
    overallError: data?.overall ? false : true,
    experienceError: data?.experience ? false : true,
  };
}

export default validateFormData;
