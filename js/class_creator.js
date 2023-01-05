class Creator {
  constructor({
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
    disclaimer,
  }) {
    this.name = name;
    this.spanish_accent = country;
    this.socialmedia = {
      facebook,
      instagram,
      patreon,
      tiktok,
      twitter,
      youtube,
      website,
    };
    this.logo = logo;
    this.disclaimer = disclaimer;
  }
}
