/* ==========================================
   TRACK STARS WEBSITE - MAIN SCRIPT
   ========================================== */

// 1. CREDITS MODAL CONTROLLER (Global for all pages)
function openCreditsModal(event) {
  if (event) event.preventDefault();
  const modal = document.getElementById('creditsModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeCreditsModal(event) {
  // Prevent closing if clicking inside the modal card content (unless clicking X)
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('close-modal-btn')) {
    return;
  }
  const modal = document.getElementById('creditsModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal using the 'Escape' key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeCreditsModal();
  }
});


// 2. SUPPORT FORM HANDLER (Only runs on support.html)
function handleFormSubmit(event) {
  event.preventDefault();

  const supportEmail = "support@yourdomain.com"; // <--- Replace with your email address

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const categoryInput = document.getElementById('category');
  const messageInput = document.getElementById('message');

  if (!nameInput || !emailInput || !categoryInput || !messageInput) return;

  const name = nameInput.value;
  const email = emailInput.value;
  const category = categoryInput.value;
  const message = messageInput.value;

  const subject = encodeURIComponent(`[Track Stars Support] ${category} from ${name}`);
  const body = encodeURIComponent(
    `Player Name: ${name}\n` +
    `Player Email: ${email}\n` +
    `Issue Type: ${category}\n\n` +
    `Description:\n${message}`
  );

  // Trigger default email app
  window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;

  // UI State Update
  const form = document.getElementById('supportForm');
  const successMsg = document.getElementById('successMessage');

  if (form) form.style.display = 'none';
  if (successMsg) successMsg.style.display = 'block';
}

// Auto-attach listeners on DOM load
document.addEventListener('DOMContentLoaded', function () {
  const supportForm = document.getElementById('supportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', handleFormSubmit);
  }
});
