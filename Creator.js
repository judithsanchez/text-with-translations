class Creator {
  constructor(
    name,
    country,
    facebook,
    instagram,
    patreon,
    tiktok,
    twitter,
    youtube,
    website,
    logo,
    disclaimer
  ) {
    (this.name = name),
      (this.spanish_accent = country),
      (this.socialmedia = {
        facebook,
        instagram,
        patreon,
        tiktok,
        twitter,
        youtube,
        website,
      }),
      (this.logo = logo),
      (this.disclaimer = disclaimer);
  }
}

const Creator_Curiosamente = new Creator(
  "Curiosamente",
  "México",
  "https://www.facebook.com/CuriosaMenteTV/",
  "https://www.instagram.com/curiosamente/?hl=en",
  "https://www.patreon.com/curiosamente",
  "https://www.tiktok.com/@curiosamente_oficial?lang=es",
  "https://twitter.com/curiosamente",
  "https://www.youtube.com/@curiosamente",
  "https://www.curiosamente.com/",
  "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_curiosamente.svg",
  "We would like to express our gratitude to Curiosamente for kindly allowing us to utilize their content to practice Spanish. Please show your appreciation by liking their video and subscribing to their channel for more excellent content."
);
