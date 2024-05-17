      const hexNumber = document.querySelector(".hex-number");
  
  ///generate random hex ketika web di buka
      document.addEventListener('DOMContentLoaded', (event) => {
          generateHex();
    });
     
 ///generate hex ketika button di klik
      function generate() {
          generateHex();
      }


////function untuk copy text
      function copyText() {
          hexNumber.select();
          navigator.clipboard.writeText(hexNumber.value)
              .then(() => {
                  alert("Text copied: " + hexNumber.value);
              })
              .catch(error => {
                  alert("Failed to copy text: " + error);
              });
      }
////function untuk menggenerate hex
      function generateHex(){
        const display = document.querySelector(".warna-display");
          const randomHex = () =>
              `#${Math.floor(Math.random() * 0xffffff)
                  .toString(16)
                  .padStart(6, '0')}`;
          hexNumber.value = randomHex();
          display.style.backgroundColor = hexNumber.value;
      }
 