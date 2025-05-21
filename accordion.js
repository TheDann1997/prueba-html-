// Acordeón funcionalidad
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const parent = this.parentElement;
    // Toggle open class
    parent.classList.toggle('open');
    // Si solo quieres un acordeón abierto a la vez, descomenta esto:
    // document.querySelectorAll('.accordion').forEach(acc => {
    //   if (acc !== parent) acc.classList.remove('open');
    // });
  });
});