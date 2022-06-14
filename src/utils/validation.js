/**
 * Validate Text
 */

class ValidationUtils {
  checkIfspecialChar = (value) => {
    const regex = /[\\/=?`<>]/g;
    return regex.test(value);
  };

  validateEmail = (email) => {
    const re = /^([a-z0-9.\-_]+@[a-z0-9]+(\.[a-z]+)?\.[a-z]+)$/i;
    return re.test(String(email).toLowerCase());
  };

  checkIfEmptyField = (value) => {
    const re = /^$/;
    return re.test(value);
  };

  checkIfWhiteSpace = (value) => {
    if (typeof value !== "number" && value && value.trim().length === 0) {
      const re = /^\s/;
      return re.test(value);
    }
    return false;
  };

  checkContactNumber = (value) => {
    const re =
      /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    return re.test(value);
  };

  validatePassword = (password) => {
    // minimum eight characters, at least one uppercase letter, one lowercase letter and one special character
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  // By default max file size 5mb
  compareFileSize = (currentFileSizeInBytes, maximumFileSizeInMb = 5) => {
    //Convert mb to bytes
    const maxSizeInByte = maximumFileSizeInMb * Math.pow(2, 20);
    return !!(currentFileSizeInBytes < maxSizeInByte);
  };

  validateNumber = (value) => {
    const re = /^[0-9]*$/;
    return re.test(value);
  };

  validateFloatNumber = (value) => {
    const re = /^(\d*\.)?\d+$/gim;
    return re.test(value);
  };

  validateDomainName = (value) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    return re.test(value);
  };

  validateFileName = (value) => {
    const regex = /[\\/=`<>]/g;
    return regex.test(value);
  };
}

export default new ValidationUtils();
