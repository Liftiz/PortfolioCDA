/* JavaScript pour Portfolio - Animations dynamiques */

document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills .skills-grid");

    function revealSkills() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            skillsSection.classList.add("visible");
        }
    }
    
    window.addEventListener("scroll", revealSkills);
    revealSkills();

    // Effet interactif au survol
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.1) rotate(2deg)";
            skill.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        });
        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
            skill.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupVideo = document.getElementById("popup-video");
    const popupDescription = document.getElementById("popup-description");
    const closePopup = document.getElementById("closePopup");

    projects.forEach(project => {
        project.addEventListener("click", (event) => {
            event.preventDefault();
            
            const videoSrc = project.getAttribute("data-video");
            const title = project.getAttribute("data-title");
            const description = project.getAttribute("data-description");

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popupVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
            popupVideo.load();

            popup.style.display = "block";
            overlay.style.display = "block";
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
        popupVideo.pause();
    });

    overlay.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
        popupVideo.pause();
    });
});
