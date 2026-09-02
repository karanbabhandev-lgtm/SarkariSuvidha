/* =========================================================
   SARKARI SUVIDHA - SCRIPT
   ========================================================= */


/* ================= IMAGE SLIDER ================= */

let slideIndex = 0;

function showSlides() {

    const slides =
        document.getElementsByClassName("slides");

    if (slides.length === 0) {
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

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

            const searchValue =
                this.value.toLowerCase().trim();

            const cards =
                document.querySelectorAll(".card");

            cards.forEach(function (card) {

                const text =
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


/* =========================================================
   SCROLL ANIMATION CONTROL
   ========================================================= */

let scrollTimer;

window.addEventListener(
    "scroll",
    function () {

        /* Scroll करते ही animation रोकें */

        document.body.classList.add(
            "is-scrolling"
        );


        /* पुराना timer हटाएं */

        clearTimeout(scrollTimer);


        /*
           Scroll रुकने के 900ms बाद
           animation फिर शुरू होगी
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


/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                topBtn.style.display = "block";

            } else {

                topBtn.style.display = "none";

            }

        },
        {
            passive: true
        }
    );


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


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


