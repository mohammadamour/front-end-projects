function hamburgerToggle(x) {
    x.classList.toggle("change");

    document.body.classList.toggle("overflow-hidden");

    let sidebar = document.querySelector(".navbar .main-menu");
    sidebar.classList.toggle("show");
}