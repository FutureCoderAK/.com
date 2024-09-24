window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault(); // منع تصرف الرابط الافتراضي
    const dropdown = this.parentElement; // الحصول على العنصر الأب
    dropdown.classList.toggle('active'); // إضافة أو إزالة الكلاس "active"

    // إخفاء القائمة عند الضغط في أي مكان آخر
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active'); // إزالة الكلاس "active" عند الخروج
        }
    });
});
