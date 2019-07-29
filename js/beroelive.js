window.onload=function(){
    let help = document.getElementById("button-help");
    help.onclick = function() {
        let helptext = document.getElementById('open-pop');
        helptext.style.display="flex";
    }
    let close = document.getElementById('close-pop');
    close.onclick = function() {
        let closeHelp = document.getElementById('open-pop');
        closeHelp.style.display = "none";
    }
    let profileDrop = document.getElementById('nav-top-profile-arrow');
    profileDrop.onclick = function() {
        let clickDrop = document.getElementById('open-drop');
        if(clickDrop.style.display=="none") {
            clickDrop.style.display="flex" ;
        }
        else {
            clickDrop.style.display="none";
        }
    }
    let searchBar = document.getElementById('nav-top-search-icon');
        searchBar.onclick = function() {
        let clickSearch = document.getElementById('nav-top-search-box');
        clickSearch.classList.toggle("nav-top-search-box");
        }
    let sidenav = document.getElementById('toggle-button');
        sidenav.onclick= function() {
            let clickside = document.getElementById('side-nav');
            clickside.style.width= '250px';
            clickside.style.opacity='0.8';

            
        }
    let closeside = document.getElementById('close-side');
        closeside.onclick = function() {
            let clickside = document.getElementById('side-nav');
            clickside.style.width= '0px';
        }

        
     let butnhover = document.getElementsByClassName('section-left-container-tag-approve')[0];
         butnhover.onmouseover = function() {
             let butndisable = document.getElementsByClassName('section-left-container-tag-disapprove')[0].disabled=true;    
         }
         butnhover.onmouseout = function() {
             let butndisable = document.getElementsByClassName('section-left-container-tag-disapprove')[0].disabled=false;    
         }
    let butnhover1 = document.getElementsByClassName('section-left-container-tag-disapprove')[0];
         butnhover1.onmouseover = function() {
             let butndisable1 = document.getElementsByClassName('section-left-container-tag-approve')[0].disabled=true;    
         }
         butnhover1.onmouseout = function() {
             let butndisable1 = document.getElementsByClassName('section-left-container-tag-approve')[0].disabled=false;    
         }

    let butnhover2 = document.getElementsByClassName('section-left-container-tag-approve')[1];
         butnhover2.onmouseover = function() {
             let butndisable2 = document.getElementsByClassName('section-left-container-tag-disapprove')[1].disabled=true;    
         }
         butnhover2.onmouseout = function() {
             let butndisable2 = document.getElementsByClassName('section-left-container-tag-disapprove')[1].disabled=false;    
         }

     let butnhover3 = document.getElementsByClassName('section-left-container-tag-disapprove')[1];
         butnhover3.onmouseover = function() {
             let butndisable3 = document.getElementsByClassName('section-left-container-tag-approve')[1].disabled=true;    
         }
         butnhover3.onmouseout = function() {
             let butndisable3 = document.getElementsByClassName('section-left-container-tag-approve')[1].disabled=false;    
         }
    


    




}

// function hatao() {
    // document.getElementsByClassName('section-left-container-tag-disapprove')[0].style.visibility = "hidden";
// }



// document.querySelector('.toggle-menu').addEventListener("click", () =>  {
//         document.querySelector('.side-nav').style.display="block";
//         console.log("kk");
// }

// )