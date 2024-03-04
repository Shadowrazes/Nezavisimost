class BurgerMenu {
    constructor(root) {
        this.root = root;
        if(!this.root) {
            throw "Element not found";
        }

        this.burgerButton = root;
        this.burgerMenu = document.querySelector('.header__burger-menu');

        this.init();
    }

    init() {
        this.modal = UIkit.modal(this.burgerMenu);
        this.burgerButton.addEventListener('click', (event) => {
            this.burgerButton.classList.toggle('header__burger-btn_active');
        });
    }
}

export default BurgerMenu;