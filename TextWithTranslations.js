class TextWithTranslations {
  constructor(content) {
    this.content = content;

    this.sections = content.text.sections;
    this.number_of_sections = content.number_of_sections;

    this.number_of_paragraphs = content.number_of_paragraphs;

    this.cognates = content.cognates;

    this.challenging_words = content.challenging_words;
  }

  separate_sentence_into_words(sentence) {
    return sentence.split(/([^\wáéíóúñü])/i);
  }
}

const Curiosamente_Video_Huevo_Gallina = new TextWithTranslations(
  Video_Huevo_Gallina
);
