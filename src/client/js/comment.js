const test = (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    const id = input.id;
    const value = input.value;

    //fetch로 값 보내기
    try {
      fetch(`/${id}`, { // POST http://localhost:3000/2021/08/28 404 (Not Found)  // Fetch failed loading: POST "http://localhost:3000/2021/08/28"
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ value })
      });
    } catch (e) {
      console.log("failed to fetch url");
    };
};