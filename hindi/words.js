// words.js
// Trevor Pottinger
// Sun Oct 29 13:13:39 PDT 2017

const AUDIO_FILE_PATH = './audio/X.mp3'.split('X');
const WORDS = [
  // transliteration, hindi, translation
  ['achchha', 'अच्छा', 'good'],
  ['anaar', 'अनार', 'pomegranate'],
  ['ajagar', 'अजगर', 'cobra'],
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
  ['aisa', 'ऐसा', 'like this'],
  ['offo', 'ओफ्फो', 'argh'],
  ['aurat', 'औरत', 'woman'],
  ['rishi', 'ऋषि', 'sage'],
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
  ['e', 'ए'],
  ['ai', 'ऐ'],
  ['o', 'ओ'],
  ['au', 'औ'],
  ['ri', 'ऋ'],
];
const CHARACTERS_TO_WORDS = {
  'a': ['achchha', 'anaar', 'ajagar'],
  'aa': ['aam', 'aag'],
  'i': ['imalee', 'imartee'],
  'ee': ['eekh', 'eent'],
  'u': ['us', 'ulloo', 'upahaar'],
  'oo': ['oon', 'oont'],
  'e': ['ek'],
  'ai': ['aisa'],
  'o': ['offo'],
  'au': ['aurat'],
  'ri': ['rishi'],
};
