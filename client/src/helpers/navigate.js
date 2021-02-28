export const navigate = (history, route, { method } = { method: "PUSH" }) => {
  if (method.trim().toUpperCase() === "PUSH") {
    return history?.push(route);
  } else if (method.trim().toUpperCase() === "REPLACE") {
    return history?.replace(route);
  }
};