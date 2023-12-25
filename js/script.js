function setMinDateValue() {
  const element = document.getElementById("date");
  element.min = new Date().toISOString().split("T")[0];
}

setMinDateValue();
