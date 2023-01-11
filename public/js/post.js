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

// collapsable script //
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
