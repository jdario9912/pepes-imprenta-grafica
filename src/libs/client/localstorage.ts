const nombreToken = "token" as const;

export const setToken = (token: string): void => {
  localStorage.setItem(nombreToken, token);
};

export const obtenerAuthtoken = (): string | null =>
  localStorage.getItem(nombreToken);

export const borrarToken = (): void => {
  localStorage.removeItem(nombreToken);
};
