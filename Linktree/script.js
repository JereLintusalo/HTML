function openModal() {
    document.getElementById("cvModal").style.display = "block";
}
function closeModal() {
    document.getElementById("cvModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("cvModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}