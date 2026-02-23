// function showOnly(id) {
//   const allJobs = document.getElementById("all-jobs");
//   const interview = document.getElementById("interview");
//   const rejected = document.getElementById("rejected");

//   allJobs.classList.add("hidden");
//   interview.classList.add("hidden");
//   rejected.classList.add("hidden");

//   const selected = document.getElementById(id);
//   selected.classList.remove("hidden");
// }

// Delete Button
document.addEventListener("click", function (e) {
  const isDeleteBtn = e.target.closest('button[data-action="delete-card"]');
  if (isDeleteBtn == false) {
    return;
  }

  const card = isDeleteBtn.closest(".job-card");
  if (card == false) {
    return;
  }

  card.remove();
});

// Count Jobs
const interviewList = [];
const rejectedList = [];

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJobsCount = document.getElementById("total-jobs");

const allJobsSection = document.getElementById("all-jobs");
const mainContainer = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = allJobsSection.children.length;
  totalJobsCount.innerText = allJobsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// Toggling buttons

function toggleStyle(id) {
  const allJobsBtn = document.getElementById("all-jobs-btn");
  const interviewBtn = document.getElementById("interview-btn");
  const rejectedBtn = document.getElementById("rejected-btn");
  const allJobs = document.getElementById("all-jobs");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");

  allJobsBtn.classList.add("bg-gray-300", "text-black");
  interviewBtn.classList.add("bg-gray-300", "text-black");
  rejectedBtn.classList.add("bg-gray-300", "text-black");

  allJobsBtn.classList.remove("bg-black", "text-white");
  interviewBtn.classList.remove("bg-black", "text-white");
  rejectedBtn.classList.remove("bg-black", "text-white");

  const selected = document.getElementById(id);

  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");

  if (id == "interview-btn") {
    interview.classList.remove("hidden");
    rejected.classList.add("hidden");
    allJobs.classList.add("hidden");
  } else if (id == "rejected-btn") {
    rejected.classList.remove("hidden");
    interview.classList.add("hidden");
    allJobs.classList.add("hidden");
  } else {
    rejected.classList.add("hidden");
    interview.classList.add("hidden");
    allJobs.classList.remove("hidden");
  }
}
