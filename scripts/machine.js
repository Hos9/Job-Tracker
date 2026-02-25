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
let interviewList = [];
let rejectedList = [];
let currentStatus = "all-jobs";

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
const allJobsBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");
// const allJobs = document.getElementById("all-jobs");
// const interview = document.getElementById("interview");
// const rejected = document.getElementById("rejected");

function toggleStyle(id) {
  allJobsBtn.classList.add("bg-gray-300", "text-black");
  interviewBtn.classList.add("bg-gray-300", "text-black");
  rejectedBtn.classList.add("bg-gray-300", "text-black");

  allJobsBtn.classList.remove("bg-black", "text-white");
  interviewBtn.classList.remove("bg-black", "text-white");
  rejectedBtn.classList.remove("bg-black", "text-white");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");

  if (id == "interview-filter-btn") {
    allJobsSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    // rejectedSection.classList.add("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    allJobsSection.classList.remove("hidden");
    // rejectedSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    // rejectedSection.classList.remove("hidden");
    allJobsSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-interview")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;
    // console.log(parentNode.querySelector(".job-card"));

    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const salaryRange = parentNode.querySelector(".salary-range").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const toDo = parentNode.querySelector(".to-do").innerText;

    parentNode.querySelector(".status").innerText = "INTERVIEW";
    // parentNode
    //   .querySelector(".status")
    //   .classList.add("border-green-500", "text-green-500");

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

    rejectedList = rejectedList.filter(
      (item) => item.jobTitle !== cardInfo.jobTitle,
    );

    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }

    calculateCount();
  } else if (event.target.classList.contains("btn-rejected")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;
    // console.log(parentNode.querySelector(".job-card"));

    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const salaryRange = parentNode.querySelector(".salary-range").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const toDo = parentNode.querySelector(".to-do").innerText;

    parentNode.querySelector(".status").innerText = "REJECTED";
    // parentNode
    //   .querySelector(".status")
    //   .classList.add("border-red-500", "text-red-500");

    const cardInfo = {
      jobTitle,
      jobDetails,
      salaryRange,
      status,
      toDo,
    };

    const jobTitleExist = rejectedList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    if (!jobTitleExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobTitle !== cardInfo.jobTitle,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    calculateCount();
    // renderRejected();
  }
});

function renderInterview() {
  interviewSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    div.className = "space-y-5";
    div.innerHTML = `
    <div
          class="job-card border-l-2 border-l-green-500 relative space-y-5 bg-base-200 p-6 shadow-sm rounded-lg mb-4"
        >
          <div class="card">
            <h1 class="job-title font-bold text-xl">${interview.jobTitle}</h1>
            <p class="job-details">${interview.jobDetails}</p>
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
            <p class="salary-range">${interview.salaryRange}</p>
          </div>
          <div class="card">
            <div class="status border-green-500 text-green-500 btn btn-soft w-36 mb-2 ">
              INTERVIEW
            </div>
            <p class="to-do">${interview.toDo}
            </p>
          </div>
          <div class="card md:flex-row gap-5">
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

function renderRejected() {
  interviewSection.innerHTML = "";

  for (let rejected of rejectedList) {
    console.log(rejected);

    let div = document.createElement("div");
    div.className = "space-y-5";
    div.innerHTML = `
    <div
          class="job-card border-l-2 border-l-red-500 relative space-y-5 bg-base-200 p-6 shadow-sm rounded-lg mb-4"
        >
          <div class="card">
            <h1 class="job-title font-bold text-xl">${rejected.jobTitle}</h1>
            <p class="job-details">${rejected.jobDetails}</p>
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
            <p class="salary-range">${rejected.salaryRange}</p>
          </div>
          <div class="card">
            <div class="status border-red-500 text-red-500 btn btn-soft w-36 mb-2 ">
              REJECTED
            </div>
            <p class="to-do">${rejected.toDo}
            </p>
          </div>
          <div class="card md:flex-row gap-5">
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
