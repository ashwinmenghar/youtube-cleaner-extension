// Function to remove recommended videos
function removeRecommendedVideos() {
  // Select elements to hide
  const recommendations = document.querySelectorAll(
    "#related, #secondary, ytd-compact-video-renderer, ytd-compact-playlist-renderer, ytd-watch-next-secondary-results-renderer"
  );

  // Loop through the selected elements and hide them
  recommendations.forEach((element) => {
    element.style.display = "none";
  });
}

// Run the function to remove recommended videos
removeRecommendedVideos();

// Observe the body for changes (useful for dynamically loaded content)
const observer = new MutationObserver(() => {
  removeRecommendedVideos();
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });
