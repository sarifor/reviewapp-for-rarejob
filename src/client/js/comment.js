// import "@babel/polyfill";
// import "regenerator-runtime/runtime";

const test = (event) => {
    event.preventDefault();

    try {
      /*const input = event.target.querySelector("input");
      let date = input.id;
      let value = input.value;
      console.log(typeof(date, value));
      console.log(date);
      console.log(value);*/

      let text = "abcde";

      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

    } catch (e) {
      console.log(e.message);
    };
};