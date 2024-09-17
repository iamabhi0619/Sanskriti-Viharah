function generatePassword() {
  const charset = "abdefghijklmprstuvwyzABDEFGIJKLNOPRTUYZ235679!@#$%&";
  let password = "";
  for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
}

module.exports = {generatePassword}