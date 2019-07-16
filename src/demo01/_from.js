// import "regenerator-runtime/runtime";
// import "core-js/stable";
// import "@babel/polyfill";

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

let greeting = `\`Yo\` World!`;

let [a, b, c] = [1, 2, 3];

const d = Object.assign({}, { x: 2 });

const e = {
  b: 2,
  ...d
};

(async function() {
  console.log(1);

  await setTimeout(function() {
    console.log(1);
  }, 1000);

  console.log(1);
})();

(async function() {
  console.log(2);

  await setTimeout(function() {
    console.log(2);
  }, 1000);

  console.log(2);
})();
