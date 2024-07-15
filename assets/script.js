function AddEventListenerToCvButton() {
    const curriculumLink = "https://drive.google.com/file/d/19pqHEiFgfk3KVx_rZrWjyfyNAXi1a0jI/view?usp=sharing";
    const cvButton = document.getElementById("cv")
    cvButton.addEventListener("click", () => window.open(curriculumLink, '_blank'))
}

AddEventListenerToCvButton(); 

document.body.classList.add('transition-enabled');