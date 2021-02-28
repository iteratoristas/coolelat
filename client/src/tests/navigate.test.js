import { navigate } from "../helpers/navigate";

describe("navigate function", () => {
  const formatPath = (history, route, method = "PUSH") => {
    const newPath =
      "/" + route.trim().indexOf("/") !== -1
        ? route.trim().substring(route.trim().indexOf("/") + 1)
        : route.trim();

    return method === "PUSH" ? history.location.pathname + newPath : newPath;
  };

  const history = {
    length: 3,
    action: "POP",
    location: { pathname: "/" },
    push: (route) => {
      return {
        ...history,
        action: "PUSH",
        length: history.length + 1,
        location: {
          pathname: formatPath(history, route),
        },
      };
    },
    replace: (route) => {
      return {
        ...history,
        action: "REPLACE",
        location: {
          pathname: formatPath(history, route, "REPLACE"),
        },
      };
    },
  };

  test("should correctly navigate with no method parameter", () => {
    expect(navigate(history, { route: "/hello" })).toEqual(
      expect.objectContaining({
        length: history.length + 1,
        action: "PUSH",
        location: expect.objectContaining({
          pathname: formatPath(history, "/hello"),
        }),
      })
    );
  });

  test("should correctly navigate with 'PUSH' as method param value", () => {
    expect(navigate(history, { route: "/hello", method: "PUSH" })).toEqual(
      expect.objectContaining({
        length: history.length + 1,
        action: "PUSH",
        location: expect.objectContaining({
          pathname: formatPath(history, "/hello"),
        }),
      })
    );
  });

  test("should correctly navigate with 'REPLACE' as method param value", () => {
    expect(navigate(history, { route: "/hello", method: "REPLACE" })).toEqual(
      expect.objectContaining({
        length: history.length,
        action: "REPLACE",
        location: expect.objectContaining({
          pathname: formatPath(history, "/hello", "REPLACE"),
        }),
      })
    );
  });

  test("should correctly navigate case-insensitively", () => {
    expect(navigate(history, { route: "/hello", method: "RePlACe" })).toEqual(
      expect.objectContaining({
        length: history.length,
        action: "REPLACE",
        location: expect.objectContaining({
          pathname: formatPath(history, "/hello", "REPLACE"),
        }),
      })
    );
  });

  test("should return undefined on invalid history value", () => {
    expect(navigate("", { route: "/hello", method: "PUSH" })).toEqual(undefined);
  });

  test("should return history on invalid method value", () => {
    expect(navigate(history, { route: "/hello", method: "CAMERA" })).toEqual(history);
  });
});
