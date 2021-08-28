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
  {
    number: 6,
    name: "scroll-animation",
    imgLink: "public/images/projectImages/6-scroll-animation.png",
    url: "projects/scroll-animation/index.html",
  },
  {
    number: 7,
    name: "split-landing-page",
    imgLink: "public/images/projectImages/7-split-landing-page.png",
    url: "projects/split-landing-page/index.html",
  },
  {
    number: 8,
    name: "form-wave",
    imgLink: "public/images/projectImages/8-form-wave.png",
    url: "projects/form-wave/index.html",
  },
  {
    number: 9,
    name: "sound-board",
    imgLink: "public/images/projectImages/9-sound-board.png",
    url: "projects/sound-board/index.html",
  },
  {
    number: 10,
    name: "dad-jokes",
    imgLink: "public/images/projectImages/10-dad-jokes.png",
    url: "projects/dad-jokes/index.html",
  },
  {
    number: 11,
    name: "event-keycodes",
    imgLink: "public/images/projectImages/11-event-keycodes.png",
    url: "projects/event-keycodes/index.html",
  },
  {
    number: 12,
    name: "常见问题",
    imgLink: "public/images/projectImages/12-faq-collapse.png",
    url: "projects/FAQ-collapse/index.html",
  },
  {
    number: 13,
    name: "随机选择",
    imgLink: "public/images/projectImages/13-random-choice-picker.png",
    url: "projects/random-choice-picker/index.html",
  },
  {
    number: 14,
    name: "动态导航条",
    imgLink: "public/images/projectImages/14-animated-navigation.png",
    url: "projects/animated-navigation/index.html",
  },
  {
    number: 15,
    name: "增量计数",
    imgLink: "public/images/projectImages/15-incrementing-counter.png",
    url: "projects/incrementing-counter/index.html",
  },
  {
    number: 16,
    name: "喝水",
    imgLink: "public/images/projectImages/16-drink-water.png",
    url: "projects/drink-water/index.html",
  },
  {
    number: 17,
    name: "背景轮播图",
    imgLink: "public/images/projectImages/18-background-slider.png",
    url: "projects/background-slider/index.html",
  },
  {
    number: 18,
    name: "时钟",
    imgLink: "public/images/projectImages/19-theme-clock.png",
    url: "projects/theme-clock/index.html",
  },
  {
    number: 19,
    name: "点击水纹",
    imgLink: "public/images/projectImages/20-button-ripple-effect.png",
    url: "projects/button-ripple-effect/index.html",
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
