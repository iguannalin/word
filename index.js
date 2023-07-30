window.addEventListener("load", () => {
  let debounce = function(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  let timeout;

  // Fisher-Yates/Knuth shuffle code from https://stackoverflow.com/a/6274398
  function translate(text) {
    let words = text.split(" ");
    if (words.length < 3) return;
    let div = document.createElement("div");
    let counter = words.length;
    
    for (let i = 0; i < 5; i++) {
      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = words[counter];
        words[counter] = words[index];
        words[index] = temp;
        div.innerHTML += (" " + words[counter]);
      }
      content.appendChild(div);
      div = document.createElement("div");
      counter = words.length;
    }
  }
  
  function onType(e) {
    if (!e || !e.data || e.target.value.length < 3) return;
    debounce(() => translate(input.value), 300);
  }
  let content = document.getElementById("content");
  let input = document.getElementById("prompt");
  input.oninput = onType;
});