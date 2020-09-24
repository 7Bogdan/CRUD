import timeNow from "./time.js";

export let setLocalStorage = (id, title, url, text) => {
  localStorage.setItem(
    id,
    JSON.stringify({ id, title, url, text, creatAtTime:timeNow(), update: false })
  );
}

export let getLocalPosts = () => {
  let interimPosts = [];
  for (let i = 0, length = localStorage.length; i < length; i++) {
    interimPosts.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return interimPosts;
};

export let updateLocalPost = (id) => {
  let interimPostLocal = JSON.parse(localStorage.getItem(id))
  interimPostLocal.update = !interimPostLocal.update;
  localStorage.setItem(id, JSON.stringify(interimPostLocal));
};

export let deleteLocalPost = (id) =>{
  localStorage.removeItem(id)
}
