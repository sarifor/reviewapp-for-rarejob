// const form = document.getElementById("commentForm");
let forms = document.querySelectorAll("form");

const test = (event) => {
  event.preventDefault();
  console.log(event.target, "<- event target");
  // console.log(form, "inside of test func");

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

if (forms) {
  // forms.addEventListener("submit", test);

  console.log(forms);

  var inputs;
  var tempResult = {};
  var result = [];

  // console.log(forms[3][0].id); // 2021/08/28

  for (var i = 0; i < forms.length; i++) {
    const form = forms[i];
    console.log(form);
    form.addEventListener("submit", test);
    console.log("Added!", i);
  }  
};