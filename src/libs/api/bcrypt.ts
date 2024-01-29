import bcrypt from "bcrypt";

export const hashPass = (password: string): string => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

export const checkPass = async (
  hashPass: string,
  passwordInput: string
): Promise<boolean> => await bcrypt.compare(passwordInput, hashPass);
