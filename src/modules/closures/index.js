const createCounter = () => {
  let count = 0;
  const display = document.getElementById("display");
  display.innerText = count;

  // closure with private access to the count & display variables
  return () => {
    count += 1;
    display.innerText = count;
  };
};

const count = createCounter();

const countBtn = document.getElementById("count_btn");

countBtn?.addEventListener("click", () => {
  count();
});
