

// Function to copy text to clipboard and show a styled notification
function copyTextAndNotify(textToCopy, buttonElementId) {
  // Use the modern Clipboard API
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Success! Show a notification.
    showNotification('متن با موفقیت کپی شد!');
  }).catch(err => {
    // Failed to copy
    console.error('Failed to copy text: ', err);
    // Optionally show an error notification
    showNotification('خطا در کپی کردن متن.', true); // true indicates error
  });
}

// Function to display a styled notification
function showNotification(message, isError = false) {
  // Create the notification element
  const notification = document.createElement('div');
  notification.id = 'copyNotification';
  notification.textContent = message;

  // Apply styles
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '15px 30px';
  notification.style.borderRadius = '30px';
  notification.style.backgroundColor = isError ? '#f8d7da' : '#d4edda'; // Red for error, green for success
  notification.style.color = isError ? '#721c24' : '#155724';
  notification.style.fontSize = '1.1em';
  notification.style.fontWeight = 'bold';
  notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  notification.style.zIndex = '1000';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.5s ease-in-out';

  // Append to the body
  document.body.appendChild(notification);

  // Fade in
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10); // Small delay to ensure element is in DOM before transition

  // Fade out after a few seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    // Remove from DOM after fade out
    notification.addEventListener('transitionend', () => {
      notification.remove();
    });
  }, 4000); // Show for 4 seconds
}

// --- Setup for your specific download div ---
document.addEventListener('DOMContentLoaded', () => {
  const downloadDiv = document.querySelector('.download'); // Select the div with class 'download'
  if (downloadDiv) {
    const textToCopy = downloadDiv.textContent.trim(); // Get the text content of the div

    downloadDiv.style.cursor = 'pointer'; // Change cursor to indicate it's clickable

    downloadDiv.addEventListener('click', () => {
      copyTextAndNotify(textToCopy, downloadDiv.id); // Pass the text and element's ID (though not strictly needed for this version)
    });
  }
});
