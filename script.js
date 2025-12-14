const input = document.getElementById("image");
const fileName = document.getElementById("file-name");

input.addEventListener("change", () => {
  fileName.textContent = input.files.length
    ? input.files[0].name
    : "No file chosen";
});