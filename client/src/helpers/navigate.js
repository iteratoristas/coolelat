export const navigate = (history, { method,  route } = { method: "PUSH", route: "" }) => {
  if (method.trim().toUpperCase() === "PUSH") {
    return history?.push(route);
  } else if (method.trim().toUpperCase() === "REPLACE") {
    return history?.replace(route);
  }
};