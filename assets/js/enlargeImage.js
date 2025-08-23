const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const thumbnails = document.querySelectorAll(".thumbnail");

// Open modal when clicking a thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = thumbnail.dataset.large; // use high-res version
    modalImage.alt = thumbnail.alt;
  });
});

// Close modal with X button
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Optional: click outside image closes modal
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
