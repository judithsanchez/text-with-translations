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
      document.getElementById("alert_no_input_given").innerText =
        "⚠️ Please, type your answer. ⚠️";
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

    document.getElementById("alert_no_input_given").innerText = "";
  
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