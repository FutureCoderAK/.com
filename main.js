var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);
///////////////////////
// فتح المودال
function openModal() {
    const modal = document.getElementById("profileModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = document.querySelector(".profile-pic").src; // تعيين صورة المودال
}

// غلق المودال
function closeModal() {
    document.getElementById("profileModal").style.display = "none";
}

// غلق المودال عند الضغط على الخلفية
document.getElementById("profileModal").addEventListener("click", function (event) {
    if (event.target === this) { // التحقق من أن المستخدم ضغط على الخلفية
        closeModal();
    }
});
////////////////////////////////////////
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    // إظهار أو إخفاء المحتوى
    content.classList.toggle('open');

    // تدوير الأيقونة
    icon.classList.toggle('rotate');
}
/////////////////////////////////////
