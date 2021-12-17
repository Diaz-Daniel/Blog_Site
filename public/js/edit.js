const blogId = document.querySelector('input[name="blog-id"]').value;

const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-title"]').value;
  const body = document.querySelector('textarea[name="blog-text"]').value;

  if (title && body) {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update blog");
    }
  }
};

const deleteHandler = async function () {
  await fetch(`/api/blog/${blogId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

document
  .querySelector(".edit-blog-post")
  .addEventListener("submit", editFormHandler);

document.querySelector("#deleteBtn").addEventListener("click", deleteHandler);
