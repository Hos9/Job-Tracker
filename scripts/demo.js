// Option A: If you have a wrapper containing multiple job cards;

const container = document.getElementById("jobs-container");

// Option B: If it's just this single card, you can listen on document:
document.addEventListener("click", (e) => {
  // Match the delete button by attribute or class
  const isDeleteBtn = e.target.closest('button[data-action="delete-card"]');

  if (!isDeleteBtn) return;

  const card = isDeleteBtn.closest(".job-card");
  if (!card) return;

  // Optional confirmation:
  // if (!confirm('Delete this card?')) return;

  card.remove();
});
