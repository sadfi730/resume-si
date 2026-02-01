
  window.addEventListener("load", () => {
    const title = document.querySelector("header.hero h1");
    const job = document.querySelector(".job");
    title.classList.add("active");
    job.classList.add("active");
  });

 // فعال کردن انیمیشن برای بخش درباره من
    document.addEventListener('DOMContentLoaded', function() {
      const aboutSection = document.querySelector('#about');
      aboutSection.classList.add('animate');  // اضافه کردن کلاس animate بعد از لود صفحه
    });

    // فقط یکبار اجرا بشه
   document.addEventListener('DOMContentLoaded', function() {
  const skillFills = document.querySelectorAll('.skill-fill'); // پیدا کردن همه نوارها

  skillFills.forEach(skill => {
    const percent = skill.getAttribute('data-percent'); // گرفتن درصد از data-percent
    skill.style.width = percent + '%';  // تنظیم عرض نوار به درصد داده‌شده
    skill.style.opacity = 1;  // نمایش نوار
  });
});
