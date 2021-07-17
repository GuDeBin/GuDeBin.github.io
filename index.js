const projects = [
  {
    number: 1,
    name: "expanding-cards",
    imgLink: "1-expanding-cards.png",
    url: "expanding-cards",
  },
];

const projectsEl = document.getElementById("projects");

projects.forEach((project) => {
  projectEl = document.createElement("div");
  projectEl.innerHTML = `
  <span class="day">Dya ${project.number}</span>
        <img src="public/images/${project.imgLink}" alt="" />
        <div class="content">
          <h4>${formateProjectName(project.name)}</h4>
          <a href="projects/${project.url}/index.html" target="_blank"
            >Live Demo</a
          >
        </div>
        <a
          class="iphoneBtn"
          href="projects/${project.url}/index.html"
          target="_blank"
          >Live Demo</a
        >
  `;
  projectsEl.appendChild(projectEl);
});

function formateProjectName(name) {
  return name

    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
