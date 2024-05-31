// JavaScript per NAVIGATION BAR (Section 1)

// Menu a Tendina
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.menu-a-tendina');
    const dropdownContent = document.querySelector('.contenuto-menu-a-tendina');
  
    function openDropdown() {
        dropdownContent.style.display = 'block';
    }
  
    function closeDropdown() {
        dropdownContent.style.display = 'none';
    }
  
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation(); 
        openDropdown();
    });
  
    document.addEventListener('click', function (event) {
        const isClickedInsideDropdown = dropdown.contains(event.target);
        if (!isClickedInsideDropdown) {
            closeDropdown();
        }
    });
});