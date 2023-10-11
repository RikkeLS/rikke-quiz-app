console.clear()

const darkModeButton = document.querySelector('[data-js="settings__dark-mode-section__box--button"]');

let Mode;
darkModeButton.addEventListener('click', (event)=> {
    if (Boolean(Mode)=== false){
        Mode = 0;
    }
    
    if (Mode == 0) {
        document.documentElement.style.setProperty('--color-std-text', 'white');
        document.documentElement.style.setProperty('--color-std-background','black');
        document.documentElement.style.setProperty('--color-header-background','purple');
        document.documentElement.style.setProperty('--color-footer-background','purple');
        document.documentElement.style.setProperty('--color-current-page','rgb(231, 171, 231)');
        Mode = 1;
    
    } else {
        document.documentElement.style.setProperty('--color-std-text', 'blue');
        document.documentElement.style.setProperty('--color-std-background','white');
        document.documentElement.style.setProperty('--color-header-background','green');
        document.documentElement.style.setProperty('--color-footer-background','green');
        document.documentElement.style.setProperty('--color-current-page','darkgreen');
        Mode = 0;
    }


})