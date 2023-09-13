const projectList = [
  {
    title: "DoBeDragon",
    imgUrl: "/www-public/assets/images/dobedrag.jpg",
    preview: "dobedragon",
    code: "https://github.com/astrahalora/DoBeDragon",
    date: "2020-01-20",
    highlighted: true,
    specs: ["HTML", "CSS", "SCSS"],
  },
  {
    title: "Image Placeholder",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2022-06-20",
    highlighted: false,
    specs: ["Java", "Maven", "React", "CSS"],
  },
  {
    title: "Image Placeholder",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2022-06-22",
    highlighted: true,
    specs: ["JavaScript", "Angular"],
  },
  {
    title: "Image Placeholder",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2021-06-20",
    highlighted: false,
    specs: ["JavaScript", "Angular"],
  },
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
