export const requestLoadData = () => {
  return fetch("/load").then((res) => {
    if (!res.ok) {
      throw Error("Ошибка сети");
    }
    return res.json();
  });
};
