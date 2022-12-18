// This function takes a section element from the HMLT and an instance of the class TextWithTranslations that containes the main text and the cogantes and challenging words.

function add_content_text(sectionID, TextWithTranslations) {
  const container_text_translations = document.getElementById(sectionID);

  // Although the paragraphs are contained in different sections, they have continuous numbers starting from 0.
  let paragraph_counter = 0;

  for (let i = 0; i < TextWithTranslations.number_of_sections; i++) {
    //Create a div element for each section.
    const container = document.createElement("div");
    container.setAttribute("id", `container${i}`);
    container.setAttribute("class", "content-containers");
    container_text_translations.appendChild(container);

    // Create an h3 element for the title of each section.
    const title = document.createElement("h3");
    title.setAttribute("id", `title${i}`);
    title.setAttribute("class", "titles");
    container.appendChild(title);
    const textNode = document.createTextNode(
      TextWithTranslations.sections[i].title
    );
    title.appendChild(textNode);

    for (
      let j = 0;
      j < TextWithTranslations.sections[i].paragraphs.length;
      j++
    ) {
      // Create an h3 element for the title of each section.
      const paragraph = document.createElement("p");
      paragraph.setAttribute("id", `paragraph${paragraph_counter}`);
      paragraph.setAttribute("class", "paragraphs");
      container.appendChild(paragraph);

      const textNode = document.createTextNode(
        TextWithTranslations.sections[i].paragraphs[j]
      );
      paragraph.appendChild(textNode);
      paragraph_counter++;
    }
  }
}

function add_cognates(TextWithTranslations) {
  // This counter avoids repetition of numbers in the span ids.
  let cognate_counter = 0;

  for (let i = 0; i < TextWithTranslations.cognates.length; i++) {
    // Takes the word that will be included on the span.
    const cognate = TextWithTranslations.cognates[i].in_text;

    // Checks every paragraph for an exact match.
    for (let j = 0; j < TextWithTranslations.number_of_paragraphs; j++) {
      const paragraph = document.getElementById(`paragraph${j}`);
      // The sentence is a string.
      const sentence = paragraph.innerHTML;

      // Separates the sentence into an array of words and, because of the RegEx it add a bunch of extra spaces. It is unavoidable and will be fix using .join("").
      const split_sentence =
        TextWithTranslations.separate_sentence_into_words(sentence);

      // Gets the index of the word within the separated senten.
      let cognate_index = split_sentence.indexOf(cognate);

      // If this logic return -1 means that the exact word is not present on the array.
      if (cognate_index !== -1) {
        //The empty span will change with the next function.
        const cognate_span_container = `<span class='highlighted_cognates' id='cognate${cognate_counter}'  onclick='toggle_cognate_translation(${cognate_counter})'>${cognate}</span><span class='cognates_translations translation' id='cognate_translation${cognate_counter}'>${TextWithTranslations.cognates[i].in_text_translation}</span>`;

        // Replace the cognate with the two span elements created befor.
        split_sentence.splice(cognate_index, 1, cognate_span_container);
        const joined_sentence = split_sentence.join("");

        // You can't use innerText to add the elements.
        paragraph.innerHTML = joined_sentence;
        cognate_counter++;
      }
    }
  }
}

// The span on the code before has this function sp it acts like a "button" and changes the display of one of the span so it shows the translation of the cogante.
function toggle_cognate_translation(num) {
  const cognate_translation_span = document.getElementById(
    `cognate_translation${num}`
  );
  cognate_translation_span.style.display =
    cognate_translation_span.style.display === "inline" ? "none" : "inline";
}

// Same function as before but it adds challenging_words instead of cognates.
function add_challenging_words(TextWithTranslations) {
  // This counter avoids repetition of numbers in the span ids.
  let challenging_word_counter = 0;

  for (let i = 0; i < TextWithTranslations.challenging_words.length; i++) {
    const challenging_word = TextWithTranslations.challenging_words[i].in_text;

    for (let j = 0; j < TextWithTranslations.number_of_paragraphs; j++) {
      const paragraph = document.getElementById(`paragraph${j}`);
      const sentence = paragraph.innerHTML;

      const split_sentence =
        TextWithTranslations.separate_sentence_into_words(sentence);

      let challenging_word_index = split_sentence.indexOf(challenging_word);

      if (challenging_word_index !== -1) {
        const challenging_word_span_container = `<span class='highlighted-challenging_words' id='challenging_word${challenging_word_counter}'  onclick='toggle_challening_word_translation(${challenging_word_counter})'>${challenging_word}</span><span class='challenging_words_translations translation' id='challenging_word_translation${challenging_word_counter}'>${TextWithTranslations.challenging_words[i].in_text_translation}</span>`;

        split_sentence.splice(
          challenging_word_index,
          1,
          challenging_word_span_container
        );
        const joined_sentence = split_sentence.join("");

        paragraph.innerHTML = joined_sentence;
        challenging_word_counter++;
      }
    }
  }
}

// Same function as before but shows challenging_words instead of cognates.
function toggle_challening_word_translation(num) {
  const challenging_word_translation_span = document.getElementById(
    `challenging_word_translation${num}`
  );
  challenging_word_translation_span.style.display =
    challenging_word_translation_span.style.display === "inline"
      ? "none"
      : "inline";
}

// Adds the text of the content to the HTML.
add_content_text("text_with_translations", Curiosamente_Video_Huevo_Gallina);

//Adds the cognates to the text.
add_cognates(Curiosamente_Video_Huevo_Gallina);

//Adds challenging words to the text.
add_challenging_words(Curiosamente_Video_Huevo_Gallina);
