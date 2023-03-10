
function getRandomColors() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  
  function generateBlocks() {
    let squareArr = [];
    for (let i = 0; i < 25; i++) {
      let square = document.createElement("div");
      const box = document.getElementById("box");
      square.setAttribute("class", "square");
      box.appendChild(square);
      square.style.backgroundColor = getRandomColors();
      squareArr.push(square)
    }
    generateBlocksInterval();
    return squareArr;
  }
  
  const createBlocks = generateBlocks();
  
  function changeColor() {
    createBlocks.forEach(el => {
      el.style.backgroundColor = getRandomColors();
    })
  }
  
  export function generateBlocksInterval() {
    setInterval(changeColor, 1000);
  }