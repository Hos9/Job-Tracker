// Delete Button
document.addEventListener("click", function (e) {
  const btn = e.target.closest('button[data-action="delete-card"]');
  if (btn == false) {
    return;
  }

  const card = btn.closest(".job-card");
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
const interviewSection = document.getElementById("interview");
const rejectedSection = document.getElementById("rejected");
const mainContainer = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = allJobsSection.children.length;
  totalJobsCount.innerText = allJobsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// Toggling buttons
const allJobsBtn = document.getElementById("all-jobs-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const allJobs = document.getElementById("all-jobs");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");

function toggleStyle(id) {
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

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-interview")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;

    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const salaryRange = parentNode.querySelector(".salary-range").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const toDo = parentNode.querySelector(".to-do").innerText;

    parentNode.querySelector(".status").innerText = "INTERVIEW";
    parentNode
      .querySelector(".status")
      .classList.add("border-green-500", "text-green-500");

    const cardInfo = {
      jobTitle,
      jobDetails,
      salaryRange,
      status,
      toDo,
    };

    const jobTitleExist = interviewList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    if (!jobTitleExist) {
      interviewList.push(cardInfo);
    }
    renderInterview();
  }
});

function renderInterview() {
  interviewSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    // div.className = ''
    div.innerHTML = `
    <div
          id="job-card-1"
          class="job-card relative space-y-5 bg-base-200 p-6 shadow-sm rounded-lg mb-4"
        >
          <div class="card">
            <h1 class="job-title font-bold text-xl">Mobile First Corp</h1>
            <p class="job-details">React Native Developer</p>
            <button
              type="button"
              class="dlt-btn btn btn-circle btn-soft btn-error border-gray-300 btn-lg absolute right-3 top-0 z-50"
              aria-label="Delete job card"
              data-action="delete-card"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div class="card">
            <p class="salary-range">Remote • Full-time • $130,000 - $175,000</p>
          </div>
          <div class="card">
            <div class="status btn btn-soft w-36 mb-2 border-gray-500">
              Not Applied
            </div>
            <p class="to-do">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
          </div>
          <div class="card felx md:flex-row gap-5">
            <div>
              <button id="btn-interview"
                class="btn btn-soft btn-success w-30  border-green-600 text-green-600"
              >
                INTERVIEW
              </button>
            </div>
            <div>
              <button id="btn-rejected"
                class="btn btn-soft btn-error w-30  border-red-600 text-red-600"
              >
                REJECTED
              </button>
            </div>
          </div>
        </div>
    
    `;

    interviewSection.appendChild(div);
  }
}
