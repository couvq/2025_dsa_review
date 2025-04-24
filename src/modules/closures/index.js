const createCounter = () => {
  let count = 0;

  // returns closures with private access to the count variable
  return {
    value: () => count,
    count: () => {
      count += 1;
    },
  };
};

const counter = createCounter();

const countBtn = document.getElementById("count_btn");
const display = document.getElementById("display");
display.innerText = counter.value()

countBtn?.addEventListener("click", () => {
  counter.count()
  display.innerText = counter.value()
});
