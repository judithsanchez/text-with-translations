class Content {
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

const Video_Huevo_Gallina = new Content(
  Creator_Curiosamente,
  "¿Qué fue primero, el huevo o la gallina?",
  "video",
  "https://www.youtube.com/watch?v=r7Na9cbquHg&ab_channel=CuriosaMente",
  "https://www.youtube.com/embed/r7Na9cbquHg",
  [
    {
      title: "Introducción",
      paragraphs: [
        "¿Qué fue primero, el huevo o la gallina?",
        "¿El tío Alberto siempre está contento porque le va bien en el trabajo o le va bien en el trabajo debido a que siempre está contento?",
        "Cuando queremos expresar que es muy difícil saber la causa de algo, porque no sabemos cuál de dos factores dio origen al otro, decimos que es “como la pregunta del huevo o la gallina”.",
      ],
    },
    {
      title: "La pregunta de Aristóteles",
      paragraphs: [
        "Por ejemplo ¿La economía está mal a causa de la delincuencia o hay más delincuencia debido a la mala economía?",
        "¡Es como preguntarse qué fue primero, si el huevo o la gallina! Esta pregunta ha servido como metáfora sobre el origen de las cosas desde que Aristóteles la formuló.",
        "Él decía que, como toda ave debe provenir de un huevo y todo huevo debe provenir de un ave, entonces tanto aves como huevos debieron haber existido desde siempre, y lo mismo los humanos y todo en la naturaleza. ¿Será así?",
      ],
    },
    {
      title: "El origen del universo",
      paragraphs: [
        "La pregunta del huevo y la gallina nos lleva a preguntarnos sobre el origen mismo del universo… pero por ahora concentrémonos sólo en huevos y en gallinas, desde el punto de vista de la biología evolutiva.",
        "Los huevos han existido desde muuuuchos años antes que las gallinas.",
        "Lo más probable es que los primeros huevos fueran de corales, hace 542 millones de años, luego pusieron huevos los insectos, después los peces, los reptiles y luego los dinosaurios, hace poco más de 230 millones de años.",
        "Las primeras aves convivieron con los dinosaurios y aparecieron hace unos 150 millones de años. Si hubiera humanos en esa época, ya se podrían haber preparado un buen omelette.",
        "¡Ah! Pero tú quieres saber cuál fue el primer huevo de gallina. Bueno, eso depende de tu definición de “huevo de gallina”.",
      ],
    },
    {
      title: "La gallina primigenia",
      paragraphs: [
        "¿Es un huevo que tenía un embrión de gallina dentro o un huevo que fue puesto por una gallina?",
        "Si hablamos del primer huevo que tenía un embrión de gallina dentro, la respuesta es esta: la primera gallina no nació de un huevo puesto por un ejemplar de su misma especie.",
        "O sea, sus papás eran dos animales muy parecidos a los gallos y las gallinas actuales, pero no exactamente.",
        "Estos animales pertenecían a la especie llamada Gallo Bankiva (que todavía existe en el sureste de Asia), posiblemente cruzados con las especies Gallo Gris y Gallo de Ceilán.",
        "Esto ocurrió en China hace unos 7,400 años. Su hijito o hijita fue una pollita mutante más fácil de domesticar, y que ahora conocemos con el nombre de… “gallina”...",
        "Esta nueva gallina puso el primer huevo gestado por una gallina, de acuerdo con la segunda definición.",
      ],
    },
    {
      title: "Despedida",
      paragraphs: [
        "¡Curiosamente!",
        "¿Ya te suscribiste a este canal? ¡Genial!",
        "¿Y ya sabías que puedes seguirnos en Twitter y en FaceBook para estar al tanto de nuestras noticias y nuevos videos?",
        "Por cierto ¿Quién fue el primer ser humano?",
      ],
    },
  ],

  // Cognates
  [
    {
      in_text: "contento",
      in_text_translation: "content",
      english: "content",
      spanish: "contento",
    },
    {
      in_text: "expresar",
      in_text_translation: "express",
      english: "express",
      spanish: "expresar",
    },
    {
      in_text: "causa",
      in_text_translation: "cause",
      english: "cause",
      spanish: "la causa",
    },
    {
      in_text: "factores",
      in_text_translation: "factors",
      english: "factors",
      spanish: "el factor",
    },
    {
      in_text: "origen",
      in_text_translation: "origin",
      english: "origin",
      spanish: "el origen",
    },
    {
      in_text: "economía",
      in_text_translation: "economy",
      english: "economy",
      spanish: "la economía",
    },
    {
      in_text: "delincuencia",
      in_text_translation: "delinquency",
      english: "delinquency",
      spanish: "la delicuencia",
    },
    {
      in_text: "servido",
      in_text_translation: "served",
      english: "serve",
      spanish: "servir",
    },
    {
      in_text: "metáfora",
      in_text_translation: "metaphor",
      english: "metaphor",
      spanish: "la metáfora",
    },
    {
      in_text: "formuló",
      in_text_translation: "formulated",
      english: "formulate",
      spanish: "formular",
    },
    {
      in_text: "existido",
      in_text_translation: "existed",
      english: "exist",
      spanish: "existir",
    },
    {
      in_text: "humanos",
      in_text_translation: "humans",
      english: "human",
      spanish: "el humano",
    },
    {
      in_text: "naturaleza",
      in_text_translation: "nature",
      english: "nature",
      spanish: "la naturaleza",
    },
    {
      in_text: "universo",
      in_text_translation: "universe",
      english: "universe",
      spanish: "el universo",
    },
    {
      in_text: "punto",
      in_text_translation: "point",
      english: "point",
      spanish: "el punto",
    },
    {
      in_text: "biología",
      in_text_translation: "biology",
      english: "biology",
      spanish: "la biología",
    },
    {
      in_text: "evolutiva",
      in_text_translation: "evolutive",
      english: "evolutive",
      spanish: "evolutivo",
    },
    {
      in_text: "probable",
      in_text_translation: "probably",
      english: "probably",
      spanish: "probable",
    },
    {
      in_text: "corales",
      in_text_translation: "corals",
      english: "coral",
      spanish: "el coral",
    },
    {
      in_text: "insectos",
      in_text_translation: "insects",
      english: "insect",
      spanish: "el insecto",
    },
    {
      in_text: "dinosaurios",
      in_text_translation: "dinosaurs",
      english: "dinosaur",
      spanish: "el dinosaurio",
    },
    {
      in_text: "aparecieron",
      in_text_translation: "appeared",
      english: "appear",
      spanish: "aparecer",
    },
    {
      in_text: "preparado",
      in_text_translation: "prepared",
      english: "prepare",
      spanish: "preparar",
    },
    {
      in_text: "depende",
      in_text_translation: "depends",
      english: "depend",
      spanish: "depender",
    },
    {
      in_text: "definición",
      in_text_translation: "definition",
      english: "definition",
      spanish: "la definición",
    },
    {
      in_text: "embrión",
      in_text_translation: "embryo",
      english: "embryo",
      spanish: "el embrión",
    },
    {
      in_text: "especie",
      in_text_translation: "specie",
      english: "specie",
      spanish: "la especie",
    },
    {
      in_text: "exactamente",
      in_text_translation: "exactly",
      english: "exactly",
      spanish: "exactamente",
    },
    {
      in_text: "posiblemente",
      in_text_translation: "possibly",
      english: "possibly",
      spanish: "posiblemente",
    },
    {
      in_text: "mutante",
      in_text_translation: "mutant",
      english: "mutant",
      spanish: "el mutante",
    },
    {
      in_text: "suscribiste",
      in_text_translation: "subscribed",
      english: "subscribe",
      spanish: "suscribir",
    },
    {
      in_text: "canal",
      in_text_translation: "channel",
      english: "channel",
      spanish: "el canal",
    },
    {
      in_text: "difícil",
      in_text_translation: "difficult",
      english: "difficult",
      spanish: "difícil",
    },
    {
      in_text: "ejemplo",
      in_text_translation: "example",
      english: "example",
      spanish: "ejemplo",
    },
    {
      in_text: "reptiles",
      in_text_translation: "reptiles",
      english: "reptile",
      spanish: "el reptil",
    },
    {
      in_text: "domesticar",
      in_text_translation: "domesticate",
      english: "domesticate",
      spanish: "domesticar",
    },
  ],

  // Challenging words
  [
    {
      in_text: "primero",
      in_text_translation: "first",
      english: "first",
      spanish: "primero",
    },
    {
      in_text: "huevo",
      in_text_translation: "egg",
      english: "egg",
      spanish: "el huevo",
    },
    {
      in_text: "gallina",
      in_text_translation: "hen",
      english: "hen",
      spanish: "la gallina",
    },
    {
      in_text: "saber",
      in_text_translation: "know",
      english: "know",
      spanish: "saber",
    },
    {
      in_text: "pregunta",
      in_text_translation: "question",
      english: "question",
      spanish: "la pregunta",
    },
    {
      in_text: "preguntarse",
      in_text_translation: "wonder",
      english: "wonder",
      spanish: "preguntarse",
    },
    {
      in_text: "decía",
      in_text_translation: "said",
      english: "say",
      spanish: "decir",
    },
    {
      in_text: "ave",
      in_text_translation: "bird",
      english: "bird",
      spanish: "el ave",
    },
    {
      in_text: "provenir",
      in_text_translation: "stem",
      english: "stem",
      spanish: "provenir",
    },
    {
      in_text: "todo",
      in_text_translation: "every",
      english: "every",
      spanish: "todo",
    },
    {
      in_text: "debe",
      in_text_translation: "should",
      english: "should",
      spanish: "deber",
    },
    {
      in_text: "entonces",
      in_text_translation: "then",
      english: "then",
      spanish: "entonces",
    },
    {
      in_text: "mismo",
      in_text_translation: "same",
      english: "same",
      spanish: "mismo",
    },
    {
      in_text: "concentrémonos",
      in_text_translation: "lets focus",
      english: "concentrate",
      spanish: "focus",
    },
    {
      in_text: "vista",
      in_text_translation: "view",
      english: "view",
      spanish: "la vista",
    },
    {
      in_text: "hace",
      in_text_translation: "ago",
      english: "ago",
      spanish: "hace",
    },
    {
      in_text: "pusieron",
      in_text_translation: "laid",
      english: "lay",
      spanish: "poner",
    },
    {
      in_text: "peces",
      in_text_translation: "fish",
      english: "fish",
      spanish: "el pez",
    },
    {
      in_text: "convivieron",
      in_text_translation: "lived together",
      english: "live together",
      spanish: "convivir",
    },
    {
      in_text: "época",
      in_text_translation: "time",
      english: "time",
      spanish: "la época",
    },
    {
      in_text: "podrían",
      in_text_translation: "would be able to",
      english: "be able to",
      spanish: "poder",
    },
    {
      in_text: "dentro",
      in_text_translation: "inside",
      english: "inside",
      spanish: "dentro",
    },
    {
      in_text: "respuesta",
      in_text_translation: "answer",
      english: "answer",
      spanish: "la respuesta",
    },
    {
      in_text: "nació",
      in_text_translation: "born",
      english: "born",
      spanish: "nacer",
    },
    {
      in_text: "ejemplar",
      in_text_translation: "specimen",
      english: "specimen",
      spanish: "el ejemplar",
    },
    {
      in_text: "sus",
      in_text_translation: "their",
      english: "their",
      spanish: "sus",
    },
    {
      in_text: "papás",
      in_text_translation: "parents",
      english: "parents",
      spanish: "los padres",
    },
    {
      in_text: "parecidos",
      in_text_translation: "similar",
      english: "similar",
      spanish: "parecido",
    },
    {
      in_text: "gallos",
      in_text_translation: "roosters",
      english: "rooster",
      spanish: "el gallo",
    },
    {
      in_text: "pertenecían",
      in_text_translation: "belonged",
      english: "belong",
      spanish: "pertenecer",
    },
    {
      in_text: "llamada",
      in_text_translation: "called",
      english: "call",
      spanish: "llamar",
    },
    {
      in_text: "todavía",
      in_text_translation: "still",
      english: "still",
      spanish: "todavía",
    },
    {
      in_text: "sureste",
      in_text_translation: "southeast",
      english: "southeast",
      spanish: "el sureste",
    },
    {
      in_text: "ocurrió",
      in_text_translation: "happened",
      english: "happen",
      spanish: "ocurrir",
    },
    {
      in_text: "hijito",
      in_text_translation: "little child",
      english: "child",
      spanish: "el hijo",
    },
    {
      in_text: "pollita",
      in_text_translation: "chick",
      english: "chick",
      spanish: "el pollito",
    },
    {
      in_text: "ahora",
      in_text_translation: "now",
      english: "now",
      spanish: "ahora",
    },
    {
      in_text: "conocemos",
      in_text_translation: "know",
      english: "know",
      spanish: "conocer",
    },
    {
      in_text: "gestado",
      in_text_translation: "breed",
      english: "breed",
      spanish: "gestar",
    },
    {
      in_text: "acuerdo",
      in_text_translation: "according to",
      english: "according to",
      spanish: "de acuerdo",
    },
    {
      in_text: "ya",
      in_text_translation: "already",
      english: "already",
      spanish: "ya",
    },
    {
      in_text: "seguirnos",
      in_text_translation: "follow us",
      english: "follow",
      spanish: "seguir",
    },
    {
      in_text: "nuestras",
      in_text_translation: "our",
      english: "our",
      spanish: "nuestro",
    },
    {
      in_text: "nosticias",
      in_text_translation: "news",
      english: "news",
      spanish: "la noticia",
    },
    {
      in_text: "nuevos",
      in_text_translation: "new",
      english: "new",
      spanish: "nuevo",
    },
    {
      in_text: "debido",
      in_text_translation: "because",
      english: "debido a",
      spanish: "because",
    },
    {
      in_text: "siempre",
      in_text_translation: "always",
      english: "siempre",
      spanish: "always",
    },
    {
      in_text: "algo",
      in_text_translation: "something",
      english: "algo",
      spanish: "something",
    },
    {
      in_text: "cosas",
      in_text_translation: "things",
      english: "things",
      spanish: "cosas",
    },
    {
      in_text: "tanto",
      in_text_translation: "as much as",
      english: "as much as",
      spanish: "tanto como",
    },
    {
      in_text: "lleva",
      in_text_translation: "takes us",
      english: "takes us",
      spanish: "nos lleva",
    },
    {
      in_text: "antes que",
      in_text_translation: "before",
      english: "before",
      spanish: "antes que",
    },
    {
      in_text: "después",
      in_text_translation: "after",
      english: "after",
      spanish: "después de",
    },
    {
      in_text: "cruzados",
      in_text_translation: "crossed",
      english: "cross",
      spanish: "cruzar",
    },
    {
      in_text: "trabajo",
      in_text_translation: "work",
      english: "work",
      spanish: "el trabajo",
    },
  ],

  // False Cognates
  [
    {
      in_text: "actuales",
      in_text_translation: "current",
      english: "current",
      spanish: "actual",
    },
  ],

  // Subjunctives
  [
    {
      in_text: "fueran",
      in_text_translation: "were",
      english: "they were",
      spanish: "ellos fueran",
    },
    {
      in_text: "hubiera",
      in_text_translation: "there were",
      english: "there were",
      spanish: "hubiera",
    },
  ]
);
