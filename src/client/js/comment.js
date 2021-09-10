let forms = document.querySelectorAll("form");

const test = (event) => {
  event.preventDefault();

  try {
    const input = event.target.querySelector("input");
    let date = input.id;
    let value = input.value;

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
  for (let i = 0; i < forms.length; i++) {
    const form = forms[i];
    form.addEventListener("submit", test);
  };
};