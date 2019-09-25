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

function SvgIcon({name, color}) {
  return getSvgComponent(name)({color});
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
    flickr: Flickr
  }
  return components[name] || Address;
}

export default SvgIcon;
