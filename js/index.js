const footerDate = () => {
  const initialYear = 2023;
  const actualYear = new Date().getFullYear();
  const footerDateElement = document.getElementById('footerDate');

  if (initialYear === actualYear) {
    footerDateElement.innerText = initialYear;
  } else {
    footerDateElement.innerText = `${initialYear} - ${actualYear}`
  }
}

footerDate();
