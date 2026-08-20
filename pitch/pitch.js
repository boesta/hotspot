const film = document.querySelector("#pitchfilm");
const nextStep = document.querySelector("#next-step");
const siteLink = document.querySelector("#site-link");
const afterFilm = document.querySelector("#after-film");

if (film && nextStep && siteLink && afterFilm) {
  film.addEventListener("ended", () => {
    nextStep.classList.add("is-ready");
    afterFilm.textContent = "De film is afgelopen — bekijk Hotspot nu in de praktijk.";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    nextStep.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
    siteLink.focus({ preventScroll: true });
  });
}
