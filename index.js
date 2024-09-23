let profile = document.querySelector("#profile");
let title = document.querySelector("#title");
let desc = document.querySelector("#description");
let btnYes = document.querySelector("#btnYes");
let btnNo = document.querySelector("#btnNo");
let btnStop = document.querySelector("#btnStop");
let happyCat = new Audio("./image/happy-happy-happy-cat.mp3");
let cryingCat = new Audio("./image/banana-cat-crying.mp3");

profile.src = "./image/cat1.jpg";
profile.alt = "catProfile";
profile.computedStyleMap.marginTop = "40px";

title.innerHTML = "Do you love me ";
desc.innerHTML = "YES Please 🙇‍♀️ ";
btnNo.innerHTML = "No 🥲 ";
btnYes.innerHTML = "Yes 😍 ";
btnStop.innerHTML = "CANCLE";

btnYes.addEventListener("click", () => {
  profile.src =
    "https://i.pinimg.com/originals/69/22/3c/69223c23ce7f14c24c887e48dba6876c.gif";
  title.innerHTML = "Awwwwwww Awwwwwww!! 😻😽 ";
  desc.innerHTML = "Thank You !!";
  cryingCat.pause();
  happyCat.play();
  happyCat.loop = true;
});

btnNo.addEventListener("click", () => {
  profile.src = "https://media.tenor.com/QQpkCbV07UIAAAAM/mochj-cat.gif";
  title.innerHTML = "Noooooo Noooooo";
  desc.innerHTML = "Yes Please 🙇‍♀️🙇‍♀️🙇‍♀️";
  happyCat.pause();
  cryingCat.play();
  cryingCat.loop = true;
});

btnStop.addEventListener("click", () => {
  profile.src = "./image/cat1.jpg";
  title.innerHTML = "Do you love me ";
  desc.innerHTML = "YES Please 🙇‍♀️ ";
  cryingCat.pause();
  happyCat.pause();
});
