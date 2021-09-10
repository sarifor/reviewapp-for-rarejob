// import "@babel/polyfill";
// import "regenerator-runtime/runtime";
const form = document.getElementById("commentForm");

const test = (event) => {
    event.preventDefault();
    console.log(event.target);

    try {
      const input = event.target.querySelector("input");
      let date = input.id;
      let value = input.value;

      console.log(date, value);

      fetch("/", { // Fetch failed loading: POST "http://localhost:3000/" 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, value }),
      });

    } catch (e) {
      console.log(e.message);
    };
};

if (form) {
  form.addEventListener("submit", test);
}