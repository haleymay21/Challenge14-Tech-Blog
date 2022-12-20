const postFormHandler = async function (event) {
    event.preventDefault();
    const titleEl = document.querySelector("#post-title");
    const contentEl = document.querySelector("#post-content");
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        post_title: titleEl.value,
        post_content: contentEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Nope!");
    }
  };
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", postFormHandler);