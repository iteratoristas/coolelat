export const navigate = (history, { method = "PUSH", route = ""  } = {}) => {
  if (method.trim().toUpperCase() === "PUSH") {
    return history?.push?.(formatRoute(route));
  } else if (method.trim().toUpperCase() === "REPLACE") {
    return history?.replace?.(formatRoute(route));
  }

  return history;
};

const formatRoute = (route) => {
  if (route) {
    return route.trim().split('/').filter(item => item && item?.trim().length > 0).join('/');
  }

  return route;
}