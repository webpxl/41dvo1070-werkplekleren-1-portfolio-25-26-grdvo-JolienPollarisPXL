const work = [
    {
    function: "Medewerker schoenenwinkel (jobstudent)",
    imgPath:  "Pronti.jpg",
    location: "Pronti (Tielt-Winge)",
    date: "6/08/2023 - heden",
    },
    {
        function: "Redactie Bedrijvig Limburg & dienst communicatie (stage)",
        imgPath:  "Voka.jpg",
        location: "Voka - KvK Limburg (Hasselt)",
        date: "17/02/2025 - 23/05/2025",
    },
    {
        function: "Dienst communicatie (stage)",
        imgPath:  "Kortenaken.jpeg",
        location: "Gemeentehuis Kortenaken",
        date: "06/08/2024 - 24/05/2024",
    },
    {
        function: "Deur-aan-deur verkoper (jobstudent)",
        imgPath:  "Activate.png",
        location: "Activate (Hasselt)",
        date: "07/07/2022 - 20/07/2022",
    },
    {
        function: "Kuishulp (jobstudent)",
        imgPath:  "Amber Ijs.jpg",
        location: "Amber Ijs (Tielt-Winge)",
        date: "20/04/2021 - 17/07/2022",
    },
    {
        function: "Cold Caller (stage)",
        imgPath:  "Dmotion.jpg",
        location: "D-motion (Hasselt)",
        date: "27/04/2021 - 8/05/2021",
    },

];

document.addEventListener('DOMContentLoaded', () => {
    const experienceContainer = document.getElementsByClassName("work")[0];


    function renderExperienceCard(workExperience) {
        const experienceCard = document.createElement("div");
        experienceCard.classList.add("experience-card");

        const functionWork = document.createElement("h3");
        functionWork.classList.add("experience-function");
        functionWork.innerText = workExperience["function"];
        experienceCard.appendChild(functionWork);

        const imgWork = document.createElement("img");
        imgWork.src = "assets/" + workExperience.imgPath;
        imgWork.alt = workExperience.location;
        experienceCard.appendChild(imgWork);

        const footer = document.createElement("div");
        footer.classList.add("card-footer");

        const locationWork = document.createElement("p");
        locationWork.classList.add("experience-location");
        locationWork.innerText = workExperience.location || '';
        footer.appendChild(locationWork);

        const dateWork = document.createElement("p");
        dateWork.classList.add("experience-date");
        dateWork.innerText = workExperience.date || '';
        footer.appendChild(dateWork);

        experienceCard.appendChild(footer);

        experienceContainer.appendChild(experienceCard);
    }

    work.forEach(renderExperienceCard);
});
