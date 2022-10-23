const accordion = document.getElementsByClassName('content-container');
// array se všemi DIV objekty třídy content-container
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function() {
        this.classList.toggle('active');
    });
        // Danému elementu přidá class 'active' (pokud ji element nemá), pokud ji element má - elementu tuto class odstraní 
}