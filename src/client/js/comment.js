const test = async (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    const id = input.id;
    const value = input.value;

    //fetch로 값 보내기
    try {
      await fetch(`localhost:3000/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(value)
      });
    } catch (e) {
      console.log("failed to fetch url");
    };
};