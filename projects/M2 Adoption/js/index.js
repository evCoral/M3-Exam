let sampleData = [
  { src: "images/alekcis.jpg", name: "Alekcis", age: "7 months old", alt: "bird" },
  { src: "images/alex.jpg", name: "Alex", age: "1 year old", alt: "cat" },
  { src: "images/akitama.png", name: "Akitama", age: "3 months", alt: "turtle" },
  { src: "images/dyeux.jpg", name: "Dyeux", age: "6 months old", alt: "puppy" },
  { src: "images/earl.jpg", name: "Earl", age: "8 months old", alt: "axolotl" },
  { src: "images/milly.jpg", name: "Milly", age: "5 months old", alt: "rabbit" },
  { src: "images/pardun.jpg", name: "Pardun", age: "1 year old", alt: "cat" },
  { src: "images/polka.jpg", name: "Polka", age: "1 year old", alt: "fennec" },
  { src: "images/snek.jpg", name: "Snek", age: "4 months old", alt: "snake" },
  { src: "images/steve.jpg", name: "Steve", age: "8 months old", alt: "puppy" },
];
let acceptedList = [];

const loadSelectedPets = () => {
  let final = "";
  acceptedList.forEach((object) => {
    const template = `<div class="d-flex p-2"><img class="md-pic" src="${object.src}" alt="${object.alt}"><div class="px-2"><h4 style="max-width: 200px;">${object.name}</h4><h5 class="text-muted"><i>${object.age}</i></h5></div></div>`;
    final += template;
  });
  document.getElementById("list").innerHTML = final;
};

const selectImg = () => {
  let length = sampleData.length;
  if (length > 0) {
    let random = Math.floor(Math.random() * length);
    let img = sampleData[random];
    document.getElementById("show-img").setAttribute("src", img.src);
    document.getElementById("pet-details").innerHTML = `${img.name}, ${img.age}`;
  } else {
    document.getElementById("content-pane").innerHTML =
      "<h1 class='center-align'>Nothing to show anymore.</h1>";
  }
};

const btnClick = (action) => {
  let deleteIndex = null;
  const currentImg = sampleData.find((object, index) => {
    if (
      object.src === document.getElementById("show-img").getAttribute("src")
    ) {
      deleteIndex = index;
      return object;
    }
  });
  if (action === "like") {
    acceptedList.unshift(currentImg);
    loadSelectedPets();
  }
  sampleData.splice(deleteIndex, 1);
  selectImg();
};

selectImg();
