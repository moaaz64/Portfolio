function scrollToElement(elementSelector, Instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > Instance){
    
        elements[Instance].scrollIntoView({ behavior: 'smooth' });
       
     }
    }

    let link0 = document.getElementById("link0");
    let link1 = document.getElementById("link1");
    let link2 = document.getElementById("link2");
    let link3 = document.getElementById("link3");

    link0.addEventListener('click', () =>{
        scrollToElement('.home');
    });

    link1.addEventListener('click', () =>{
        scrollToElement('.header');
    });

    link2.addEventListener('click', () =>{
        scrollToElement('.header',1);
    });

    link3.addEventListener('click', () =>{
        scrollToElement('.column');
    });