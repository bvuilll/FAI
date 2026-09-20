const navItems = document.querySelector(".nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");   
const closeNavBtn = document.querySelector("#close__nav-btn");   

const openNav = () => {
   navItems.style.display = "flex"; // يظهر القائمة (كانت مخفية بـ none)
  openNavBtn.style.display = "none";   // يخفي زر الفتح (أيقونة الهامبرغر ☰)
   closeNavBtn.style.display = "inline-block";  // يظهر زر الإغلاق (أيقونة X) مكانه
}

const closeNav = () => {
   navItems.style.display = "none";  // تقفل القائمة
  openNavBtn.style.display = "inline-block";  // ترجع أيقونة الهامبرغر
   closeNavBtn.style.display = "none";  // تخفي الـ X
}

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);



  /*navItems.style.display = "flex";*/
  
  document.addEventListener("click", (e) => {
    const clickedInsideNav = navItems.contains(e.target);
    const clickedOnBtn = openNavBtn.contains(e.target);
    const clickedOnCloseBtn = closeNavBtn.contains(e.target);

    if (!clickedInsideNav && !clickedOnBtn && !clickedOnCloseBtn &&  navItems.style.display === "flex") {
        closeNav();
    }
});
