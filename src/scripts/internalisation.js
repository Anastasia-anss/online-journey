window.onload= documentReady;


function documentReady () {
    var rus = document.getElementById("russian_lang");
    var eng = document.getElementById("english_lang");
    var elements = document.querySelectorAll("[data-translate]" );
    
    
    function translateText( locale ){
    
        for(var i=0; i< elements.length ;i++){
            var localeKey = elements[i].dataset.translate;// читает значения атрибута data-translate
            elements[i].textContent = locale[localeKey];
        }
        
    }


    translateText(window.locale_en);
    eng.classList.add("selected-lang");

    rus.addEventListener("click" , function(){
        rus.classList.add("selected-lang");
        eng.classList.remove("selected-lang");
        translateText(window.locale_ru);

    });

    eng.addEventListener("click" , function(){
        eng.classList.add("selected-lang");
        rus.classList.remove("selected-lang");
        translateText(window.locale_en);
    });

    //var element = document.querySelector("[data-translate=\"home\"]" )
    //var translation = element.dataset.translate;
    //element.textContent = translation;

}
