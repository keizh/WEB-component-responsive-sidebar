const menuIcon = document.querySelector(`.menu-icon `);
menuIcon.addEventListener("click", function () {
  const sidebar = document.querySelector(`.sidebar`);
  const sidebarContentHeaders = document.querySelectorAll(
    `.sidebar-content-header`
  );
  const sidebarProfileImg = document.querySelector(`.sidebar-profile-img`);
  const sidebarLinks = document.querySelectorAll(`.sidebar-link`);

  sidebar.classList.toggle("active");

  sidebarContentHeaders.forEach((sidebarContentHeader) => {
    sidebarContentHeader.classList.toggle("active");
  });
  sidebarContentHeader.classList.toggle("active");

  sidebarProfileImg.classList.toggle("active");
  sidebarProfileImg.classList.toggle("active");
  sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.classList.toggle("active");
  });
});
