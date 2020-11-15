import Address from "./icons/address";
import City from "./icons/city";
import Email from "./icons/email";
import Nif from "./icons/nif";
import Phone from "./icons/phone";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import Youtube from "./icons/youtube";
import Flickr from "./icons/flickr";
import Diploma from "./icons/diploma";
import LigaNacional from "./icons/ligaNacional";
import Liga from "./icons/liga";
import Copa from "./icons/copa";
import Info from "./icons/info";
import Danger from "./icons/danger";

function SvgIcon({name, color, bgColor, secondaryBgColor}) {
  return getSvgComponent(name)({color, bgColor, secondaryBgColor});
}

function getSvgComponent(name) {
  const components = {
    address: Address,
    city: City,
    email: Email,
    nif: Nif,
    phone: Phone,
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    flickr: Flickr,
    diploma: Diploma,
    ligaNacional: LigaNacional,
    liga: Liga,
    copa: Copa,
    info: Info,
    danger: Danger
  }
  return components[name] || Info;
}

export default SvgIcon;
