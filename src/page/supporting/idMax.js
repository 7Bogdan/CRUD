export let idMax = () => {
  let id = [];
  for (let i = 0; i < localStorage.length; i++) {
    id.push(Number(localStorage.key(i)));
  }
  let idMaxLocal = Math.max(...id);
  return idMaxLocal === -Infinity ? 1 : idMaxLocal + 1;
};

export default idMax
