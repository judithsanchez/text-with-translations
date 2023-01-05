class Vocabulary_Quiz {
  constructor({ vocabulary_set, quiz_mode }) {
    this.quiz_title = "Vocabulary";

    this.vocabulary_set = this.shuffle_array(vocabulary_set);

    this.mode = quiz_mode;

    this.word_and_translation;

    this.first_letter;
    this.word;
    this.last_letter;
    this.translation;

    this.correct_answers = 0;
    this.incorrect_answers = 0;
    this.status = "in progress";

    this.quiz_vocabulary_instructions = [
      "Hey there! Ready to practice your language skills? Great! Here's what you need to do:",
      "Pick which type of practice you want. (Psst...Spanish to English is a little easier, just saying!)",
      "Get ready for 10 random questions in the quiz.",
      "Decide how many lists of words you want to work with.",
      "On the game, the pink circle shows the first letter of the answer and the green circle shows the last letter.",
      "And that's it! Have fun and happy learning!",
    ];
  }

  shuffle_array(array) {
    let shuffledArray = [];
    while (array.length > 0) {
      let randomIndex = Math.floor(Math.random() * array.length);
      shuffledArray.push(array.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  }

  get_question() {
    this.word_and_translation = this.vocabulary_set.shift();

    if (this.mode === "spa-eng") {
      this.first_letter = `${this.word_and_translation.english[0].toUpperCase()}...`;
      this.word = this.word_and_translation.spanish;
      this.last_letter = `...${
        this.word_and_translation.english[
          this.word_and_translation.english.length - 1
        ]
      }`;
      this.translation = this.word_and_translation.english;
    }

    if (this.mode === "eng-spa") {
      this.first_letter = `${this.word_and_translation.spanish[0].toUpperCase()}...`;
      this.word = this.word_and_translation.english;
      this.last_letter = `...${
        this.word_and_translation.spanish[
          this.word_and_translation.spanish.length - 1
        ]
      }`;
      this.translation = this.word_and_translation.spanish;
    }
  }

  check_answer(answer) {
    const given_answer = this.remove_accents(answer).trim().toLowerCase();
    const plain_translation = this.remove_accents(this.translation)
      .trim()
      .toLowerCase();

    if (this.correct_answers === 10) {
      return;
    }

    if (given_answer === plain_translation) {
      this.correct_answers++;

      if (this.vocabulary_set.length === 0) {
        this.status = "finished";
        return;
      }
      return "correct";
    } else {
      this.vocabulary_set.push(this.word_and_translation);
      this.incorrect_answers++;
      return "incorrect";
    }
  }

  remove_accents(word) {
    const word_separated = word.split("");
    const vocales = ["a", "e", "i", "o", "u"];
    const vocales_acentuadas = ["á", "é", "í", "ó", "ú"];
    for (let i = 0; i < word_separated.length; i++) {
      for (let j = 0; j < vocales.length; j++) {
        if (word_separated[i] === vocales_acentuadas[j]) {
          word_separated[i] = vocales[j];
        }
      }
    }
    return word_separated.join("");
  }
}
