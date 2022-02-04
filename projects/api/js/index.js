let sampleData = Array.from(Array(500).keys(), (element) => {
  let img = `000${element+1}`;
  let imgSrc = `https://nekos.best/api/v1/nekos/${img.slice(
    img.length - 4
  )}.jpg`;
  return imgSrc;
});
let acceptedList = [];

const loadSelectedPets = () => {
  let final = "";
  acceptedList.forEach((element) => {
    const template = `<div class="col buttons m-4"><img class="md-pic" src="${element}" alt="Neko Image" onclick="selectImg('view', '${element}')"></div>`;
    final += template;
  });
  document.getElementById("list").innerHTML = final;
};

const loadImg = () => {
  let length = sampleData.length;
  if (length > 0) {
    let random = Math.floor(Math.random() * length);
    let imgSrc = sampleData[random];
    document.getElementById("show-img").setAttribute("src", imgSrc);
  } else {
    document.getElementById("content-pane").innerHTML =
      "<h1 class='center-align'>Nothing to show anymore.</h1>";
  }
};

const selectImg = (action, src) => {
  if (action === "view") {
    let modal = document.getElementById("myModal");
    document.getElementById("preview-img").setAttribute("src", src);
    document.getElementById("dl-img").setAttribute("href", src);
    modal.style.display = "block";
  } else if (action === "close") {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
};

const btnClick = (action) => {
  let deleteIndex = null;
  const currentImg = sampleData.find((element, index) => {
    if (element === document.getElementById("show-img").getAttribute("src")) {
      deleteIndex = index;
      return element;
    }
  });
  if (action === "like") {
    acceptedList.unshift(currentImg);
    loadSelectedPets();
  }
  sampleData.splice(deleteIndex, 1);
  loadImg();
};

loadImg();
