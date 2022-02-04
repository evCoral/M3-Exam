const showSlides = () => {
  let touristSlides = document.getElementsByClassName("tourist-slides");
  let tinderSlides = document.getElementsByClassName("tinder-slides");
  let apiSlides = document.getElementsByClassName("api-slides");
  let allSlides = document.getElementsByClassName("slides");
  for (i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = "none";
  }

  touristSlides[Math.floor(Math.random()*touristSlides.length)].style.display = "block";
  tinderSlides[Math.floor(Math.random()*tinderSlides.length)].style.display = "block";
  apiSlides[Math.floor(Math.random()*apiSlides.length)].style.display = "block";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();