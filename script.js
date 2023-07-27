let inputElement = document.querySelector('.enter-text');
    
    // Get the "Your Text" element
    let yourTextElement = document.querySelector('.yourText');

    // Add an event listener to capture input changes
    inputElement.addEventListener('input', function() {
      // Update the "Your Text" element with the user's input
      yourTextElement.textContent = inputElement.value;
    });


const lightbulbs = document.querySelectorAll('.fa-regular');
const text = document.querySelector('.yourText');
const firstBulb = lightbulbs[0]; // Get the first bulb from the NodeList
const firstBulbShadowColor = firstBulb.getAttribute('data-shadow-color');

// Apply the text shadow and color to the first bulb
firstBulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${firstBulbShadowColor}`;
firstBulb.style.color = 'white';

// Apply the text shadow to the "yourText" element
text.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${firstBulbShadowColor}`;

// Set the activeBulb variable to the first bulb
activeBulb = firstBulb;
lightbulbs.forEach((bulb) => {
  bulb.addEventListener('mouseenter', function() {
    const shadowColor = bulb.getAttribute('data-shadow-color');
    bulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
    bulb.style.color = 'white';
  });
  bulb.addEventListener('click', function() {
    const shadowColor = bulb.getAttribute('data-shadow-color');
    if (activeBulb !== null && activeBulb !== bulb) {
      activeBulb.style.textShadow = 'none';
      activeBulb.style.color = activeBulb.getAttribute('data-color');
    }
    activeBulb = bulb;
    text.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
    bulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
  });
  bulb.addEventListener('mouseleave', function() {
    const mainColor = bulb.getAttribute('data-color');
    if (activeBulb !== bulb) {
      bulb.style.textShadow = 'none';
      bulb.style.color = mainColor;
    }
  });
});
const fontList = document.querySelectorAll('.font-select li');
fontList.forEach(li => {
    li.addEventListener('click', () => {
        const selectedFont = li.getAttribute('data-font');
        const yourTextElement = document.querySelector('.yourText');
        yourTextElement.style.fontFamily = selectedFont;
        fontList.forEach(item => {
            item.classList.remove('selected');
        });
        li.classList.add('selected');
    });
});
fontList[0].click();

// Получаем ссылку на элемент input
const inputs = document.querySelectorAll('.input')

inputs.forEach((inputElement)=>{
inputElement.addEventListener('focus', function() {
  // При фокусировке на элементе добавляем класс "selected"
  inputElement.classList.add('selected-input');
});

// Добавляем обработчик события "blur" (потеря фокуса)
inputElement.addEventListener('blur', function() {
  // При потере фокуса удаляем класс "selected"
  inputElement.classList.remove('selected-input');
});
})


const fileInput = document.getElementById('fileInput');
const previewImg = document.querySelector('.file-preview');
fileInput.addEventListener('change', ()=>{
  uploadFile(fileInput.files[0]);
});
function uploadFile(file){
  let reader = new FileReader();
  reader.onload = function(e){
    previewImg.innerHTML = `<img src=" ${e.target.result}" >`;
    previewImg.style.marginLeft = '15px';
  };
  reader.onerror = function(e){
    alert('Error');
  };
  reader.readAsDataURL(file);
}