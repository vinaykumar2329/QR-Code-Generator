const input = document.querySelector('input')
const buttton = document.querySelector('button')
const img = document.querySelector('img')

buttton.addEventListener('click', function () {
  const inputValue = input.value;
  if (!inputValue) {
    alert('enter valid URL')
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
  }
})
input.addEventListener('keydown', function (e) {
  const inputValue = input.value;
  if (e.key === "Enter") {
    if (!inputValue) {
      alert('enter valid URL')
    } else {
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    }
  }
})