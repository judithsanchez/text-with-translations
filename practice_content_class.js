class ActivityContent {
  constructor(
    creator,
    title,
    type,
    url,
    youtube_embed_url,
    text,
    cognates,
    challenging_words,
    false_cognates,
    subjunctives
  ) {
    this.creator = creator;
    this.title = title;
    this.type = type;
    this.url = url;
    this.youtube_embed_url = youtube_embed_url;

    this.text = {
      sections: text,
    };

    this.number_of_sections = text.length;
    this.number_of_paragraphs = this.get_number_of_paragraphs(this.text);

    this.cognates = cognates;
    this.number_of_cognates = cognates.length;

    this.challenging_words = challenging_words;
    this.number_of_challenging_words = challenging_words.length;

    this.false_cognates = false_cognates;
    this.number_of_false_cognates = false_cognates.length;

    this.subjunctives = subjunctives;
    this.number_of_subjunctives = subjunctives.length;
  }

  get_number_of_paragraphs(objects_array) {
    let number_of_paragraphs = 0;
    for (let i = 0; i < objects_array.sections.length; i++) {
      number_of_paragraphs =
        number_of_paragraphs + objects_array.sections[i].paragraphs.length;
    }
    return number_of_paragraphs;
  }
}

