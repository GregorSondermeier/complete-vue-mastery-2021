const data = {
  secondsPassed: 0,
};

const elem = document.querySelector('#secondsPassed');

const observedData = new Proxy(data, {
  set(target, key, value) {
    console.log('Proxy#set(target, key, value)', {target, key, value});
    elem.innerText = value;
    target[key] = value;
  },
});

let secondsPassed = 0;
setInterval((millisecondsPassed) => {
  secondsPassed += 1;
  observedData.secondsPassed = secondsPassed;
}, 1000);
