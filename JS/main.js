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
    if (a==1) {
        document.querySelector("#modal_r").style.display = "none"
    } else if (a==0)  {
        document.querySelector("#modal_r").style.display = "flex"
    } else if (a==3)  {
        document.querySelector("#modal_h").style.display = "none"
    } else if (a==4)  {
        document.querySelector("#modal_t").style.display = "none"
    }
}

function menu(a) {
    if (a==1) {
        document.querySelector(".yop").style.display = "none"
        document.querySelector(".och").style.display = "block"
        document.querySelector(".ul_menu").style.display = "flex"
    } else if (a==0)  {
        document.querySelector(".och").style.display = "none"
        document.querySelector(".yop").style.display = "block"
        document.querySelector(".ul_menu").style.display = "none"
    } 
}
