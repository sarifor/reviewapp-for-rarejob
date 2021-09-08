const test = (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    const id = input.id;
    const value = input.value;
    console.log(id);
    console.log(value);

    console.log("clicked!"); 
};