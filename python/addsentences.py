from googletrans import Translator
from nltk.corpus import wordnet as wn
import json

import codecs
translator = Translator()

with open('sample.json') as file:
    data = json.load(file)

    for i in data.items():
      val = None
      s1 = None
      if i and i[0] and wn.synsets(i[0]) and wn.synsets(i[0])[0]:
        val = wn.synsets(i[0])[0].pos()
        s1 = wn.synsets(i[0])[0].examples()
        r = translator.translate(s1, src='en', dest='vi')
        vi = []
        for s in r:
          print(s)
          vi.append(s.text)
        data[i[0]] = {
          'part': val,
          'vi': i[1],
          'sentences': [s1],
          'viSentences': vi,
          'def': wn.synsets(i[0])[0].definition() 
        }


    with codecs.open("sample1.json", "w", encoding='utf8') as f:
          json.dump(data, f, ensure_ascii=False)
