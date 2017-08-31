
function hovering(element1, element2, element3){
    element1 = document.getElementById(element1);
    element2 = document.getElementById(element2);
    element3 = document.getElementById(element3);


    element1.addEventListener('mouseover', function(){
        var sclick = false;
        var sbox = document.getElementById('sbox2');
        element1.addEventListener('mousedown', function () {
            element1.classList.remove('hovered');
            element1.classList.add('hoverclickon');
        element1.addEventListener('mouseup', function () {
            element1.classList.remove('hoverclickon');
            element1.classList.add('hovered');
                if (sclick === false){
                    sbox.classList.remove('shadowboxclickoff');
                    sbox.classList.add('shadowboxclickon');
                    sclick = true;
                }
                else if(sclick === true){
                    sbox.classList.remove('shadowboxclickon');
                    sbox.classList.add('shadowboxclickoff');
                    sclick = false;
                }
            })
        });
        element1.classList.remove('nothovered', 'hoverreturn');
        element1.classList.add('hovered');
        element2.classList.remove('hovered', 'hoverreturn');
        element2.classList.add('nothovered');
        element3.classList.remove('hovered', 'hoverreturn');
        element3.classList.add('nothovered')
    });

    element2.addEventListener('mouseover', function(){
        var sclick = false;
        element2.addEventListener('mousedown', function () {
            element2.classList.remove('hovered');
            element2.classList.add('hoverclickon');
            var sbox = document.getElementById('sbox3');

            element2.addEventListener('mouseup', function () {
                element2.classList.remove('hoverclickon');
                element2.classList.add('hovered');
                if (sclick === false){
                    sbox.classList.remove('shadowboxclickoff');
                    sbox.classList.add('shadowboxclickon');
                    sclick = true;
                }
                else if(sclick === true){
                    sbox.classList.remove('shadowboxclickon');
                    sbox.classList.add('shadowboxclickoff');
                    sclick = false;
                }
            })
        });
        element1.classList.remove('hovered', 'hoverreturn');
        element1.classList.add('nothovered');
        element2.classList.remove('nothovered', 'hoverreturn');
        element2.classList.add('hovered');
        element3.classList.remove('hovered', 'hoverreturn');
        element3.classList.add('nothovered')
    });

    element3.addEventListener('mouseover', function(){
        var sclick = false;
        var sbox = document.getElementById('sbox1');
        element3.addEventListener('mousedown', function () {
            element3.classList.remove('hovered');
            element3.classList.add('hoverclickon');
            element3.addEventListener('mouseup', function () {
                element3.classList.remove('hoverclickon');
                element3.classList.add('hovered');
                if (sclick === false){
                    sbox.classList.remove('shadowboxclickoff');
                    sbox.classList.add('shadowboxclickon');
                    sclick = true;
                }
                else if(sclick === true){
                    sbox.classList.remove('shadowboxclickon');
                    sbox.classList.add('shadowboxclickoff');
                    sclick = false;
                }
            })
        });
        element1.classList.remove('hovered', 'hoverreturn');
        element1.classList.add('nothovered');
        element2.classList.remove('hovered', 'hoverreturn');
        element2.classList.add('nothovered');
        element3.classList.remove('nothovered', 'hoverreturn');
        element3.classList.add('hovered')
    });
}

function unhovering(element1, element2, element3) {
    element1 = document.getElementById(element1);
    element2 = document.getElementById(element2);
    element3 = document.getElementById(element3);
    if(window.screen.width > 425){
        element1.addEventListener('mouseout', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }
    else{
        element1.addEventListener('webkitTransitionEnd', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }

    if(window.screen.width > 425){
        element2.addEventListener('mouseout', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }
    else{
        element2.addEventListener('webkitTransitionEnd', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }


    if(window.screen.width > 425){
        element3.addEventListener('mouseout', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }
    else{
        element3.addEventListener('webkitTransitionEnd', function () {
            element1.classList.remove('hovered', 'nothovered');
            element1.classList.add('hoverreturn');
            element2.classList.remove('hovered', 'nothovered');
            element2.classList.add('hoverreturn');
            element3.classList.remove('hovered', 'nothovered');
            element3.classList.add('hoverreturn');
        })
    }

}

function navhovering(element1, element2, element3, element4){
    element1 = document.getElementById(element1);
    element2 = document.getElementById(element2);
    element3 = document.getElementById(element3);
    element4 = document.getElementById(element4);



    element1.addEventListener('mouseover', function (){
        element1.classList.remove(element1.classList.item(2));
        element1.classList.add('navhover');
        
        if(window.screen.width > 425) {
            element1.addEventListener('mouseout', function () {
                element1.classList.remove(element1.classList.item(2));
                element1.classList.add('navreturn');
            })
        }
        else{
            element1.addEventListener('webkitTransitionEnd', function () {
                element1.classList.remove(element1.classList.item(2));
                element1.classList.add('navreturn');
            })
        }
    });

    element2.addEventListener('mouseover', function (){
        element2.classList.remove(element2.classList.item(2));
        element2.classList.add('navhover');

        if(window.screen.width > 425) {
            element2.addEventListener('mouseout', function () {
                element2.classList.remove(element2.classList.item(2));
                element2.classList.add('navreturn');
            })
        }
        else{
            element2.addEventListener('webkitTransitionEnd', function () {
                element2.classList.remove(element2.classList.item(2));
                element2.classList.add('navreturn');
            })
        }
    });

    element3.addEventListener('mouseover', function (){
        element3.classList.remove(element3.classList.item(2));
        element3.classList.add('navhover');

        if(window.screen.width > 425) {
            element3.addEventListener('mouseout', function () {
                element3.classList.remove(element3.classList.item(2));
                element3.classList.add('navreturn');
            })
        }
        else{
            element3.addEventListener('webkitTransitionEnd', function () {
                element3.classList.remove(element3.classList.item(2));
                element3.classList.add('navreturn');
            })
        }
    });

    element4.addEventListener('mouseover', function (){
        element4.classList.remove(element4.classList.item(2));
        element4.classList.add('navhover');

        if(window.screen.width > 425) {
            element4.addEventListener('mouseout', function () {
                element4.classList.remove(element4.classList.item(2));
                element4.classList.add('navreturn');
            })
        }
        else{
            element4.addEventListener('webkitTransitionEnd', function () {
                element4.classList.remove(element4.classList.item(2));
                element4.classList.add('navreturn');
            })
        }
    });

}

function mobilefixes(){
    var title = document.getElementById('header');
    var info = document.querySelectorAll('.textboxinfo');
    var box = document.querySelector('textarea');
    var hint = document.querySelector('#hint');

    if(window.screen.width < 425){
        title.style.paddingTop = "70px";
        box.cols = "35";
        info.forEach(function (info) {
            info.style.width = "200px"
        });
        hint.innerHTML = "<sup>*</sup>Tap images for more info";
    }
}

function reveal(element, scrollheight, event){
    element = document.getElementById(element);

    if(event === 'load') {
        setTimeout(function(){
            element.classList.remove('hidden');
            element.classList.add('reveal');
        }, 100)
    }
    else if(event === 'scroll'){
        document.addEventListener( event, function() {
            if (window.scrollY >= scrollheight){
                element.classList.remove('hidden');
                element.classList.add('reveal');
            }
        })
    }
}




/////////////////////////////////////////////////////////////////////////

hovering('dev', 'rockstar', 'student');
unhovering('dev', 'rockstar', 'student');
navhovering('home','about','projects','contact');
mobilefixes();
reveal('hello', 200, 'scroll');
reveal('hint', 500, 'scroll');
reveal('student', 600, 'scroll');
reveal('dev', 600, 'scroll');
reveal('rockstar', 600, 'scroll');
reveal('tagline', 0, 'load');