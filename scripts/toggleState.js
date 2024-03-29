const submitBtn = document.querySelector('#submitBtn');
const formElem = document.querySelector('.rating-component > form');
const thankYouSectionElem = document.querySelector('.thank-you-section');
const selectedRatingElem = document.querySelector('#rating')

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  const selectedElem = document.querySelector('input[name="offering-feedback"]:checked')
  
  if (selectedElem.value.length === 0) {
    return
  }

  formElem.style.display = "none";
  thankYouSectionElem.style.display = "block";
  selectedRatingElem.innerText = selectedElem.value;
})

