class Creator {
  constructor(
    name,
    country,
    facebook,
    instagram,
    patreon,
    twitter,
    youtube,
    website
  ) {
    (this.name = name),
      (this.spanish_accent = country),
      (this.socialmedia = {
        facebook,
        instagram,
        patreon,
        twitter,
        youtube,
        website,
      });
  }
}

const Creator_Curiosamente = new Creator(
  "Curiosamente",
  "México",
  "https://www.facebook.com/CuriosaMenteTV/",
  "https://www.instagram.com/curiosamente/?hl=en",
  "https://www.patreon.com/curiosamente",
  "https://twitter.com/curiosamente",
  "https://www.youtube.com/@curiosamente",
  "https://www.curiosamente.com/"
);
