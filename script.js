function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; 
  document.getElementById("utc-time").textContent = `UTC Time: ${utcTime}`;
}


document.addEventListener("DOMContentLoaded", () => {
  updateUTCTime();
  setInterval(updateUTCTime, 1000);
});
