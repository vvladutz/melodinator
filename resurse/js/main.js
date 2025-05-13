window.addEventListener("DOMContentLoaded", () => {
    const original = document.getElementById("text");
    const reflectat = document.getElementById("text-reflectat");

    reflectat.textContent = original.textContent;
})

document.getElementById("text").addEventListener("mouseenter", () => {
    document.getElementById("text").style.color = "#F5C04C";
    document.getElementById("text-reflectat").style.color = "#F5C04C";
});

document.getElementById("text").addEventListener("mouseleave", () => {
    document.getElementById("text").style.color = "";
    document.getElementById("text-reflectat").style.color = "";
});

document.getElementById("text-reflectat").addEventListener("mouseenter", () => {
    document.getElementById("text").style.color = "#F5C04C";
    document.getElementById("text-reflectat").style.color = "#F5C04C";
});

document.getElementById("text-reflectat").addEventListener("mouseleave", () => {
    document.getElementById("text").style.color = "";
    document.getElementById("text-reflectat").style.color = "";
});
