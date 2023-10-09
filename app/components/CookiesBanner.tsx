import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

/**
 * @todo Add Cookie Banner
 * @description This component is used to display a cookie banner
 * @function CookieBanner
 * @param {void} void
 * @set {void} void The state of the cookie banner
 * @example accept cookies
 * @returns Cookie Banner
 */
const CookieBanner = () => {
  const handleAccept = () => {
    Cookies.set("Cookies", "accepted", { expires: 365 });
    console.log("cookies accepted");
  };
  return (
    <CookieConsent
      onAccept={handleAccept}
      location="bottom"
      buttonText="Accept"
      cookieName="Cookies"
    >
      This Website uses cookies to enhance user experience
    </CookieConsent>
  );
};

export default CookieBanner;
