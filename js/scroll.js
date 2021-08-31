document.addEventListener("DOMContentLoaded", ()=> {
  const buttons = document.querySelectorAll('[data-scroll]');

  buttons.forEach((el)=> {
    el.addEventListener('click', ()=> {
      const formLink = el.getAttribute('data-scroll');

      const formID = document.querySelector(`.${formLink}`).offsetTop;
        window.scrollTo({
          top: formID - 150,
          behavior: 'smooth'
        });
  
      setTimeout(() => {
      }, 600);
    });
  });
});
