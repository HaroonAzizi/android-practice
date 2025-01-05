// Fetch the Markdown file and render it
fetch("./notes.md")
  .then((response) => response.text())
  .then((markdown) => {
    // Convert Markdown to HTML using marked
    const htmlContent = marked.parse(markdown, {
      highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
    document.getElementById("markdown-preview").innerHTML = htmlContent;
    // Apply syntax highlighting
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  })
  .catch((error) => console.error("Error loading Markdown file:", error));
