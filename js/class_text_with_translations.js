class TextWithTranslations {
  constructor({ title, content, instructions, thumbnail }) {
    this.title = title;
    this.content = content;
    this.instructions = instructions;
    this.thumbnail = thumbnail;

    this.sections = content.text.sections;
    this.number_of_sections = content.number_of_sections;
    this.number_of_paragraphs = content.number_of_paragraphs;
    this.cognates = content.cognates;
    this.challenging_words = content.challenging_words;
    this.false_cognates = content.false_cognates;
    this.subjunctives = content.subjunctives;
  }

  separate_sentence_into_words(sentence) {
    return sentence.split(/([^\wáéíóúñü])/i);
  }
}
