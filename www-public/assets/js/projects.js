const projectList = [
  {
    title: "A La Tarantazza",
    imgUrl: "/www-public/assets/images/tarantazza.jpg",
    preview: "https://youtu.be/dqWILxE249U?si=s3JS__KXTkOrrF1I",
    code: "https://github.com/astrahalora/a-la-tarantazza",
    date: "2024-04-10",
    highlighted: true,
    specs: ["React", "Javascript", "CSS", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "Growthgenier",
    imgUrl: "/www-public/assets/images/growthgenier.jpg",
    preview: "https://youtu.be/nulTF8s-naw?si=v3pBKmlmKbsiXJDG",
    code: "https://github.com/astrahalora/Growthgenier",
    date: "2024-01-14",
    highlighted: true,
    specs: ["React", "Javascript", "Bootstrap", "SCSS", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "Planet Exploration",
    imgUrl: "/www-public/assets/images/exploration.webp",
    preview: "https://github.com/astrahalora/planet-exploration",
    code: "https://github.com/astrahalora/planet-exploration",
    date: "2024-06-16",
    highlighted: false,
    specs: ["React", "CSS", "SCSS", "Java", "Spring Boot", "Javascript", "Maven"],
  },
  {
    title: "Timekeeper",
    imgUrl: "/www-public/assets/images/timerk.jpg",
    preview: "timekeeper",
    code: "https://github.com/astrahalora/Timekeeper",
    date: "2024-01-25",
    highlighted: true,
    specs: ["HTML", "SCSS", "Javascript"],
  },
  {
    title: "Cinemagic",
    imgUrl: "/www-public/assets/images/cine.jpg",
    preview: "https://github.com/astrahalora/movie-store",
    code: "https://github.com/astrahalora/movie-store",
    date: "2023-11-24",
    highlighted: false,
    specs: ["React", "Javascript", "SCSS", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "DoBeDragon",
    imgUrl: "/www-public/assets/images/dobedrag.jpg",
    preview: "dobedragon",
    code: "https://github.com/astrahalora/DoBeDragon",
    date: "2020-01-20",
    highlighted: false,
    specs: ["HTML", "CSS", "SCSS"],
  },
  {
    title: "StressRelief XO",
    imgUrl: "/www-public/assets/images/stress_relief.png",
    preview: "stress_relief",
    code: "https://github.com/astrahalora/StressRelief-XO",
    date: "2023-10-7",
    highlighted: false,
    specs: ["HTML", "CSS", "SCSS", "Bootstrap"],
  }
];

const projectsElement = document.querySelector(".projects");
const highlightedBtn = document.querySelector("#highlighted");
const selectElement = document.querySelector("select");
let projectsToDisplay = [];

const populateProjects = (list) => {
  list.forEach((project) => {
    projectsElement.insertAdjacentHTML(
      "beforeend",
      `<figure>
        <img src="${project.imgUrl}" class="project-img" alt="${project.title}">
        <figcaption>
          <h3>${project.title}</h3>
          <div class="deco">
            <p>${project.specs.join(", ")}</p>
            <a href="${project.preview}" target="_blank">Preview</a>
            <a href="${project.code}" target="_blank">Code</a>
          </div>
        </figcaption>
      </figure>`
    );
  });
};

function changeImgSrcOnHover() {
  const figures = Array.from(document.querySelectorAll("figure"));
  const images = Array.from(document.querySelectorAll(".project-img"));
  const projectTitles = figures.map((figure) =>
    figure.querySelector("h3").innerText
  );

  figures.forEach((figure, i) => {
    figure.addEventListener("mouseover", () => {
      images[i].src = "/www-public/assets/images/placeholder2.jpg";
    });

    figure.addEventListener("mouseout", () => {
      const projectTitle = projectTitles[i];
      const project = projectList.find((p) => p.title === projectTitle);
      if (project) {
        images[i].src = project.imgUrl;
      }
    });
  });
};

const getSpecList = (list) => {
  const allSpecs = [];
  list.forEach((project) => {
    project.specs.forEach((spec) => {
      allSpecs.push(spec);
    });
  });
  return new Set([...allSpecs]);
};

const addAllSpecsToSelect = () => {
  const allSpecs = getSpecList(projectList);
  allSpecs.forEach((spec) => {
    selectElement.insertAdjacentHTML(
      "beforeend",
      `<option>${spec}</option>`
    );
  });
};

populateProjects(projectList);
addAllSpecsToSelect();

const removeAllChildren = () => {
  while (projectsElement.firstChild) {
    projectsElement.removeChild(projectsElement.firstChild);
  }
};

const filterHighlightedProjects = () => {
  projectsToDisplay = projectList.filter(
    (project) => project.highlighted === true
  );
};

highlightedBtn.addEventListener("click", function () {
  removeAllChildren();
  filterHighlightedProjects();
  populateProjects(projectsToDisplay);
  changeImgSrcOnHover();
  selectElement.value = "--Any Language/Other--";
});

selectElement.addEventListener("change", function () {
  removeAllChildren();
  const selectedOption = selectElement.value;
  if (selectedOption === "--Any Language/Other--") {
    populateProjects(projectList);
  } else {
    projectsToDisplay = projectList.filter((project) =>
      project.specs.includes(selectedOption)
    );
    populateProjects(projectsToDisplay);
  }
  changeImgSrcOnHover();
});

changeImgSrcOnHover();
