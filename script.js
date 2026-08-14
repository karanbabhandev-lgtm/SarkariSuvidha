/* =========================================================
   SARKARI SUVIDHA
   MAIN JAVASCRIPT
   ========================================================= */


/* ================= IMAGE SLIDER ================= */

let slideIndex = 0;

function showSlides() {

    let slides =
        document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    slideIndex++;

    if (slideIndex > slides.length) {

        slideIndex = 1;

    }

    if (slides.length > 0) {

        slides[slideIndex - 1].style.display = "block";

    }

    setTimeout(showSlides, 3500);
}

showSlides();


/* ================= SEARCH ================= */

const searchBox =
    document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener(
        "input",
        function () {

            let searchValue =
                this.value.toLowerCase().trim();

            let cards =
                document.querySelectorAll(".card");

            cards.forEach(function (card) {

                let text =
                    card.innerText.toLowerCase();

                if (
                    searchValue === "" ||
                    text.includes(searchValue)
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}


/* ================= SCROLL ANIMATION ================= */

let scrollTimer;

window.addEventListener(
    "scroll",
    function () {

        /*
           User scroll कर रहा है
           इसलिए animations pause
        */

        document.body.classList.add(
            "is-scrolling"
        );


        clearTimeout(scrollTimer);


        /*
           Scroll रुकने के 900ms बाद
           animation फिर शुरू
        */

        scrollTimer = setTimeout(
            function () {

                document.body.classList.remove(
                    "is-scrolling"
                );

            },
            900
        );

    },
    {
        passive: true
    }
);


/* ================= BACK TO TOP ================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }
);


if (topBtn) {

    topBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
