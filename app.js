console.log("Connected...");

const cookieNotice = document.querySelector("#cookie-notice");
const acceptBtn = document.querySelector("#cookie-accept");
const denyBtn = document.querySelector("#cookie-deny");

let cookie;
const cookiesAccepted = document.cookie.includes("CookiesAccepted");
if (!cookiesAccepted) {
  cookieNotice.style.display = "flex";
} else {
  cookieNotice.style.display = "none";
}

const cookieAccept = () => {
  console.log("Cookie Accepted");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
  console.log(cookie);
};
const cookieDeny = () => {
  console.log("Cookie Denied");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
  console.log(cookie);
};

acceptBtn.addEventListener("click", cookieAccept);
denyBtn.addEventListener("click", cookieDeny);
