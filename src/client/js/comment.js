const test = (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    const id = input.id;
    const value = input.value;

    //fetch로 값 보내기
    try {
      fetch(`localhost:3000/${id}`, { // Fetch API cannot load localhost:3000/2021/08/29. URL scheme "localhost" is not supported.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(value)
      });
    } catch (e) {
      console.log("failed to fetch url");
    };
};