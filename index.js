let counter;

function calculateDate() {
  const currentDate = new Date();
  const dateInput = document.getElementById("date").value;
  if (dateInput) {
    const targetDate = new Date(dateInput);
    const diff = targetDate - currentDate;
    // milliseconds in a day = (1000 * 60 * 60 * 24)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const msg = `${days} days left!`;
    document.getElementById("days").innerHTML = msg;
  }
}
