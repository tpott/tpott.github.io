// words.js
// Trevor Pottinger
// Sun Oct 29 13:13:39 PDT 2017

const AUDIO_FILE_PATH = './audio/X.mp3'.split('X');
const WORDS = [
  // transliteration, hindi, translation
  ['anaar', 'अनार', 'pomegranate'],
  ['ajagar', 'अजगर', 'cobra'],
  ['aam', 'आम', 'mango'],
  ['aag', 'आग', 'fire'],
  ['imalee', 'इमली', 'tamarind'],
  ['imartee', 'इमरती', ''],
  ['eekh', 'ईख', ''],
  ['eent', 'ईंट', ''],
  ['ulloo', 'उल्लू', 'owl'],
  ['upahaar', 'उपहार', ''],
  ['oon', 'ऊन', ''],
  ['oont', 'ऊंट', ''],
  ['rishi', 'ऋषि', ''],
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
];
const CHARACTERS_TO_WORDS = {
  'a': ['anaar', 'ajagar'],
  'aa': ['aam', 'aag'],
  'i': ['imalee', 'imartee'],
  'ee': ['eekh', 'eent'],
  'u': ['ulloo', 'upahaar'],
  'oo': ['oon', 'oont'],
  'ri': ['rishi'],
};
