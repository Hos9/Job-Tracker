function showOnly(id) {
  const allJobs = document.getElementById("all-jobs");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");

  allJobs.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
