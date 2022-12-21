class TextWithTranslations {
  constructor(title, content, instructions, thumbnail) {
    this.title = title;
    this.content = content;

    this.instructions = instructions;

    this.thumbnail = thumbnail;

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
  "Practice Spanish with Youtube #01",
  Video_Huevo_Gallina,
  "Once you finish watching the video, scroll down to find the transcript. If you click on the highlighted words, you can view their translations. Don't forget to take the quiz after reading the transcript.",
  "https://bocaditosespanol.com/wp-content/uploads/2022/12/DALL·E-2022-12-19-11.19.35.png"
);
