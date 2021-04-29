import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Sans fin sont les moisissures", "Des bières bretonnes"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText }
