// JavaScript to add some additional interactivity (Optional)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'perspective(300px) rotateY(15deg)';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'perspective(300px) rotateY(0deg)';
    });
  });
});
