const projects = [
  {
    number: 1,
    name: "expanding-cards",
    imgLink: "public/images/projectImages/1-expanding-cards.png",
    url: "projects/expanding-cards/index.html",
  },
  {
    number: 2,
    name: "progress-steps",
    imgLink: "public/images/projectImages/progress-steps.png",
    url: "projects/progress-steps/index.html",
  },
  {
    number: 3,
    name: "rotating-navigation",
    imgLink: "public/images/projectImages/rotating-navigation-animation.png",
    url: "projects/rotating-navigation-animation/index.html",
  },
  {
    number: 4,
    name: "hidden-search-widget",
    imgLink: "public/images/projectImages/hidden-search-widget.png",
    url: "projects/hidden-search-widget/index.html",
  },
  {
    number: 5,
    name: "blurry-loading",
    imgLink: "public/images/projectImages/blurry-loading.png",
    url: "projects/blurry-loading/index.html",
  },
];

const projectsEl = document.getElementById("projects");

projects.forEach((project) => {
  projectEl = document.createElement("div");
  projectEl.innerHTML = `
  <span class="day">Dya ${project.number}</span>
        <img src="${project.imgLink}" alt="" />
        <div class="content">
          <h4>${formateProjectName(project.name)}</h4>
          <a href="${project.url}" target="_blank"
            >Live Demo</a
          >
        </div>
        <a
          class="iphoneBtn"
          href="${project.url}"
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
