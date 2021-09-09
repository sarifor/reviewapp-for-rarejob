const test = (event) => {
    event.preventDefault();

    try {
      const input = event.target.querySelector("input");
      let date = input.id;
      let value = input.value;
      console.log(typeof(date, value));
      console.log(date);
      console.log(value);

      let response = fetch("/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, value })
      });
      console.log("fetched?");
      return response.ok

    } catch (e) {
      console.log(e.message);
    };
};