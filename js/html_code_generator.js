function add_content_title(containerID, TextWithTranslations) {
  const container = document.getElementById(containerID);
  const title_element = document.createElement("h1");
  title_element.setAttribute("id", "content_title");
  title_element.setAttribute("class", "content_title");
  container.appendChild(title_element);

  const title = document.createTextNode(TextWithTranslations.title);
  title_element.appendChild(title);
}

function add_activity_instructions(containerID, TextWithTranslations) {
  const container = document.getElementById(containerID);

  const text_element = document.createElement("p");
  text_element.setAttribute("id", "activity_instructions");
  text_element.setAttribute("class", "activity_instructions");
  container.appendChild(text_element);

  const disclaimer = document.createTextNode(TextWithTranslations.instructions);
  text_element.appendChild(disclaimer);
}

function add_creator_disclaimer(containerID, TextWithTranslations) {
  const container = document.getElementById(containerID);

  const text_element = document.createElement("p");
  text_element.setAttribute("id", "creator_disclaimer");
  text_element.setAttribute("class", "creator_disclaimer");
  container.appendChild(text_element);

  const disclaimer = document.createTextNode(
    TextWithTranslations.content.creator.disclaimer
  );
  text_element.appendChild(disclaimer);
}

function add_creator_social_media(containerID, TextWithTranslations) {
  const container = document.getElementById(containerID);

  const instagram_link = document.createElement("a");
  instagram_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.instagram
  );
  container.appendChild(instagram_link);

  const instagram_icon = document.createElement("img");
  instagram_icon.setAttribute("alt", "Instagram Icon");
  instagram_icon.setAttribute("class", "creator_social_media");
  instagram_icon.setAttribute("id", "instagram_icon");
  instagram_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_instagram.svg"
  );
  instagram_link.appendChild(instagram_icon);

  const facebook_link = document.createElement("a");
  facebook_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.facebook
  );
  container.appendChild(facebook_link);

  const facebook_icon = document.createElement("img");
  facebook_icon.setAttribute("alt", "facebook Icon");
  facebook_icon.setAttribute("class", "creator_social_media");
  facebook_icon.setAttribute("id", "facebook_icon");
  facebook_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_facebook.svg"
  );
  facebook_link.appendChild(facebook_icon);

  const patreon_link = document.createElement("a");
  patreon_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.patreon
  );
  container.appendChild(patreon_link);

  const patreon_icon = document.createElement("img");
  patreon_icon.setAttribute("alt", "patreon Icon");
  patreon_icon.setAttribute("class", "creator_social_media");
  patreon_icon.setAttribute("id", "patreon_icon");
  patreon_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_patreon.svg"
  );
  patreon_link.appendChild(patreon_icon);

  const tiktok_link = document.createElement("a");
  tiktok_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.tiktok
  );
  container.appendChild(tiktok_link);

  const tiktok_icon = document.createElement("img");
  tiktok_icon.setAttribute("alt", "tiktok Icon");
  tiktok_icon.setAttribute("class", "creator_social_media");
  tiktok_icon.setAttribute("id", "tiktok_icon");
  tiktok_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_tiktok.svg"
  );
  tiktok_link.appendChild(tiktok_icon);

  const twitter_link = document.createElement("a");
  twitter_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.twitter
  );
  container.appendChild(twitter_link);

  const twitter_icon = document.createElement("img");
  twitter_icon.setAttribute("alt", "twitter Icon");
  twitter_icon.setAttribute("class", "creator_social_media");
  twitter_icon.setAttribute("id", "twitter_icon");
  twitter_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_twitter.svg"
  );
  twitter_link.appendChild(twitter_icon);

  const youtube_link = document.createElement("a");
  youtube_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.youtube
  );
  container.appendChild(youtube_link);

  const youtube_icon = document.createElement("img");
  youtube_icon.setAttribute("alt", "youtube Icon");
  youtube_icon.setAttribute("class", "creator_social_media");
  youtube_icon.setAttribute("id", "youtube_icon");
  youtube_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_youtube.svg"
  );
  youtube_link.appendChild(youtube_icon);

  const website_link = document.createElement("a");
  website_link.setAttribute(
    "href",
    TextWithTranslations.content.creator.socialmedia.website
  );
  container.appendChild(website_link);

  const website_icon = document.createElement("img");
  website_icon.setAttribute("alt", "website Icon");
  website_icon.setAttribute("class", "creator_social_media");
  website_icon.setAttribute("id", "website_icon");
  website_icon.setAttribute(
    "src",
    "https://bocaditosespanol.com/wp-content/uploads/2022/12/logo_curiosamente.svg"
  );
  website_link.appendChild(website_icon);
}

function add_video_iframe(containerID, TextWithTranslations) {
  const video_container = document.getElementById(containerID);

  const video_iframe = document.createElement("iframe");
  video_iframe.setAttribute(
    "src",
    TextWithTranslations.content.youtube_embed_url
  );
  video_iframe.setAttribute("title", "YouTube video player");
  video_iframe.setAttribute("frameborder", "0");
  video_iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  video_iframe.setAttribute("allowfullscreen", "");

  video_container.appendChild(video_iframe);
}

function add_content_text(sectionID, TextWithTranslations) {
  const container_text_translations = document.getElementById(sectionID);

  // Although the paragraphs are contained in different sections, they have continuous numbers starting from 0.
  let paragraph_counter = 0;

  for (let i = 0; i < TextWithTranslations.number_of_sections; i++) {
    const container = document.createElement("div");
    container.setAttribute("id", `container${i}`);
    container.setAttribute("class", "content_containers");
    container_text_translations.appendChild(container);

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

    for (let j = 0; j < TextWithTranslations.number_of_paragraphs; j++) {
      const paragraph = document.getElementById(`paragraph${j}`);
      // The sentence is a string.
      const sentence = paragraph.innerHTML;

      const split_sentence =
        TextWithTranslations.separate_sentence_into_words(sentence);

      let cognate_index = split_sentence.indexOf(cognate);

      // If this logic return -1 means that the exact word is not present on the array.
      if (cognate_index !== -1) {
        //The empty span will change with the next function.
        const cognate_span_container = `<span class='highlighted_cognates' id='cognate${cognate_counter}'  onclick='toggle_cognate_translation(${cognate_counter})'>${cognate}</span><span class='cognates_translations translation' id='cognate_translation${cognate_counter}'>${TextWithTranslations.cognates[i].in_text_translation}</span>`;

        split_sentence.splice(cognate_index, 1, cognate_span_container);
        const joined_sentence = split_sentence.join("");

        // You can't use innerText to add the elements.
        paragraph.innerHTML = joined_sentence;
        cognate_counter++;
      }
    }
  }
}

function toggle_cognate_translation(num) {
  const cognate_translation_span = document.getElementById(
    `cognate_translation${num}`
  );
  cognate_translation_span.style.display =
    cognate_translation_span.style.display === "inline" ? "none" : "inline";
}

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
        const challenging_word_span_container = `<span class='highlighted_challenging_words' id='challenging_word${challenging_word_counter}'  onclick='toggle_challening_word_translation(${challenging_word_counter})'>${challenging_word}</span><span class='challenging_words_translations translation' id='challenging_word_translation${challenging_word_counter}'>${TextWithTranslations.challenging_words[i].in_text_translation}</span>`;

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

function toggle_challening_word_translation(num) {
  const challenging_word_translation_span = document.getElementById(
    `challenging_word_translation${num}`
  );
  challenging_word_translation_span.style.display =
    challenging_word_translation_span.style.display === "inline"
      ? "none"
      : "inline";
}

function add_false_cognates(TextWithTranslations) {
  // This counter avoids repetition of numbers in the span ids.
  let false_cognate_counter = 0;

  for (let i = 0; i < TextWithTranslations.false_cognates.length; i++) {
    const false_cognate = TextWithTranslations.false_cognates[i].in_text;

    for (let j = 0; j < TextWithTranslations.number_of_paragraphs; j++) {
      const paragraph = document.getElementById(`paragraph${j}`);
      const sentence = paragraph.innerHTML;

      const split_sentence =
        TextWithTranslations.separate_sentence_into_words(sentence);

      let false_cognate_index = split_sentence.indexOf(false_cognate);

      if (false_cognate_index !== -1) {
        const false_cognate_span_container = `<span class='highlighted_false_cognates' id='false_cognate${false_cognate_counter}'  onclick='toggle_false_cognate_translation(${false_cognate_counter})'>${false_cognate}</span><span class='false_cognates_translations translation' id='false_cognate_translation${false_cognate_counter}'>${TextWithTranslations.false_cognates[i].in_text_translation}</span>`;

        split_sentence.splice(
          false_cognate_index,
          1,
          false_cognate_span_container
        );
        const joined_sentence = split_sentence.join("");

        paragraph.innerHTML = joined_sentence;
        false_cognate_counter++;
      }
    }
  }
}

function toggle_false_cognate_translation(num) {
  const false_cognate_translation_span = document.getElementById(
    `false_cognate_translation${num}`
  );
  false_cognate_translation_span.style.display =
    false_cognate_translation_span.style.display === "inline"
      ? "none"
      : "inline";
}

function add_subjunctives(TextWithTranslations) {
  // This counter avoids repetition of numbers in the span ids.
  let subjunctive_counter = 0;

  for (let i = 0; i < TextWithTranslations.subjunctives.length; i++) {
    const subjunctive = TextWithTranslations.subjunctives[i].in_text;

    for (let j = 0; j < TextWithTranslations.number_of_paragraphs; j++) {
      const paragraph = document.getElementById(`paragraph${j}`);
      const sentence = paragraph.innerHTML;

      const split_sentence =
        TextWithTranslations.separate_sentence_into_words(sentence);

      let subjunctive_index = split_sentence.indexOf(subjunctive);

      if (subjunctive_index !== -1) {
        const subjunctive_span_container = `<span class='highlighted_subjunctives' id='subjunctive${subjunctive_counter}'  onclick='toggle_subjunctive_translation(${subjunctive_counter})'>${subjunctive}</span><span class='subjunctives_translations translation' id='subjunctive_translation${subjunctive_counter}'>${TextWithTranslations.subjunctives[i].in_text_translation}</span>`;

        split_sentence.splice(subjunctive_index, 1, subjunctive_span_container);
        const joined_sentence = split_sentence.join("");

        paragraph.innerHTML = joined_sentence;
        subjunctive_counter++;
      }
    }
  }
}

function toggle_subjunctive_translation(num) {
  const subjunctive_translation_span = document.getElementById(
    `subjunctive_translation${num}`
  );
  subjunctive_translation_span.style.display =
    subjunctive_translation_span.style.display === "inline" ? "none" : "inline";
}
