// words.js
// Trevor Pottinger
// Sun Oct 29 13:13:39 PDT 2017

const AUDIO_FILE_PATH = './audio/X.mp3'.split('X');
const WORDS = [
  // transliteration, hindi, translation
  ['achchha', 'अच्छा', 'good'],
  ['anaar', 'अनार', 'pomegranate'],
  ['ajagar', 'अजगर', 'cobra'],
  ['aap', 'आप', 'you, respectful'],
  ['aam', 'आम', 'mango'],
  ['aag', 'आग', 'fire'],
  ['imalee', 'इमली', 'tamarind'],
  ['imartee', 'इमरती', 'orange, curly, fried candy'],
  ['eekh', 'ईख', 'reed'],
  ['eent', 'ईंट', 'brick'],
  ['us', 'उस', 'that'],
  ['ulloo', 'उल्लू', 'owl'],
  ['upahaar', 'उपहार', 'present'],
  ['oon', 'ऊन', 'wool'],
  ['oont', 'ऊंट', 'camel'],
  ['ek', 'एक', 'one'],
  ['edee', 'एड़ी', 'heel'],
  ['aisa', 'ऐसा', 'like this'],
  ['offo', 'ओफ्फो', 'argh'],
  ['aur', 'और', 'and'],
  ['aurat', 'औरत', 'woman'],
  ['anda', 'अंडा', 'egg'],
  ['angoor', 'अंगूर', 'grape'],
  ['rishi', 'ऋषि', 'sage'],
  ['kahaan', 'कहाँ', 'where'],
  ['kabootar', 'कबूतर', 'pigeon'],
  ['kachhua', 'कछुआ', 'turtle'],
  ['khaana', 'खाना', 'food'],
  ['kharagosh', 'खरगोश', 'rabbit'],
  ['gamala', 'गमला', 'pot'],
  ['gaana', 'गाना', 'song'],
  ['gadha', 'गधा', 'donkey'],
  ['ghar', 'घर', 'home'],
  ['ghadee', 'घड़ी', 'watch'],
  ['chammach', 'चम्मच', 'spoon'],
  ['chhataree', 'छतरी', 'umbrella'],
  ['jahaaj', 'जहाज', 'ship'],
  ['jhanda', 'झंडा', 'flag'],
  ['tamaatar', 'टमाटर', 'tomato'],
  ['thand', 'ठंड', 'cold'],
  ['damaroo', 'डमरू', 'a kind of drum'],
  ['dhakkan', 'ढक्कन', 'lid'],
  ['tarabooj', 'तरबूज', 'watermelon'],
  ['tharamas', 'थरमस', 'thermos'],
  ['dava', 'दवा', 'medicine'],
  ['dhanush', 'धनुष', 'bow'],
  ['dhany', 'धन्य', 'blessed'],
  ['nal', 'नल', 'tap'],

  ['samudr', 'समुद्र', 'sea'],
];

const AUDIO_LIST = WORDS.map((tup) => {
  const tokens = [AUDIO_FILE_PATH[0], tup[0], AUDIO_FILE_PATH[1]];
  return [tup[0], tokens.join('')];
});
let AUDIO_MAP = {};
AUDIO_LIST.forEach((tup) => {
  AUDIO_MAP[tup[0]] = tup[1];
});
let WORD_MAP = {};
WORDS.forEach((tup) => {
  WORD_MAP[tup[0]] = [tup[1], tup[2]];
});

const CHARACTERS = [
  ['a', 'अ'],
  ['aa', 'आ'],
  ['i', 'इ'],
  ['ee', 'ई'],
  ['u', 'उ'],
  ['oo', 'ऊ'],
  ['ri', 'ऋ'],
  ['e', 'ए'],
  ['ai', 'ऐ'],
  ['o', 'ओ'],
  ['au', 'औ'],
  ['an', 'अं'],
  ['ka', 'क'],
  ['kha', 'ख'],
  ['ga', 'ग'],
  ['gha', 'घ'],
  // 'na' 1
  ['cha', 'च'],
  ['chha', 'छ'],
  ['ja', 'ज'],
  ['jha', 'झ'],
  // 'na' 2
  ['t.a', 'ट'],
  ['t.ha', 'ठ'],
  ['d.a', 'ड'],
  ['d.ha', 'ढ'],
  // 'na' 3
  ['ta', 'त'],
  ['tha', 'थ'],
  ['da', 'द'],
  ['dha', 'ध'],
  ['na', 'न'], // na 4, neha's na
  ['pa', ''],
  ['pha', ''],
  ['ba', ''],
  ['bha', ''],
  ['ma', ''],
  ['ya', ''],
  ['ra', ''],
  ['la', ''],
  ['va', ''],
  ['sa', 'स'],
  ['sha', ''],
  // 'sha' 2
  ['ha', ''],
];

const CHARACTERS_TO_WORDS = {
  'a': ['achchha', 'anaar', 'ajagar'],
  'aa': ['aap', 'aam', 'aag'],
  'i': ['imalee', 'imartee'],
  'ee': ['eekh', 'eent'],
  'u': ['us', 'ulloo', 'upahaar'],
  'oo': ['oon', 'oont'],
  'ri': ['rishi'],
  'e': ['ek', 'edee'],
  'ai': ['aisa'],
  'o': ['offo'],
  'au': ['aur', 'aurat'],
  'an': ['angoor', 'anda'],
  'ka': ['kahaan', 'kabootar', 'kachhua'],
  'kha': ['khaana', 'kharagosh'],
  'ga': ['gamala', 'gaana', 'gadha'],
  'gha': ['ghar', 'ghadee'],
  // 'na' 1
  'cha': ['chammach'],
  'chha': ['chhataree'],
  'ja': ['jahaaj'],
  'jha': ['jhanda'],
  // 'na' 2
  't.a': ['tamaatar'],
  't.ha': ['thand'],
  'd.a': ['damaroo'],
  'd.ha': ['dhakkan'],
  // 'na' 3
  'ta': ['tarabooj'],
  'tha': ['tharamas'],
  'da': ['dava'],
  'dha': ['dhanush', 'dhany'],
  'na': ['nal'], // na 4
  'pa': [],
  'pha': [],
  'ba': [],
  'bha': [],
  'ma': [],
  'ya': [],
  'ra': [],
  'la': [],
  'va': [],
  'sa': ['samudr'],
  'sha': [],
  // 'sha' 2
  'ha': [],
};
