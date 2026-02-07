// 1. Welcome Message (Jab koi website khole)
window.onload = function() {
    console.log("Welcome to Adarsh Public School!");
};

// 2. Simple Image Slider Logic (Agar aap images rotate karna chahte hain)
let currentSlide = 0;
function showSlides() {
    const slides = document.querySelectorAll(".hero");
    // Yahan aap images change karne ka logic likh sakte hain
}

// 3. Mobile Menu Toggle (Chote phones ke liye menu button)
function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// 4. Admission Alert (Important Announcement)
function showAnnouncement() {
    alert("New Admissions are Open for Session 2026-27!");
}

// Is function ko aap kisi button par click karke chala sakte hain
// Example: <button onclick="showAnnouncement()">Check Admissions</button>
