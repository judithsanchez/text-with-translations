class Vocabulary_Quiz {
    constructor(vocabulary_set, quiz_mode) {
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
  
      this.quiz_mode_instructions =
        "Choose the type of practice you want. Spanish to English is a bit easier 😉";
  
      this.quiz_vocabulary_instructions =
        "The quiz always has 10 random questions. You can choose only one list of words or more.";
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
  
  //First screen
  
  let vocabulary_quiz_mode;
  let new_vocabulary_quiz;
  let words_list = [];
  
  function select_quiz_mode(mode) {
    vocabulary_quiz_mode = mode;
    document.getElementById("select_quiz_mode").style.display = "none";
    document.getElementById("select_quiz_content").style.display = "grid";
  }
  
  function add_questions_to_list(list, buttonId) {
    for (let i = 0; i < list.length; i++) {
      words_list.push(list[i]);
    }
  
    document.getElementById(buttonId).style.backgroundColor = "lightgray";
    document.getElementById(buttonId).style.cursor = "default";
    document.getElementById(buttonId).removeAttribute("onclick");
  }
  
  function start_quiz(vocabulary_list, quiz_mode) {
    if (words_list.length < 10) {
      document.getElementById("alert_not_enough_words").innerText =
        "⚠️ Since there are not enough words in this list you have to click another button to add more. ⚠️";
      return;
    }
  
    vocabulary_list.sort(() => Math.random() - 0.5);
  
    if (vocabulary_list.length > 10) {
      vocabulary_list.splice(10);
    }
  
    new_vocabulary_quiz = new Vocabulary_Quiz(vocabulary_list, quiz_mode);
  
    new_vocabulary_quiz.get_question();
    document.getElementById("first_letter").innerHTML =
      new_vocabulary_quiz.first_letter;
    document.getElementById("word").innerHTML = new_vocabulary_quiz.word;
    document.getElementById("last_letter").innerHTML =
      new_vocabulary_quiz.last_letter;
  
    document.getElementById("select_mode_and_words_screen").style.display =
      "none";
    document.getElementById("quiz").style.display = "grid";
  
    document.getElementById("answer").focus({ preventScroll: true });
  }
  
  // For "check" button
  function check_answer() {
    let answer = document.getElementById("answer").value;
  
    if (answer === "") {
      alert("Necesito una respuesta");
      return;
    }
  
    const answer_feedback = new_vocabulary_quiz.check_answer(answer);
  
    if (answer_feedback === "correct") {
      document.getElementById("inner_progress_bar").style.width = `${
        10 * new_vocabulary_quiz.correct_answers
      }%`;
      document.getElementById("answer").value = "";
  
      new_vocabulary_quiz.get_question();
      document.getElementById("first_letter").innerHTML =
        new_vocabulary_quiz.first_letter;
      document.getElementById("word").innerHTML = new_vocabulary_quiz.word;
      document.getElementById("last_letter").innerHTML =
        new_vocabulary_quiz.last_letter;
    } else {
      document.getElementById("answer").style.backgroundColor = "#DB4D89";
      document.getElementById("answer").style.color = "white";
  
      setTimeout(function continue_game() {
        document.getElementById("inner_progress_bar").style.width = `${
          10 * new_vocabulary_quiz.correct_answers
        }%`;
        document.getElementById("answer").value = "";
  
        document.getElementById("answer").style.backgroundColor = "white";
        document.getElementById("answer").style.color = "black";
  
        new_vocabulary_quiz.get_question();
        document.getElementById("first_letter").innerHTML =
          new_vocabulary_quiz.first_letter;
        document.getElementById("word").innerHTML = new_vocabulary_quiz.word;
        document.getElementById("last_letter").innerHTML =
          new_vocabulary_quiz.last_letter;
      }, 1000);
    }
  
    document.getElementById("answer").focus({ preventScroll: true });
  
    if (new_vocabulary_quiz.status === "finished") {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("end_quiz").style.display = "flex";
      return;
    }
  }
  
  document.getElementById("answer").addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      check_answer();
    }
  });