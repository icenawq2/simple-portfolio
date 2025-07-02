// main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio script loaded!');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactive JavaScript here later
    // For example, a simple alert when a project button is clicked
    document.querySelectorAll('.project-card .button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectName = this.parentElement.querySelector('h3').innerText;
            alert(`คุณคลิกดูโปรเจกต์: ${projectName}\n(ฟังก์ชันนี้ยังอยู่ระหว่างการพัฒนา!)`);
        });
    });
});
