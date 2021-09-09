import "regenerator-runtime";

const test = async (event) => {
    event.preventDefault();

    try {
      /*const input = event.target.querySelector("input");
      let date = input.id;
      let value = input.value;
      console.log(typeof(date, value));
      console.log(date);
      console.log(value);*/

      let text = "abcde";

      await fetch("/", {
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