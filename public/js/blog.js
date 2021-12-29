const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-title"]').value;
  const body = document.querySelector('textarea[name="blog-text"]').value;

  if (title && body) {
    const response = await fetch(`/api/blog`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog");
    }
  }
};

document
  .querySelector(".new-blog-post")
  .addEventListener("submit", newFormHandler);
