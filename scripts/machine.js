function showOnly(id) {
  const cardOne = document.getElementById("job-card-1");
  const cardTwo = document.getElementById("job-card-2");
  const cardThree = document.getElementById("job-card-3");
  const cardFour = document.getElementById("job-card-4");
  const cardFive = document.getElementById("job-card-5");
  const cardSix = document.getElementById("job-card-6");
  const cardSeven = document.getElementById("job-card-7");
  const cardEight = document.getElementById("job-card-8");

  cardOne.classList.add("hidden");
  cardTwo.classList.add("hidden");
  cardThree.classList.add("hidden");
  cardFour.classList.add("hidden");
  cardFive.classList.add("hidden");
  cardSix.classList.add("hidden");
  cardSeven.classList.add("hidden");
  cardEight.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
