const form = document.getElementById("commentForm");
const eachArticle = document.getElementById("eachArticle");

const handleSubmit = async (event) => {
    event.preventDefault();
    const input = form.querySelector("input")
    // const input = form.getElementById("clickedDate");
    const comment = input.value;
    // const articleId = eachArticle.dataset.id;

    console.log(comment);
    // console.log(articleId);

    /*if (comment === "") {
      return;
    }
    const response = await fetch(`/api/videos/${videoId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (response.status === 201) {
      textarea.value = "";
      const { newCommentId } = await response.json();
      addComment(text, newCommentId);
    }*/
};
  
if (form) {
    form.addEventListener("submit", handleSubmit);
};