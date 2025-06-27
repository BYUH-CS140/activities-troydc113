function sendEmail() {
  const message = document.getElementById('suggestionBox').value.trim();

  if (message === "") {
    alert("Please type a message before sending.");
    return false;
  }

  const mailtoLink = `mailto:troi113@go.byuh.edu?subject=Fragrance%20Suggestion&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;

  return false; // Prevent default form submission
}