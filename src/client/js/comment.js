const test = (event) => {
    event.preventDefault();

    try {
      /*const input = event.target.querySelector("input");
      let date = input.id;
      let value = input.value;
      console.log(typeof(date, value));
      console.log(date);
      console.log(value);*/

      let response = fetch("/", {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          // 'Accept':'application/json'
        },
        // json: requestData,
        // body: JSON.stringify({ date: "2021/08/29", value: "abcdedfgs" }),
        body: "now in comment.js"
      });
      console.log("fetched?");
      return response.ok

    } catch (e) {
      console.log(e.message);
    };
};