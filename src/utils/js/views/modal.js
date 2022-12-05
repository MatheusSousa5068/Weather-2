

function openModal(modal) {
    const overlay = document.getElementById('overlay');
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    const overlay = document.getElementById('overlay');
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

export {openModal, closeModal};