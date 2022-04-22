// jQuery(document).ready(function (e) {
//     function t(t) {
//         e(t).bind("click", function (t) {
//             t.preventDefault();
//             e(this).parent().fadeOut()
//         })
//     }
//     e("#cardbtn").click(function () {
//         var t = e(this).parents(".kurs").children(".kurs_reg").is(":hidden");
//         e(".kurs .kurs_reg").hide();
//         e("#cardbtn").removeClass("jadval_active");
//         if (t) {
//             e(this).parents(".kurs").children(".kurs_reg").toggle().parents(".kurs").children("#cardbtn").addClass("jadval_active")
//         }
//     });
//     e(document).bind("click", function (t) {
//         var n = e(t.target);
//         if (!n.parents().hasClass("kurs")) e(".kurs .kurs_reg").hide();
//     });
//     e(document).bind("click", function (t) {
//         var n = e(t.target);
//         if (!n.parents().hasClass("kurs")) e("#cardbtn").removeClass("jadval_active");
//     })
// });

function drop_toggle(a) {
    // if (a==1) {
    //     document.querySelector("#modal_r").style.display = "none"
    // } else if (a==0)  {
    //     document.querySelector("#modal_r").style.display = "flex"
    // } else if (a==3)  {
    //     document.querySelector("#modal_h").style.display = "none"
    // } else if (a==4)  {
    //     document.querySelector("#modal_t").style.display = "none"
    //     document.querySelector("#modal_t_x").style.display = "none"
    // } else if (a==5)  {
    //     document.querySelector("#modal_t").style.display = "flex"
    //     document.querySelector("#modal_r").style.display = "none"
    // } else if (a==6)  {
    //     document.querySelector("#modal_t_x").style.display = "flex"
    //     document.querySelector("#modal_r").style.display = "none"
    // }

    switch (a) {
        case 0:
            document.querySelector("#modal_r").style.display = "flex";
            break;
        case 1:
            document.querySelector("#modal_r").style.display = "none";
            break;
        case 3:
            document.querySelector("#modal_h").style.display = "none";
            break;
        case 4:
            document.querySelector("#modal_t").style.display = "none";
            document.querySelector("#modal_t_x").style.display = "none";
            break;
        case 5:
            document.querySelector("#modal_t").style.display = "flex";
            document.querySelector("#modal_r").style.display = "none";
            break;
        case 6:
            document.querySelector("#modal_t_x").style.display = "flex";
            document.querySelector("#modal_r").style.display = "none";
            break;
        default:
            break;
      }
}

function menu(a) {
    // if (a==1) {
    //     document.querySelector(".yop").style.display = "none"
    //     document.querySelector(".och").style.display = "block"
    //     document.querySelector(".ul_menu").style.display = "flex"
    // } else if (a==0)  {
    //     document.querySelector(".och").style.display = "none"
    //     document.querySelector(".yop").style.display = "block"
    //     document.querySelector(".ul_menu").style.display = "none"
    // } 

    switch (a) {
        case 0:
            document.querySelector(".och").style.display = "none"
            document.querySelector(".yop").style.display = "block"
            document.querySelector(".ul_menu").style.display = "none"
            break;
        case 1:
            document.querySelector(".yop").style.display = "none"
            document.querySelector(".och").style.display = "block"
            document.querySelector(".ul_menu").style.display = "flex"
            break;
        default:
            break;
      }
}


let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    
    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    
    return null;
  }