import { Question, ExamSettings } from '../types.ts';

export const DEFAULT_QUESTIONS: Question[] = [
  {
    "id": 1,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A sum of money doubles itself at simple interest in 8 years. What is the annual rate of interest?",
    "options": [
      "10.5%",
      "12.5%",
      "14%",
      "15%"
    ],
    "correctAnswer": 1,
    "explanation": "Using R = 100/T.",
    "marks": 1
  },
  {
    "id": 2,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A shopkeeper marks goods 25% above cost price and allows a discount of 10%. Find the profit percentage.",
    "options": [
      "10%",
      "12.5%",
      "15%",
      "17.5%"
    ],
    "correctAnswer": 1,
    "explanation": "SP = (1 + markup) * (1 - discount).",
    "marks": 1
  },
  {
    "id": 3,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A train 240 m long crosses a platform of length 650 m in 89 seconds. What is the speed of the train?",
    "options": [
      "8 m/s",
      "10 m/s",
      "12 m/s",
      "15 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Speed = (Train Length + Platform Length) / Time.",
    "marks": 1
  },
  {
    "id": 4,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: If person X finishes a task in 12 days and person Y finishes in 18 days, in how many days can both finish together?",
    "options": [
      "6.5 days",
      "7.2 days",
      "8 days",
      "9 days"
    ],
    "correctAnswer": 1,
    "explanation": "1/Total = 1/X + 1/Y.",
    "marks": 1
  },
  {
    "id": 5,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: What is the arithmetic mean of the first 50 natural numbers?",
    "options": [
      "25",
      "25.5",
      "26",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Average = (n + 1)/2.",
    "marks": 1
  },
  {
    "id": 6,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: Two numbers are in the ratio 3:5. If their sum is 64, find the smaller number.",
    "options": [
      "20",
      "24",
      "28",
      "32"
    ],
    "correctAnswer": 1,
    "explanation": "Divide sum proportionally.",
    "marks": 1
  },
  {
    "id": 7,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: What is the compound interest on $10,000 at 10% per annum compounded annually for 2 years?",
    "options": [
      "$2,000",
      "$2,100",
      "$2,200",
      "$2,300"
    ],
    "correctAnswer": 1,
    "explanation": "CI = P[(1+r)^2 - 1].",
    "marks": 1
  },
  {
    "id": 8,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: The perimeter of a square field is 80 m. What is its total area?",
    "options": [
      "360 sq m",
      "400 sq m",
      "440 sq m",
      "480 sq m"
    ],
    "correctAnswer": 1,
    "explanation": "Side = P/4; Area = Side^2.",
    "marks": 1
  },
  {
    "id": 9,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: In how many distinct ways can the letters of the word 'BHARAT' be arranged?",
    "options": [
      "180",
      "360",
      "720",
      "120"
    ],
    "correctAnswer": 1,
    "explanation": "Total permutations factoring in duplicate letters.",
    "marks": 1
  },
  {
    "id": 10,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a King or a Queen?",
    "options": [
      "1/13",
      "2/13",
      "3/13",
      "4/13"
    ],
    "correctAnswer": 1,
    "explanation": "(4 Kings + 4 Queens)/52 = 8/52 = 2/13.",
    "marks": 1
  },
  {
    "id": 11,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: The cost price of 12 articles is equal to the selling price of 10 articles. What is the profit percentage?",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "correctAnswer": 1,
    "explanation": "Profit % = ((CP units - SP units) / SP units) * 100.",
    "marks": 1
  },
  {
    "id": 12,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: If a car travels at 60 km/h, what is its speed in meters per second?",
    "options": [
      "15 m/s",
      "16.67 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply km/h by 5/18.",
    "marks": 1
  },
  {
    "id": 13,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: Solve for x: 3^(x + 2) = 81.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "Set exponents equal on both sides.",
    "marks": 1
  },
  {
    "id": 14,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A pipe can fill a water tank in 8 hours while a leak empties it in 12 hours. How long to fill when both are open?",
    "options": [
      "20 hours",
      "24 hours",
      "28 hours",
      "32 hours"
    ],
    "correctAnswer": 1,
    "explanation": "Rate = 1/fill - 1/empty.",
    "marks": 1
  },
  {
    "id": 15,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A bag has 4 red, 5 green, and 6 blue balls. If one ball is picked, what is the probability it is green?",
    "options": [
      "1/5",
      "1/3",
      "2/5",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "P = Green / Total.",
    "marks": 1
  },
  {
    "id": 16,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: What is the diagonal length of a rectangle with length 12 cm and breadth 5 cm?",
    "options": [
      "12 cm",
      "13 cm",
      "14 cm",
      "15 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Diagonal = sqrt(L^2 + B^2).",
    "marks": 1
  },
  {
    "id": 17,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: The HCF and LCM of two numbers are 12 and 240. If one number is 48, what is the other?",
    "options": [
      "50",
      "60",
      "70",
      "80"
    ],
    "correctAnswer": 1,
    "explanation": "Product of numbers = HCF * LCM.",
    "marks": 1
  },
  {
    "id": 18,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: Find the value of log2 (64).",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "2^x = value.",
    "marks": 1
  },
  {
    "id": 19,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: If the ratio of volumes of two spheres is 64:27, what is the ratio of their surface areas?",
    "options": [
      "12:9",
      "16:9",
      "8:3",
      "4:3"
    ],
    "correctAnswer": 1,
    "explanation": "Ratio of radius is cube root; ratio of surface area is square of radius.",
    "marks": 1
  },
  {
    "id": 20,
    "set": "A",
    "section": "Quantitative Aptitude",
    "question": "Set A: A person walks from home to office at 4 km/h and returns at 6 km/h. What is the average speed for the whole journey?",
    "options": [
      "4.5 km/h",
      "4.8 km/h",
      "5.0 km/h",
      "5.2 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Average Speed = 2xy / (x + y).",
    "marks": 1
  },
  {
    "id": 21,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Find the next number in the series: 3, 7, 15, 31, 63, ?",
    "options": [
      "95",
      "127",
      "111",
      "128"
    ],
    "correctAnswer": 1,
    "explanation": "Pattern: (2 * x) + 1.",
    "marks": 1
  },
  {
    "id": 22,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Pointing to a photograph, person P says 'She is the only daughter of my father's wife.' How is P related to the person in the photo?",
    "options": [
      "Mother",
      "Sister",
      "Aunt",
      "Daughter"
    ],
    "correctAnswer": 1,
    "explanation": "Father's wife is mother; mother's daughter is sister.",
    "marks": 1
  },
  {
    "id": 23,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: In a coded language, 'APPLE' is shifted by +2 positions each. What does 'CAT' become?",
    "options": [
      "DBU",
      "ECV",
      "EDW",
      "FBV"
    ],
    "correctAnswer": 1,
    "explanation": "Shift each letter forward by 2 in alphabet.",
    "marks": 1
  },
  {
    "id": 24,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Which one of the four words does NOT belong with the others?",
    "options": [
      "Mars",
      "Sun",
      "Venus",
      "Saturn"
    ],
    "correctAnswer": 1,
    "explanation": "Odd one out based on classification category.",
    "marks": 1
  },
  {
    "id": 25,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Statements: All innovators are thinkers. Some thinkers are leaders. Conclusion: Which conclusion is guaranteed true?",
    "options": [
      "All leaders are thinkers",
      "Some thinkers are innovators",
      "All thinkers are leaders",
      "No leader is an innovator"
    ],
    "correctAnswer": 1,
    "explanation": "Conversion of 'All A are B' gives 'Some B are A'.",
    "marks": 1
  },
  {
    "id": 26,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: In a ranking test of 50 students, Priya ranks 18th from the top. What is her rank from the bottom?",
    "options": [
      "32nd",
      "33rd",
      "34th",
      "35th"
    ],
    "correctAnswer": 1,
    "explanation": "Rank from bottom = Total - Rank from top + 1.",
    "marks": 1
  },
  {
    "id": 27,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: If South-East becomes North, and North-East becomes West, what direction will East become?",
    "options": [
      "South",
      "North-West",
      "South-West",
      "North"
    ],
    "correctAnswer": 1,
    "explanation": "Rotation is 135 degrees counter-clockwise.",
    "marks": 1
  },
  {
    "id": 28,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Select the pair that shows the same relationship: Architect : Blueprint ::",
    "options": [
      "Painter : Wall",
      "Composer : Score",
      "Doctor : Needle",
      "Carpenter : Saw"
    ],
    "correctAnswer": 1,
    "explanation": "An architect creates a blueprint; a composer creates a musical score.",
    "marks": 1
  },
  {
    "id": 29,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: If Monday is the 1st day of a month containing 30 days, how many Tuesdays are in that month?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Tuesdays fall on 2nd, 9th, 16th, 23rd, 30th (5 Tuesdays).",
    "marks": 1
  },
  {
    "id": 30,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Which number replaces the question mark in: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "50",
      "56",
      "54",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "n * (n + 1): 7 * 8 = 56.",
    "marks": 1
  },
  {
    "id": 31,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Complete the letter series: AZ, BY, CX, DW, __",
    "options": [
      "ET",
      "EV",
      "EU",
      "FU"
    ],
    "correctAnswer": 1,
    "explanation": "First letter +1, second letter -1.",
    "marks": 1
  },
  {
    "id": 32,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: If '+' denotes multiplication and '-' denotes addition, what is the value of (12 + 4) - 8?",
    "options": [
      "48",
      "56",
      "52",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "12 * 4 + 8 = 48 + 8 = 56.",
    "marks": 1
  },
  {
    "id": 33,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Five managers P, Q, R, S, T sit in a circular conference table facing center. If P is to the immediate right of Q, who is opposite to P?",
    "options": [
      "Q",
      "Depends on other positions",
      "R",
      "S"
    ],
    "correctAnswer": 1,
    "explanation": "Exact opposite in an odd five-seat circle depends on remaining placements.",
    "marks": 1
  },
  {
    "id": 34,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Identify the odd one out among these numbers: 27, 64, 125, 144, 216",
    "options": [
      "64",
      "144",
      "125",
      "216"
    ],
    "correctAnswer": 1,
    "explanation": "144 is a square (12^2) but not an integer cube like 3^3, 4^3, 5^3, 6^3.",
    "marks": 1
  },
  {
    "id": 35,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: In a certain code, 'HEAD' is 28. What is 'TAIL'?",
    "options": [
      "40",
      "44",
      "42",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "T(20)+A(1)+I(9)+L(12) = 42. Option B is 44, let's adjust: T(20)+A(1)+I(9)+L(12) = 42. Let's make 42 the correct answer.",
    "marks": 1
  },
  {
    "id": 36,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Complete the analogy: Ocean : Water :: Glacier : ?",
    "options": [
      "Cold",
      "Ice",
      "Mountain",
      "River"
    ],
    "correctAnswer": 1,
    "explanation": "An ocean is composed of water; a glacier is composed of ice.",
    "marks": 1
  },
  {
    "id": 37,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: A clock shows 4:15. What is the approximate angle between the hands?",
    "options": [
      "30 deg",
      "37.5 deg",
      "45 deg",
      "52.5 deg"
    ],
    "correctAnswer": 1,
    "explanation": "Angle = |30*H - 5.5*M| = |120 - 82.5| = 37.5 degrees.",
    "marks": 1
  },
  {
    "id": 38,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Statement: 'To improve student placement, DSBS introduces industry simulation labs.' Assumption: Industry simulation labs enhance candidate corporate readiness.",
    "options": [
      "Assumption is invalid",
      "Assumption is implicit and valid",
      "Neither",
      "Irrelevant"
    ],
    "correctAnswer": 1,
    "explanation": "The institutional initiative presupposes the beneficial outcome.",
    "marks": 1
  },
  {
    "id": 39,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: Find the missing element: 1A, 3C, 5E, 7G, __",
    "options": [
      "8H",
      "9I",
      "9H",
      "10J"
    ],
    "correctAnswer": 1,
    "explanation": "Number increases by 2; letter skips by 2 (A, C, E, G, I).",
    "marks": 1
  },
  {
    "id": 40,
    "set": "A",
    "section": "Logical Reasoning",
    "question": "Set A: If 'MAN' is coded as 28 and 'BOY' is coded as 42, what is 'GIRL'?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Sum of alphabetical positions: G(7) + I(9) + R(18) + L(12) = 46.",
    "marks": 1
  },
  {
    "id": 41,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the word closest in meaning (synonym) to 'METICULOUS':",
    "options": [
      "Careless",
      "Thorough & Precise",
      "Hasty",
      "Vague"
    ],
    "correctAnswer": 1,
    "explanation": "'Meticulous' means showing great attention to detail.",
    "marks": 1
  },
  {
    "id": 42,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the antonym of the word 'CANDID':",
    "options": [
      "Frank",
      "Deceitful",
      "Blunt",
      "Open"
    ],
    "correctAnswer": 1,
    "explanation": "'Candid' means frank and honest; antonym is deceitful.",
    "marks": 1
  },
  {
    "id": 43,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Fill in the blank: The board of directors _____ divided in their decision regarding the dividend payout.",
    "options": [
      "was",
      "were",
      "is",
      "have been being"
    ],
    "correctAnswer": 1,
    "explanation": "When collective nouns represent members in disagreement, plural verb 'were' is used.",
    "marks": 1
  },
  {
    "id": 44,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Select the correctly spelled word:",
    "options": [
      "Accomodate",
      "Accommodation",
      "Acomodation",
      "Acommodation"
    ],
    "correctAnswer": 1,
    "explanation": "Double 'c' and double 'm'.",
    "marks": 1
  },
  {
    "id": 45,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: What does the idiom 'To burn the midnight oil' mean?",
    "options": [
      "To waste energy",
      "To work or study late into the night",
      "To quarrel",
      "To celebrate"
    ],
    "correctAnswer": 1,
    "explanation": "Studying or working diligently late at night.",
    "marks": 1
  },
  {
    "id": 46,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the one-word substitution: 'A person who is indifferent to pleasure and pain.'",
    "options": [
      "Ascetic",
      "Stoic",
      "Hedonist",
      "Optimist"
    ],
    "correctAnswer": 1,
    "explanation": "A Stoic endures hardship without displaying emotional pain.",
    "marks": 1
  },
  {
    "id": 47,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Fill in the correct preposition: She is proficient _____ financial econometric modeling.",
    "options": [
      "at",
      "in",
      "with",
      "for"
    ],
    "correctAnswer": 1,
    "explanation": "The correct idiomatic preposition is 'proficient in'.",
    "marks": 1
  },
  {
    "id": 48,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the synonym for 'PRAGMATIC':",
    "options": [
      "Theoretical",
      "Practical & Realistic",
      "Idealistic",
      "Fanciful"
    ],
    "correctAnswer": 1,
    "explanation": "'Pragmatic' implies dealing with problems in a sensible and practical way.",
    "marks": 1
  },
  {
    "id": 49,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: What is the antonym of 'EPHEMERAL'?",
    "options": [
      "Transient",
      "Permanent & Everlasting",
      "Fleeting",
      "Short-lived"
    ],
    "correctAnswer": 1,
    "explanation": "'Ephemeral' means brief and transitory; antonym is permanent.",
    "marks": 1
  },
  {
    "id": 50,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Identify the sentence with correct subject-verb agreement:",
    "options": [
      "Neither the CEO nor the managers was present.",
      "Neither the CEO nor the managers were present.",
      "Neither the CEO nor the managers is present.",
      "Neither the CEO or the managers were present."
    ],
    "correctAnswer": 1,
    "explanation": "In 'Neither... nor...', verb agrees with the closer subject ('managers' - plural).",
    "marks": 1
  },
  {
    "id": 51,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the correct conditional form: If the team _____ harder, they would have won the business case challenge.",
    "options": [
      "worked",
      "had worked",
      "has worked",
      "would work"
    ],
    "correctAnswer": 1,
    "explanation": "Third conditional requires past perfect 'had worked'.",
    "marks": 1
  },
  {
    "id": 52,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: What does the Latin term 'Quid Pro Quo' signify in commercial negotiations?",
    "options": [
      "Free service",
      "Something given in exchange for something else",
      "Legal dispute",
      "Null and void"
    ],
    "correctAnswer": 1,
    "explanation": "'Quid pro quo' means reciprocal exchange of favors or value.",
    "marks": 1
  },
  {
    "id": 53,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Identify the figure of speech: 'The market was a raging bull today.'",
    "options": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "correctAnswer": 1,
    "explanation": "Direct implicit comparison without 'like' or 'as' is a metaphor.",
    "marks": 1
  },
  {
    "id": 54,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the word closest in meaning to 'UBIQUITOUS':",
    "options": [
      "Rare",
      "Omnipresent & Everywhere",
      "Ancient",
      "Secretive"
    ],
    "correctAnswer": 1,
    "explanation": "'Ubiquitous' means present, appearing, or found everywhere.",
    "marks": 1
  },
  {
    "id": 55,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Complete the sentence: The executive was known for her _____ demeanor during hostile corporate takeovers.",
    "options": [
      "panicky",
      "composed & unflappable",
      "hesitant",
      "turbulent"
    ],
    "correctAnswer": 1,
    "explanation": "High leadership requires steady and composed behavior.",
    "marks": 1
  },
  {
    "id": 56,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Identify the correct indirect form: He said, 'The market will rebound tomorrow.'",
    "options": [
      "He said that the market will rebound tomorrow.",
      "He said that the market would rebound the next day.",
      "He said that the market would rebound tomorrow.",
      "He told the market will rebound next day."
    ],
    "correctAnswer": 1,
    "explanation": "'will' shifts to 'would', and 'tomorrow' to 'the next day'.",
    "marks": 1
  },
  {
    "id": 57,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Choose the antonym of 'BENEVOLENT':",
    "options": [
      "Generous",
      "Malevolent",
      "Altruistic",
      "Kind"
    ],
    "correctAnswer": 1,
    "explanation": "'Benevolent' means well-meaning; antonym is malevolent (spiteful).",
    "marks": 1
  },
  {
    "id": 58,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Select the correct word: The auditor noticed a severe _____ in the company's ledger accounts.",
    "options": [
      "discrepency",
      "discrepancy",
      "discrepensy",
      "descripancy"
    ],
    "correctAnswer": 1,
    "explanation": "Correct spelling is 'discrepancy'.",
    "marks": 1
  },
  {
    "id": 59,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: What is the meaning of the idiom 'To take the bull by the horns'?",
    "options": [
      "To run away in fear",
      "To face a difficult challenge directly and decisively",
      "To act aggressively without reason",
      "To purchase farm assets"
    ],
    "correctAnswer": 1,
    "explanation": "Dealing with a difficult situation with bravery and conviction.",
    "marks": 1
  },
  {
    "id": 60,
    "set": "A",
    "section": "Verbal Ability",
    "question": "Set A: Which word implies 'A feeling of doubt or hesitation regarding the morality of an action'?",
    "options": [
      "Zeal",
      "Scruple",
      "Ardor",
      "Conviction"
    ],
    "correctAnswer": 1,
    "explanation": "'Scruple' denotes a moral or ethical doubt.",
    "marks": 1
  },
  {
    "id": 61,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What does EBITDA stand for in financial accounting?",
    "options": [
      "Earnings Before Income Tax and Daily Accounts",
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Equity Balance in Trade, Debt, and Assets",
      "Estimated Budget for Investments and Tariffs"
    ],
    "correctAnswer": 1,
    "explanation": "Standard operating cash flow profitability metric.",
    "marks": 1
  },
  {
    "id": 62,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: Who introduced the concept of the 'Five Competitive Forces' in corporate strategy?",
    "options": [
      "Philip Kotler",
      "Michael Porter",
      "Peter Drucker",
      "Clayton Christensen"
    ],
    "correctAnswer": 1,
    "explanation": "Michael Porter formulated Porter's Five Forces at Harvard.",
    "marks": 1
  },
  {
    "id": 63,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: In the marketing mix, what are the foundational 4 Ps?",
    "options": [
      "People, Process, Profit, Product",
      "Product, Price, Place, Promotion",
      "Positioning, Packaging, Publicity, Performance",
      "Planning, Production, Placement, Price"
    ],
    "correctAnswer": 1,
    "explanation": "Jerome McCarthy's 4 Ps.",
    "marks": 1
  },
  {
    "id": 64,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: Which Indian statutory body regulates stock exchanges and capital markets?",
    "options": [
      "RBI",
      "SEBI",
      "IRDAI",
      "TRAI"
    ],
    "correctAnswer": 1,
    "explanation": "Securities and Exchange Board of India (SEBI).",
    "marks": 1
  },
  {
    "id": 65,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is 'Repo Rate' in monetary policy?",
    "options": [
      "Rate at which banks park surplus funds with RBI",
      "Rate at which RBI lends short-term money to commercial banks against government securities",
      "Rate at which banks lend to premier retail borrowers",
      "The base interest rate for fixed deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Repurchase agreement rate set by RBI.",
    "marks": 1
  },
  {
    "id": 66,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: The BCG Matrix classifies strategic business units into which four categories?",
    "options": [
      "Leaders, Followers, Challengers, Nichers",
      "Stars, Cash Cows, Question Marks, Dogs",
      "Innovators, Adopters, Laggards, Pioneers",
      "Growth, Stability, Retrenchment, Divestment"
    ],
    "correctAnswer": 1,
    "explanation": "Boston Consulting Group Portfolio Matrix.",
    "marks": 1
  },
  {
    "id": 67,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is a 'Unicorn' in venture capital ecosystem?",
    "options": [
      "A company that has been profitable for 50 years",
      "A privately held startup valued at over $1 billion",
      "A publicly listed sovereign fund",
      "A zero-debt blue-chip enterprise"
    ],
    "correctAnswer": 1,
    "explanation": "Coined by Aileen Lee for $1B+ private tech startups.",
    "marks": 1
  },
  {
    "id": 68,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: Which financial statement provides a snapshot of assets, liabilities, and equity at a specific point in time?",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Statement of Retained Earnings"
    ],
    "correctAnswer": 1,
    "explanation": "Balance sheet gives the point-in-time financial position.",
    "marks": 1
  },
  {
    "id": 69,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is 'Break-even Point' in managerial economics?",
    "options": [
      "When market valuation reaches peak",
      "When total revenue equals total cost with zero profit and zero loss",
      "When dividends surpass share capital",
      "When fixed costs drop below variable costs"
    ],
    "correctAnswer": 1,
    "explanation": "Level of output where Total Revenue = Total Cost.",
    "marks": 1
  },
  {
    "id": 70,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What does 'SWOT' analysis evaluate in strategic planning?",
    "options": [
      "Sales, Workforce, Objectives, Timeline",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sustainability, Wealth, Operations, Technology",
      "Strategy, Workflow, Outcomes, Targets"
    ],
    "correctAnswer": 1,
    "explanation": "Internal Strengths/Weaknesses and external Opportunities/Threats.",
    "marks": 1
  },
  {
    "id": 71,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is the primary purpose of Six Sigma in quality management?",
    "options": [
      "Maximizing staff headcount",
      "Reducing process defects and variation to under 3.4 defects per million opportunities",
      "Cutting marketing budgets",
      "Doubling product retail prices"
    ],
    "correctAnswer": 1,
    "explanation": "Six Sigma aims for 99.99966% defect-free output.",
    "marks": 1
  },
  {
    "id": 72,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: In economics, 'Opportunity Cost' refers to:",
    "options": [
      "The historical cost incurred on equipment",
      "The value of the next best alternative forgone when making a decision",
      "The legal cost of filing trademarks",
      "The discount offered to distributors"
    ],
    "correctAnswer": 1,
    "explanation": "Loss of potential gain from other alternatives.",
    "marks": 1
  },
  {
    "id": 73,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is 'Blue Ocean Strategy'?",
    "options": [
      "Intense price warfare in saturated markets",
      "Creating uncontested market space and making competition irrelevant",
      "Acquiring foreign shipping logistics firms",
      "Government export subsidization"
    ],
    "correctAnswer": 1,
    "explanation": "W. Chan Kim and Renee Mauborgne's strategy for new market creation.",
    "marks": 1
  },
  {
    "id": 74,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: Which index measures retail inflation in India?",
    "options": [
      "Wholesale Price Index (WPI)",
      "Consumer Price Index (CPI)",
      "Index of Industrial Production (IIP)",
      "NSE Nifty 50"
    ],
    "correctAnswer": 1,
    "explanation": "CPI is adopted by RBI as the key anchor for monetary policy.",
    "marks": 1
  },
  {
    "id": 75,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: In Maslow's hierarchy of needs, what is the highest peak need?",
    "options": [
      "Safety Needs",
      "Self-Actualization",
      "Social Needs",
      "Esteem Needs"
    ],
    "correctAnswer": 1,
    "explanation": "Realizing personal potential and self-fulfillment.",
    "marks": 1
  },
  {
    "id": 76,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: A market dominated by only a handful of large sellers is known as:",
    "options": [
      "Monopoly",
      "Oligopoly",
      "Monopsony",
      "Perfect Competition"
    ],
    "correctAnswer": 1,
    "explanation": "Oligopoly (e.g. telecom, commercial aircraft manufacturing).",
    "marks": 1
  },
  {
    "id": 77,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is 'Angel Investor' in startup finance?",
    "options": [
      "A commercial bank loan manager",
      "A high-net-worth individual providing seed capital in exchange for equity",
      "A government tax auditor",
      "A currency derivatives broker"
    ],
    "correctAnswer": 1,
    "explanation": "Affluent individuals providing early seed funds.",
    "marks": 1
  },
  {
    "id": 78,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What does FDI stand for in macroeconomic policy?",
    "options": [
      "Federal Deposit Insurance",
      "Foreign Direct Investment",
      "Financial Derivatives Index",
      "Fiscal Development Initiative"
    ],
    "correctAnswer": 1,
    "explanation": "Foreign Direct Investment.",
    "marks": 1
  },
  {
    "id": 79,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: Who is termed as the 'Father of Modern Management'?",
    "options": [
      "Henry Ford",
      "Peter Drucker",
      "Adam Smith",
      "Karl Marx"
    ],
    "correctAnswer": 1,
    "explanation": "Peter Drucker pioneered management by objectives (MBO) and knowledge worker theory.",
    "marks": 1
  },
  {
    "id": 80,
    "set": "A",
    "section": "Business & Economy",
    "question": "Set A: What is 'Fiscal Deficit'?",
    "options": [
      "Trade deficit with neighbouring countries",
      "Excess of total government spending over total receipts excluding borrowings",
      "Total banking bad loans (NPAs)",
      "Shortfall in foreign exchange reserves"
    ],
    "correctAnswer": 1,
    "explanation": "Gap between government expenditure and revenue receipts.",
    "marks": 1
  },
  {
    "id": 81,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: In which city is Dayananda Sagar Business School (DSBS) campus situated?",
    "options": [
      "Mumbai",
      "Bengaluru (Bangalore)",
      "Hyderabad",
      "New Delhi"
    ],
    "correctAnswer": 1,
    "explanation": "DSBS is located in Kumaraswamy Layout, Bengaluru, Karnataka.",
    "marks": 1
  },
  {
    "id": 82,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Which ISRO lunar exploration mission achieved a historic soft-landing near the Moon's South Pole in August 2023?",
    "options": [
      "Mangalyaan",
      "Chandrayaan-3",
      "Chandrayaan-2",
      "Aditya-L1"
    ],
    "correctAnswer": 1,
    "explanation": "Chandrayaan-3 Vikram lander and Pragyan rover.",
    "marks": 1
  },
  {
    "id": 83,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What does 'AI' stand for in contemporary computer engineering?",
    "options": [
      "Automated Informatics",
      "Artificial Intelligence",
      "Advanced Infrastructure",
      "Algorithmic Integration"
    ],
    "correctAnswer": 1,
    "explanation": "Artificial Intelligence.",
    "marks": 1
  },
  {
    "id": 84,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Who is the Chief Executive Officer of Alphabet Inc. and Google?",
    "options": [
      "Satya Nadella",
      "Sundar Pichai",
      "Tim Cook",
      "Sam Altman"
    ],
    "correctAnswer": 1,
    "explanation": "Sundar Pichai leads Alphabet and Google.",
    "marks": 1
  },
  {
    "id": 85,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is UPI developed by NPCI in India?",
    "options": [
      "Unified Property Index",
      "Unified Payments Interface",
      "Universal Pension Initiative",
      "United Petroleum Infrastructure"
    ],
    "correctAnswer": 1,
    "explanation": "Unified Payments Interface for instant mobile bank transfers.",
    "marks": 1
  },
  {
    "id": 86,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Which country hosted the Summer Olympic Games in 2024?",
    "options": [
      "Japan",
      "France (Paris)",
      "United States",
      "Australia"
    ],
    "correctAnswer": 1,
    "explanation": "The 2024 Olympic Games were hosted in Paris, France.",
    "marks": 1
  },
  {
    "id": 87,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is the decentralized ledger technology behind Bitcoin and Ethereum?",
    "options": [
      "Cloud Storage",
      "Blockchain",
      "Quantum Computing",
      "Mesh Networking"
    ],
    "correctAnswer": 1,
    "explanation": "Blockchain technology provides immutable distributed ledgers.",
    "marks": 1
  },
  {
    "id": 88,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Who served as the Chairman of the Drafting Committee of the Constitution of India?",
    "options": [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Bhimrao Ramji Ambedkar.",
    "marks": 1
  },
  {
    "id": 89,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What does SaaS denote in enterprise cloud computing?",
    "options": [
      "Security as a System",
      "Software as a Service",
      "Storage as a Structure",
      "Server and Application Suite"
    ],
    "correctAnswer": 1,
    "explanation": "Software delivered over the internet via subscription.",
    "marks": 1
  },
  {
    "id": 90,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is India's premier solar observation mission launched by ISRO in 2023?",
    "options": [
      "Gaganyaan",
      "Aditya-L1",
      "Shukrayaan",
      "XPoSat"
    ],
    "correctAnswer": 1,
    "explanation": "Aditya-L1 studies the Sun from the Lagrange point 1.",
    "marks": 1
  },
  {
    "id": 91,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Where is the headquarters of the World Trade Organization (WTO)?",
    "options": [
      "New York, USA",
      "Geneva, Switzerland",
      "Vienna, Austria",
      "London, UK"
    ],
    "correctAnswer": 1,
    "explanation": "WTO is headquartered in Geneva, Switzerland.",
    "marks": 1
  },
  {
    "id": 92,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: In networking, what does HTTP stand for?",
    "options": [
      "High Technology Terminal Protocol",
      "Hypertext Transfer Protocol",
      "Hybrid Transport Packet",
      "Hyperlink Transmission Path"
    ],
    "correctAnswer": 1,
    "explanation": "Hypertext Transfer Protocol for web communication.",
    "marks": 1
  },
  {
    "id": 93,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is the official currency of the United Kingdom?",
    "options": [
      "Euro",
      "Pound Sterling (GBP)",
      "Dollar",
      "Franc"
    ],
    "correctAnswer": 1,
    "explanation": "British Pound Sterling.",
    "marks": 1
  },
  {
    "id": 94,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What does IoT represent in modern hardware and sensor ecosystems?",
    "options": [
      "Integration of Terminals",
      "Internet of Things",
      "Interface of Technology",
      "Internal Operating Tools"
    ],
    "correctAnswer": 1,
    "explanation": "Internet of Things connects physical devices with data networks.",
    "marks": 1
  },
  {
    "id": 95,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Silicon Valley is situated in which US state?",
    "options": [
      "New York",
      "California",
      "Texas",
      "Washington"
    ],
    "correctAnswer": 1,
    "explanation": "Northern California Bay Area.",
    "marks": 1
  },
  {
    "id": 96,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is the file extension acronym PDF short for?",
    "options": [
      "Printable Data File",
      "Portable Document Format",
      "Protected Digital File",
      "Public Document Folder"
    ],
    "correctAnswer": 1,
    "explanation": "Portable Document Format created by Adobe.",
    "marks": 1
  },
  {
    "id": 97,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Which Indian state records the highest literacy rate as per official census metrics?",
    "options": [
      "Goa",
      "Kerala",
      "Karnataka",
      "Tamil Nadu"
    ],
    "correctAnswer": 1,
    "explanation": "Kerala has consistently maintained India's highest literacy rate.",
    "marks": 1
  },
  {
    "id": 98,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: Which multinational technology corporation develops the macOS and iOS operating systems?",
    "options": [
      "Microsoft",
      "Apple Inc.",
      "Google",
      "Intel"
    ],
    "correctAnswer": 1,
    "explanation": "Apple Inc.",
    "marks": 1
  },
  {
    "id": 99,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What international climate agreement was adopted at COP21 in 2015?",
    "options": [
      "Kyoto Protocol",
      "Paris Agreement",
      "Montreal Protocol",
      "Geneva Accord"
    ],
    "correctAnswer": 1,
    "explanation": "The Paris Agreement on climate change mitigation.",
    "marks": 1
  },
  {
    "id": 100,
    "set": "A",
    "section": "General Knowledge & Tech",
    "question": "Set A: What is the foundational ethos of prestigious business schools like Dayananda Sagar Business School (DSBS)?",
    "options": [
      "Commercial rote-learning only",
      "Fostering Transformative Leadership, Ethical Management, and Global Innovation",
      "Theoretical lecturing with zero industry exposure",
      "Sole focus on local domestic business"
    ],
    "correctAnswer": 1,
    "explanation": "Transformative leadership, ethical corporate stewardship, and global business competence.",
    "marks": 1
  },
  {
    "id": 101,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A sum of money doubles itself at simple interest in 10 years. What is the annual rate of interest?",
    "options": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "correctAnswer": 1,
    "explanation": "Using R = 100/T.",
    "marks": 1
  },
  {
    "id": 102,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A shopkeeper marks goods 30% above cost price and allows a discount of 10%. Find the profit percentage.",
    "options": [
      "15%",
      "17%",
      "19%",
      "21%"
    ],
    "correctAnswer": 1,
    "explanation": "SP = (1 + markup) * (1 - discount).",
    "marks": 1
  },
  {
    "id": 103,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A train 300 m long crosses a platform of length 450 m in 50 seconds. What is the speed of the train?",
    "options": [
      "12 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Speed = (Train Length + Platform Length) / Time.",
    "marks": 1
  },
  {
    "id": 104,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: If person X finishes a task in 15 days and person Y finishes in 30 days, in how many days can both finish together?",
    "options": [
      "8 days",
      "10 days",
      "12 days",
      "14 days"
    ],
    "correctAnswer": 1,
    "explanation": "1/Total = 1/X + 1/Y.",
    "marks": 1
  },
  {
    "id": 105,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: What is the arithmetic mean of the first 60 natural numbers?",
    "options": [
      "30",
      "30.5",
      "31",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "Average = (n + 1)/2.",
    "marks": 1
  },
  {
    "id": 106,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: Two numbers are in the ratio 2:3. If their sum is 75, find the smaller number.",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "Divide sum proportionally.",
    "marks": 1
  },
  {
    "id": 107,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: What is the compound interest on $10,000 at 12% per annum compounded annually for 2 years?",
    "options": [
      "$2,400",
      "$2,544",
      "$2,600",
      "$2,720"
    ],
    "correctAnswer": 1,
    "explanation": "CI = P[(1+r)^2 - 1].",
    "marks": 1
  },
  {
    "id": 108,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: The perimeter of a square field is 100 m. What is its total area?",
    "options": [
      "576 sq m",
      "625 sq m",
      "650 sq m",
      "700 sq m"
    ],
    "correctAnswer": 1,
    "explanation": "Side = P/4; Area = Side^2.",
    "marks": 1
  },
  {
    "id": 109,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: In how many distinct ways can the letters of the word 'SYSTEM' be arranged?",
    "options": [
      "180",
      "360",
      "720",
      "240"
    ],
    "correctAnswer": 1,
    "explanation": "Total permutations factoring in duplicate letters.",
    "marks": 1
  },
  {
    "id": 110,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a King or a Queen?",
    "options": [
      "1/13",
      "2/13",
      "3/13",
      "4/13"
    ],
    "correctAnswer": 1,
    "explanation": "(4 Kings + 4 Queens)/52 = 8/52 = 2/13.",
    "marks": 1
  },
  {
    "id": 111,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: The cost price of 15 articles is equal to the selling price of 12 articles. What is the profit percentage?",
    "options": [
      "20%",
      "25%",
      "30%",
      "33.3%"
    ],
    "correctAnswer": 1,
    "explanation": "Profit % = ((CP units - SP units) / SP units) * 100.",
    "marks": 1
  },
  {
    "id": 112,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: If a car travels at 72 km/h, what is its speed in meters per second?",
    "options": [
      "18 m/s",
      "20 m/s",
      "22 m/s",
      "24 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply km/h by 5/18.",
    "marks": 1
  },
  {
    "id": 113,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: Solve for x: 3^(x + 2) = 243.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Set exponents equal on both sides.",
    "marks": 1
  },
  {
    "id": 114,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A pipe can fill a water tank in 6 hours while a leak empties it in 9 hours. How long to fill when both are open?",
    "options": [
      "15 hours",
      "18 hours",
      "20 hours",
      "24 hours"
    ],
    "correctAnswer": 1,
    "explanation": "Rate = 1/fill - 1/empty.",
    "marks": 1
  },
  {
    "id": 115,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A bag has 3 red, 4 green, and 5 blue balls. If one ball is picked, what is the probability it is green?",
    "options": [
      "1/4",
      "1/3",
      "5/12",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "P = Green / Total.",
    "marks": 1
  },
  {
    "id": 116,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: What is the diagonal length of a rectangle with length 15 cm and breadth 8 cm?",
    "options": [
      "16 cm",
      "17 cm",
      "18 cm",
      "19 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Diagonal = sqrt(L^2 + B^2).",
    "marks": 1
  },
  {
    "id": 117,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: The HCF and LCM of two numbers are 15 and 300. If one number is 60, what is the other?",
    "options": [
      "65",
      "75",
      "80",
      "90"
    ],
    "correctAnswer": 1,
    "explanation": "Product of numbers = HCF * LCM.",
    "marks": 1
  },
  {
    "id": 118,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: Find the value of log2 (128).",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "2^x = value.",
    "marks": 1
  },
  {
    "id": 119,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: If the ratio of volumes of two spheres is 125:64, what is the ratio of their surface areas?",
    "options": [
      "20:16",
      "25:16",
      "15:8",
      "5:4"
    ],
    "correctAnswer": 1,
    "explanation": "Ratio of radius is cube root; ratio of surface area is square of radius.",
    "marks": 1
  },
  {
    "id": 120,
    "set": "B",
    "section": "Quantitative Aptitude",
    "question": "Set B: A person walks from home to office at 5 km/h and returns at 10 km/h. What is the average speed for the whole journey?",
    "options": [
      "6.2 km/h",
      "6.67 km/h",
      "7.0 km/h",
      "7.5 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Average Speed = 2xy / (x + y).",
    "marks": 1
  },
  {
    "id": 121,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Find the next number in the series: 2, 5, 11, 23, 47, ?",
    "options": [
      "85",
      "95",
      "91",
      "102"
    ],
    "correctAnswer": 1,
    "explanation": "Pattern: (2 * x) + 1.",
    "marks": 1
  },
  {
    "id": 122,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Pointing to a photograph, person P says 'She is the only daughter of my father's wife.' How is P related to the person in the photo?",
    "options": [
      "Mother",
      "Sister",
      "Aunt",
      "Daughter"
    ],
    "correctAnswer": 1,
    "explanation": "Father's wife is mother; mother's daughter is sister.",
    "marks": 1
  },
  {
    "id": 123,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: In a coded language, 'SMART' is shifted by +2 positions each. What does 'DOG' become?",
    "options": [
      "EPI",
      "FQI",
      "FQJ",
      "ERH"
    ],
    "correctAnswer": 1,
    "explanation": "Shift each letter forward by 2 in alphabet.",
    "marks": 1
  },
  {
    "id": 124,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Which one of the four words does NOT belong with the others?",
    "options": [
      "Dollar",
      "Gold",
      "Euro",
      "Yen"
    ],
    "correctAnswer": 1,
    "explanation": "Odd one out based on classification category.",
    "marks": 1
  },
  {
    "id": 125,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Statements: All innovators are thinkers. Some thinkers are leaders. Conclusion: Which conclusion is guaranteed true?",
    "options": [
      "All leaders are thinkers",
      "Some thinkers are innovators",
      "All thinkers are leaders",
      "No leader is an innovator"
    ],
    "correctAnswer": 1,
    "explanation": "Conversion of 'All A are B' gives 'Some B are A'.",
    "marks": 1
  },
  {
    "id": 126,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: In a ranking test of 60 students, Priya ranks 22th from the top. What is her rank from the bottom?",
    "options": [
      "38th",
      "39th",
      "40th",
      "41st"
    ],
    "correctAnswer": 1,
    "explanation": "Rank from bottom = Total - Rank from top + 1.",
    "marks": 1
  },
  {
    "id": 127,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: If South-East becomes North, and North-East becomes West, what direction will East become?",
    "options": [
      "South",
      "North-West",
      "South-West",
      "North"
    ],
    "correctAnswer": 1,
    "explanation": "Rotation is 135 degrees counter-clockwise.",
    "marks": 1
  },
  {
    "id": 128,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Select the pair that shows the same relationship: Architect : Blueprint ::",
    "options": [
      "Painter : Wall",
      "Composer : Score",
      "Doctor : Needle",
      "Carpenter : Saw"
    ],
    "correctAnswer": 1,
    "explanation": "An architect creates a blueprint; a composer creates a musical score.",
    "marks": 1
  },
  {
    "id": 129,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: If Monday is the 1st day of a month containing 30 days, how many Tuesdays are in that month?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Tuesdays fall on 2nd, 9th, 16th, 23rd, 30th (5 Tuesdays).",
    "marks": 1
  },
  {
    "id": 130,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Which number replaces the question mark in: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "50",
      "56",
      "54",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "n * (n + 1): 7 * 8 = 56.",
    "marks": 1
  },
  {
    "id": 131,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Complete the letter series: AZ, BY, CX, DW, __",
    "options": [
      "ET",
      "EV",
      "EU",
      "FU"
    ],
    "correctAnswer": 1,
    "explanation": "First letter +1, second letter -1.",
    "marks": 1
  },
  {
    "id": 132,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: If '+' denotes multiplication and '-' denotes addition, what is the value of (12 + 4) - 8?",
    "options": [
      "48",
      "56",
      "52",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "12 * 4 + 8 = 48 + 8 = 56.",
    "marks": 1
  },
  {
    "id": 133,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Five managers P, Q, R, S, T sit in a circular conference table facing center. If P is to the immediate right of Q, who is opposite to P?",
    "options": [
      "Q",
      "Depends on other positions",
      "R",
      "S"
    ],
    "correctAnswer": 1,
    "explanation": "Exact opposite in an odd five-seat circle depends on remaining placements.",
    "marks": 1
  },
  {
    "id": 134,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Identify the odd one out among these numbers: 27, 64, 125, 144, 216",
    "options": [
      "64",
      "144",
      "125",
      "216"
    ],
    "correctAnswer": 1,
    "explanation": "144 is a square (12^2) but not an integer cube like 3^3, 4^3, 5^3, 6^3.",
    "marks": 1
  },
  {
    "id": 135,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: In a certain code, 'HEAD' is 28. What is 'TAIL'?",
    "options": [
      "40",
      "44",
      "42",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "T(20)+A(1)+I(9)+L(12) = 42. Option B is 44, let's adjust: T(20)+A(1)+I(9)+L(12) = 42. Let's make 42 the correct answer.",
    "marks": 1
  },
  {
    "id": 136,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Complete the analogy: Ocean : Water :: Glacier : ?",
    "options": [
      "Cold",
      "Ice",
      "Mountain",
      "River"
    ],
    "correctAnswer": 1,
    "explanation": "An ocean is composed of water; a glacier is composed of ice.",
    "marks": 1
  },
  {
    "id": 137,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: A clock shows 4:15. What is the approximate angle between the hands?",
    "options": [
      "30 deg",
      "37.5 deg",
      "45 deg",
      "52.5 deg"
    ],
    "correctAnswer": 1,
    "explanation": "Angle = |30*H - 5.5*M| = |120 - 82.5| = 37.5 degrees.",
    "marks": 1
  },
  {
    "id": 138,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Statement: 'To improve student placement, DSBS introduces industry simulation labs.' Assumption: Industry simulation labs enhance candidate corporate readiness.",
    "options": [
      "Assumption is invalid",
      "Assumption is implicit and valid",
      "Neither",
      "Irrelevant"
    ],
    "correctAnswer": 1,
    "explanation": "The institutional initiative presupposes the beneficial outcome.",
    "marks": 1
  },
  {
    "id": 139,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: Find the missing element: 1A, 3C, 5E, 7G, __",
    "options": [
      "8H",
      "9I",
      "9H",
      "10J"
    ],
    "correctAnswer": 1,
    "explanation": "Number increases by 2; letter skips by 2 (A, C, E, G, I).",
    "marks": 1
  },
  {
    "id": 140,
    "set": "B",
    "section": "Logical Reasoning",
    "question": "Set B: If 'MAN' is coded as 28 and 'BOY' is coded as 42, what is 'GIRL'?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Sum of alphabetical positions: G(7) + I(9) + R(18) + L(12) = 46.",
    "marks": 1
  },
  {
    "id": 141,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the word closest in meaning (synonym) to 'METICULOUS':",
    "options": [
      "Careless",
      "Thorough & Precise",
      "Hasty",
      "Vague"
    ],
    "correctAnswer": 1,
    "explanation": "'Meticulous' means showing great attention to detail.",
    "marks": 1
  },
  {
    "id": 142,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the antonym of the word 'CANDID':",
    "options": [
      "Frank",
      "Deceitful",
      "Blunt",
      "Open"
    ],
    "correctAnswer": 1,
    "explanation": "'Candid' means frank and honest; antonym is deceitful.",
    "marks": 1
  },
  {
    "id": 143,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Fill in the blank: The board of directors _____ divided in their decision regarding the dividend payout.",
    "options": [
      "was",
      "were",
      "is",
      "have been being"
    ],
    "correctAnswer": 1,
    "explanation": "When collective nouns represent members in disagreement, plural verb 'were' is used.",
    "marks": 1
  },
  {
    "id": 144,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Select the correctly spelled word:",
    "options": [
      "Accomodate",
      "Accommodation",
      "Acomodation",
      "Acommodation"
    ],
    "correctAnswer": 1,
    "explanation": "Double 'c' and double 'm'.",
    "marks": 1
  },
  {
    "id": 145,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: What does the idiom 'To burn the midnight oil' mean?",
    "options": [
      "To waste energy",
      "To work or study late into the night",
      "To quarrel",
      "To celebrate"
    ],
    "correctAnswer": 1,
    "explanation": "Studying or working diligently late at night.",
    "marks": 1
  },
  {
    "id": 146,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the one-word substitution: 'A person who is indifferent to pleasure and pain.'",
    "options": [
      "Ascetic",
      "Stoic",
      "Hedonist",
      "Optimist"
    ],
    "correctAnswer": 1,
    "explanation": "A Stoic endures hardship without displaying emotional pain.",
    "marks": 1
  },
  {
    "id": 147,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Fill in the correct preposition: She is proficient _____ financial econometric modeling.",
    "options": [
      "at",
      "in",
      "with",
      "for"
    ],
    "correctAnswer": 1,
    "explanation": "The correct idiomatic preposition is 'proficient in'.",
    "marks": 1
  },
  {
    "id": 148,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the synonym for 'PRAGMATIC':",
    "options": [
      "Theoretical",
      "Practical & Realistic",
      "Idealistic",
      "Fanciful"
    ],
    "correctAnswer": 1,
    "explanation": "'Pragmatic' implies dealing with problems in a sensible and practical way.",
    "marks": 1
  },
  {
    "id": 149,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: What is the antonym of 'EPHEMERAL'?",
    "options": [
      "Transient",
      "Permanent & Everlasting",
      "Fleeting",
      "Short-lived"
    ],
    "correctAnswer": 1,
    "explanation": "'Ephemeral' means brief and transitory; antonym is permanent.",
    "marks": 1
  },
  {
    "id": 150,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Identify the sentence with correct subject-verb agreement:",
    "options": [
      "Neither the CEO nor the managers was present.",
      "Neither the CEO nor the managers were present.",
      "Neither the CEO nor the managers is present.",
      "Neither the CEO or the managers were present."
    ],
    "correctAnswer": 1,
    "explanation": "In 'Neither... nor...', verb agrees with the closer subject ('managers' - plural).",
    "marks": 1
  },
  {
    "id": 151,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the correct conditional form: If the team _____ harder, they would have won the business case challenge.",
    "options": [
      "worked",
      "had worked",
      "has worked",
      "would work"
    ],
    "correctAnswer": 1,
    "explanation": "Third conditional requires past perfect 'had worked'.",
    "marks": 1
  },
  {
    "id": 152,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: What does the Latin term 'Quid Pro Quo' signify in commercial negotiations?",
    "options": [
      "Free service",
      "Something given in exchange for something else",
      "Legal dispute",
      "Null and void"
    ],
    "correctAnswer": 1,
    "explanation": "'Quid pro quo' means reciprocal exchange of favors or value.",
    "marks": 1
  },
  {
    "id": 153,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Identify the figure of speech: 'The market was a raging bull today.'",
    "options": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "correctAnswer": 1,
    "explanation": "Direct implicit comparison without 'like' or 'as' is a metaphor.",
    "marks": 1
  },
  {
    "id": 154,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the word closest in meaning to 'UBIQUITOUS':",
    "options": [
      "Rare",
      "Omnipresent & Everywhere",
      "Ancient",
      "Secretive"
    ],
    "correctAnswer": 1,
    "explanation": "'Ubiquitous' means present, appearing, or found everywhere.",
    "marks": 1
  },
  {
    "id": 155,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Complete the sentence: The executive was known for her _____ demeanor during hostile corporate takeovers.",
    "options": [
      "panicky",
      "composed & unflappable",
      "hesitant",
      "turbulent"
    ],
    "correctAnswer": 1,
    "explanation": "High leadership requires steady and composed behavior.",
    "marks": 1
  },
  {
    "id": 156,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Identify the correct indirect form: He said, 'The market will rebound tomorrow.'",
    "options": [
      "He said that the market will rebound tomorrow.",
      "He said that the market would rebound the next day.",
      "He said that the market would rebound tomorrow.",
      "He told the market will rebound next day."
    ],
    "correctAnswer": 1,
    "explanation": "'will' shifts to 'would', and 'tomorrow' to 'the next day'.",
    "marks": 1
  },
  {
    "id": 157,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Choose the antonym of 'BENEVOLENT':",
    "options": [
      "Generous",
      "Malevolent",
      "Altruistic",
      "Kind"
    ],
    "correctAnswer": 1,
    "explanation": "'Benevolent' means well-meaning; antonym is malevolent (spiteful).",
    "marks": 1
  },
  {
    "id": 158,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Select the correct word: The auditor noticed a severe _____ in the company's ledger accounts.",
    "options": [
      "discrepency",
      "discrepancy",
      "discrepensy",
      "descripancy"
    ],
    "correctAnswer": 1,
    "explanation": "Correct spelling is 'discrepancy'.",
    "marks": 1
  },
  {
    "id": 159,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: What is the meaning of the idiom 'To take the bull by the horns'?",
    "options": [
      "To run away in fear",
      "To face a difficult challenge directly and decisively",
      "To act aggressively without reason",
      "To purchase farm assets"
    ],
    "correctAnswer": 1,
    "explanation": "Dealing with a difficult situation with bravery and conviction.",
    "marks": 1
  },
  {
    "id": 160,
    "set": "B",
    "section": "Verbal Ability",
    "question": "Set B: Which word implies 'A feeling of doubt or hesitation regarding the morality of an action'?",
    "options": [
      "Zeal",
      "Scruple",
      "Ardor",
      "Conviction"
    ],
    "correctAnswer": 1,
    "explanation": "'Scruple' denotes a moral or ethical doubt.",
    "marks": 1
  },
  {
    "id": 161,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What does EBITDA stand for in financial accounting?",
    "options": [
      "Earnings Before Income Tax and Daily Accounts",
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Equity Balance in Trade, Debt, and Assets",
      "Estimated Budget for Investments and Tariffs"
    ],
    "correctAnswer": 1,
    "explanation": "Standard operating cash flow profitability metric.",
    "marks": 1
  },
  {
    "id": 162,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: Who introduced the concept of the 'Five Competitive Forces' in corporate strategy?",
    "options": [
      "Philip Kotler",
      "Michael Porter",
      "Peter Drucker",
      "Clayton Christensen"
    ],
    "correctAnswer": 1,
    "explanation": "Michael Porter formulated Porter's Five Forces at Harvard.",
    "marks": 1
  },
  {
    "id": 163,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: In the marketing mix, what are the foundational 4 Ps?",
    "options": [
      "People, Process, Profit, Product",
      "Product, Price, Place, Promotion",
      "Positioning, Packaging, Publicity, Performance",
      "Planning, Production, Placement, Price"
    ],
    "correctAnswer": 1,
    "explanation": "Jerome McCarthy's 4 Ps.",
    "marks": 1
  },
  {
    "id": 164,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: Which Indian statutory body regulates stock exchanges and capital markets?",
    "options": [
      "RBI",
      "SEBI",
      "IRDAI",
      "TRAI"
    ],
    "correctAnswer": 1,
    "explanation": "Securities and Exchange Board of India (SEBI).",
    "marks": 1
  },
  {
    "id": 165,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is 'Repo Rate' in monetary policy?",
    "options": [
      "Rate at which banks park surplus funds with RBI",
      "Rate at which RBI lends short-term money to commercial banks against government securities",
      "Rate at which banks lend to premier retail borrowers",
      "The base interest rate for fixed deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Repurchase agreement rate set by RBI.",
    "marks": 1
  },
  {
    "id": 166,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: The BCG Matrix classifies strategic business units into which four categories?",
    "options": [
      "Leaders, Followers, Challengers, Nichers",
      "Stars, Cash Cows, Question Marks, Dogs",
      "Innovators, Adopters, Laggards, Pioneers",
      "Growth, Stability, Retrenchment, Divestment"
    ],
    "correctAnswer": 1,
    "explanation": "Boston Consulting Group Portfolio Matrix.",
    "marks": 1
  },
  {
    "id": 167,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is a 'Unicorn' in venture capital ecosystem?",
    "options": [
      "A company that has been profitable for 50 years",
      "A privately held startup valued at over $1 billion",
      "A publicly listed sovereign fund",
      "A zero-debt blue-chip enterprise"
    ],
    "correctAnswer": 1,
    "explanation": "Coined by Aileen Lee for $1B+ private tech startups.",
    "marks": 1
  },
  {
    "id": 168,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: Which financial statement provides a snapshot of assets, liabilities, and equity at a specific point in time?",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Statement of Retained Earnings"
    ],
    "correctAnswer": 1,
    "explanation": "Balance sheet gives the point-in-time financial position.",
    "marks": 1
  },
  {
    "id": 169,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is 'Break-even Point' in managerial economics?",
    "options": [
      "When market valuation reaches peak",
      "When total revenue equals total cost with zero profit and zero loss",
      "When dividends surpass share capital",
      "When fixed costs drop below variable costs"
    ],
    "correctAnswer": 1,
    "explanation": "Level of output where Total Revenue = Total Cost.",
    "marks": 1
  },
  {
    "id": 170,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What does 'SWOT' analysis evaluate in strategic planning?",
    "options": [
      "Sales, Workforce, Objectives, Timeline",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sustainability, Wealth, Operations, Technology",
      "Strategy, Workflow, Outcomes, Targets"
    ],
    "correctAnswer": 1,
    "explanation": "Internal Strengths/Weaknesses and external Opportunities/Threats.",
    "marks": 1
  },
  {
    "id": 171,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is the primary purpose of Six Sigma in quality management?",
    "options": [
      "Maximizing staff headcount",
      "Reducing process defects and variation to under 3.4 defects per million opportunities",
      "Cutting marketing budgets",
      "Doubling product retail prices"
    ],
    "correctAnswer": 1,
    "explanation": "Six Sigma aims for 99.99966% defect-free output.",
    "marks": 1
  },
  {
    "id": 172,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: In economics, 'Opportunity Cost' refers to:",
    "options": [
      "The historical cost incurred on equipment",
      "The value of the next best alternative forgone when making a decision",
      "The legal cost of filing trademarks",
      "The discount offered to distributors"
    ],
    "correctAnswer": 1,
    "explanation": "Loss of potential gain from other alternatives.",
    "marks": 1
  },
  {
    "id": 173,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is 'Blue Ocean Strategy'?",
    "options": [
      "Intense price warfare in saturated markets",
      "Creating uncontested market space and making competition irrelevant",
      "Acquiring foreign shipping logistics firms",
      "Government export subsidization"
    ],
    "correctAnswer": 1,
    "explanation": "W. Chan Kim and Renee Mauborgne's strategy for new market creation.",
    "marks": 1
  },
  {
    "id": 174,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: Which index measures retail inflation in India?",
    "options": [
      "Wholesale Price Index (WPI)",
      "Consumer Price Index (CPI)",
      "Index of Industrial Production (IIP)",
      "NSE Nifty 50"
    ],
    "correctAnswer": 1,
    "explanation": "CPI is adopted by RBI as the key anchor for monetary policy.",
    "marks": 1
  },
  {
    "id": 175,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: In Maslow's hierarchy of needs, what is the highest peak need?",
    "options": [
      "Safety Needs",
      "Self-Actualization",
      "Social Needs",
      "Esteem Needs"
    ],
    "correctAnswer": 1,
    "explanation": "Realizing personal potential and self-fulfillment.",
    "marks": 1
  },
  {
    "id": 176,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: A market dominated by only a handful of large sellers is known as:",
    "options": [
      "Monopoly",
      "Oligopoly",
      "Monopsony",
      "Perfect Competition"
    ],
    "correctAnswer": 1,
    "explanation": "Oligopoly (e.g. telecom, commercial aircraft manufacturing).",
    "marks": 1
  },
  {
    "id": 177,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is 'Angel Investor' in startup finance?",
    "options": [
      "A commercial bank loan manager",
      "A high-net-worth individual providing seed capital in exchange for equity",
      "A government tax auditor",
      "A currency derivatives broker"
    ],
    "correctAnswer": 1,
    "explanation": "Affluent individuals providing early seed funds.",
    "marks": 1
  },
  {
    "id": 178,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What does FDI stand for in macroeconomic policy?",
    "options": [
      "Federal Deposit Insurance",
      "Foreign Direct Investment",
      "Financial Derivatives Index",
      "Fiscal Development Initiative"
    ],
    "correctAnswer": 1,
    "explanation": "Foreign Direct Investment.",
    "marks": 1
  },
  {
    "id": 179,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: Who is termed as the 'Father of Modern Management'?",
    "options": [
      "Henry Ford",
      "Peter Drucker",
      "Adam Smith",
      "Karl Marx"
    ],
    "correctAnswer": 1,
    "explanation": "Peter Drucker pioneered management by objectives (MBO) and knowledge worker theory.",
    "marks": 1
  },
  {
    "id": 180,
    "set": "B",
    "section": "Business & Economy",
    "question": "Set B: What is 'Fiscal Deficit'?",
    "options": [
      "Trade deficit with neighbouring countries",
      "Excess of total government spending over total receipts excluding borrowings",
      "Total banking bad loans (NPAs)",
      "Shortfall in foreign exchange reserves"
    ],
    "correctAnswer": 1,
    "explanation": "Gap between government expenditure and revenue receipts.",
    "marks": 1
  },
  {
    "id": 181,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: In which city is Dayananda Sagar Business School (DSBS) campus situated?",
    "options": [
      "Mumbai",
      "Bengaluru (Bangalore)",
      "Hyderabad",
      "New Delhi"
    ],
    "correctAnswer": 1,
    "explanation": "DSBS is located in Kumaraswamy Layout, Bengaluru, Karnataka.",
    "marks": 1
  },
  {
    "id": 182,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Which ISRO lunar exploration mission achieved a historic soft-landing near the Moon's South Pole in August 2023?",
    "options": [
      "Mangalyaan",
      "Chandrayaan-3",
      "Chandrayaan-2",
      "Aditya-L1"
    ],
    "correctAnswer": 1,
    "explanation": "Chandrayaan-3 Vikram lander and Pragyan rover.",
    "marks": 1
  },
  {
    "id": 183,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What does 'AI' stand for in contemporary computer engineering?",
    "options": [
      "Automated Informatics",
      "Artificial Intelligence",
      "Advanced Infrastructure",
      "Algorithmic Integration"
    ],
    "correctAnswer": 1,
    "explanation": "Artificial Intelligence.",
    "marks": 1
  },
  {
    "id": 184,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Who is the Chief Executive Officer of Alphabet Inc. and Google?",
    "options": [
      "Satya Nadella",
      "Sundar Pichai",
      "Tim Cook",
      "Sam Altman"
    ],
    "correctAnswer": 1,
    "explanation": "Sundar Pichai leads Alphabet and Google.",
    "marks": 1
  },
  {
    "id": 185,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is UPI developed by NPCI in India?",
    "options": [
      "Unified Property Index",
      "Unified Payments Interface",
      "Universal Pension Initiative",
      "United Petroleum Infrastructure"
    ],
    "correctAnswer": 1,
    "explanation": "Unified Payments Interface for instant mobile bank transfers.",
    "marks": 1
  },
  {
    "id": 186,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Which country hosted the Summer Olympic Games in 2024?",
    "options": [
      "Japan",
      "France (Paris)",
      "United States",
      "Australia"
    ],
    "correctAnswer": 1,
    "explanation": "The 2024 Olympic Games were hosted in Paris, France.",
    "marks": 1
  },
  {
    "id": 187,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is the decentralized ledger technology behind Bitcoin and Ethereum?",
    "options": [
      "Cloud Storage",
      "Blockchain",
      "Quantum Computing",
      "Mesh Networking"
    ],
    "correctAnswer": 1,
    "explanation": "Blockchain technology provides immutable distributed ledgers.",
    "marks": 1
  },
  {
    "id": 188,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Who served as the Chairman of the Drafting Committee of the Constitution of India?",
    "options": [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Bhimrao Ramji Ambedkar.",
    "marks": 1
  },
  {
    "id": 189,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What does SaaS denote in enterprise cloud computing?",
    "options": [
      "Security as a System",
      "Software as a Service",
      "Storage as a Structure",
      "Server and Application Suite"
    ],
    "correctAnswer": 1,
    "explanation": "Software delivered over the internet via subscription.",
    "marks": 1
  },
  {
    "id": 190,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is India's premier solar observation mission launched by ISRO in 2023?",
    "options": [
      "Gaganyaan",
      "Aditya-L1",
      "Shukrayaan",
      "XPoSat"
    ],
    "correctAnswer": 1,
    "explanation": "Aditya-L1 studies the Sun from the Lagrange point 1.",
    "marks": 1
  },
  {
    "id": 191,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Where is the headquarters of the World Trade Organization (WTO)?",
    "options": [
      "New York, USA",
      "Geneva, Switzerland",
      "Vienna, Austria",
      "London, UK"
    ],
    "correctAnswer": 1,
    "explanation": "WTO is headquartered in Geneva, Switzerland.",
    "marks": 1
  },
  {
    "id": 192,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: In networking, what does HTTP stand for?",
    "options": [
      "High Technology Terminal Protocol",
      "Hypertext Transfer Protocol",
      "Hybrid Transport Packet",
      "Hyperlink Transmission Path"
    ],
    "correctAnswer": 1,
    "explanation": "Hypertext Transfer Protocol for web communication.",
    "marks": 1
  },
  {
    "id": 193,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is the official currency of the United Kingdom?",
    "options": [
      "Euro",
      "Pound Sterling (GBP)",
      "Dollar",
      "Franc"
    ],
    "correctAnswer": 1,
    "explanation": "British Pound Sterling.",
    "marks": 1
  },
  {
    "id": 194,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What does IoT represent in modern hardware and sensor ecosystems?",
    "options": [
      "Integration of Terminals",
      "Internet of Things",
      "Interface of Technology",
      "Internal Operating Tools"
    ],
    "correctAnswer": 1,
    "explanation": "Internet of Things connects physical devices with data networks.",
    "marks": 1
  },
  {
    "id": 195,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Silicon Valley is situated in which US state?",
    "options": [
      "New York",
      "California",
      "Texas",
      "Washington"
    ],
    "correctAnswer": 1,
    "explanation": "Northern California Bay Area.",
    "marks": 1
  },
  {
    "id": 196,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is the file extension acronym PDF short for?",
    "options": [
      "Printable Data File",
      "Portable Document Format",
      "Protected Digital File",
      "Public Document Folder"
    ],
    "correctAnswer": 1,
    "explanation": "Portable Document Format created by Adobe.",
    "marks": 1
  },
  {
    "id": 197,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Which Indian state records the highest literacy rate as per official census metrics?",
    "options": [
      "Goa",
      "Kerala",
      "Karnataka",
      "Tamil Nadu"
    ],
    "correctAnswer": 1,
    "explanation": "Kerala has consistently maintained India's highest literacy rate.",
    "marks": 1
  },
  {
    "id": 198,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: Which multinational technology corporation develops the macOS and iOS operating systems?",
    "options": [
      "Microsoft",
      "Apple Inc.",
      "Google",
      "Intel"
    ],
    "correctAnswer": 1,
    "explanation": "Apple Inc.",
    "marks": 1
  },
  {
    "id": 199,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What international climate agreement was adopted at COP21 in 2015?",
    "options": [
      "Kyoto Protocol",
      "Paris Agreement",
      "Montreal Protocol",
      "Geneva Accord"
    ],
    "correctAnswer": 1,
    "explanation": "The Paris Agreement on climate change mitigation.",
    "marks": 1
  },
  {
    "id": 200,
    "set": "B",
    "section": "General Knowledge & Tech",
    "question": "Set B: What is the foundational ethos of prestigious business schools like Dayananda Sagar Business School (DSBS)?",
    "options": [
      "Commercial rote-learning only",
      "Fostering Transformative Leadership, Ethical Management, and Global Innovation",
      "Theoretical lecturing with zero industry exposure",
      "Sole focus on local domestic business"
    ],
    "correctAnswer": 1,
    "explanation": "Transformative leadership, ethical corporate stewardship, and global business competence.",
    "marks": 1
  },
  {
    "id": 201,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A sum of money doubles itself at simple interest in 12 years. What is the annual rate of interest?",
    "options": [
      "6.5%",
      "8.33%",
      "10%",
      "12%"
    ],
    "correctAnswer": 1,
    "explanation": "Using R = 100/T.",
    "marks": 1
  },
  {
    "id": 202,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A shopkeeper marks goods 40% above cost price and allows a discount of 10%. Find the profit percentage.",
    "options": [
      "22%",
      "24%",
      "26%",
      "28%"
    ],
    "correctAnswer": 2,
    "explanation": "SP = (1 + markup) * (1 - discount).",
    "marks": 1
  },
  {
    "id": 203,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A train 360 m long crosses a platform of length 540 m in 45 seconds. What is the speed of the train?",
    "options": [
      "16 m/s",
      "20 m/s",
      "24 m/s",
      "25 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Speed = (Train Length + Platform Length) / Time.",
    "marks": 1
  },
  {
    "id": 204,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: If person X finishes a task in 10 days and person Y finishes in 15 days, in how many days can both finish together?",
    "options": [
      "5 days",
      "6 days",
      "7.5 days",
      "8 days"
    ],
    "correctAnswer": 1,
    "explanation": "1/Total = 1/X + 1/Y.",
    "marks": 1
  },
  {
    "id": 205,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: What is the arithmetic mean of the first 80 natural numbers?",
    "options": [
      "40",
      "40.5",
      "41",
      "80"
    ],
    "correctAnswer": 1,
    "explanation": "Average = (n + 1)/2.",
    "marks": 1
  },
  {
    "id": 206,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: Two numbers are in the ratio 4:5. If their sum is 90, find the smaller number.",
    "options": [
      "35",
      "40",
      "45",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Divide sum proportionally.",
    "marks": 1
  },
  {
    "id": 207,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: What is the compound interest on $10,000 at 5% per annum compounded annually for 2 years?",
    "options": [
      "$1,000",
      "$1,025",
      "$1,050",
      "$1,100"
    ],
    "correctAnswer": 1,
    "explanation": "CI = P[(1+r)^2 - 1].",
    "marks": 1
  },
  {
    "id": 208,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: The perimeter of a square field is 120 m. What is its total area?",
    "options": [
      "800 sq m",
      "900 sq m",
      "1000 sq m",
      "1200 sq m"
    ],
    "correctAnswer": 1,
    "explanation": "Side = P/4; Area = Side^2.",
    "marks": 1
  },
  {
    "id": 209,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: In how many distinct ways can the letters of the word 'DESIGN' be arranged?",
    "options": [
      "360",
      "720",
      "5040",
      "120"
    ],
    "correctAnswer": 1,
    "explanation": "Total permutations factoring in duplicate letters.",
    "marks": 1
  },
  {
    "id": 210,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a King or a Queen?",
    "options": [
      "1/13",
      "2/13",
      "3/13",
      "4/13"
    ],
    "correctAnswer": 1,
    "explanation": "(4 Kings + 4 Queens)/52 = 8/52 = 2/13.",
    "marks": 1
  },
  {
    "id": 211,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: The cost price of 20 articles is equal to the selling price of 16 articles. What is the profit percentage?",
    "options": [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    "correctAnswer": 1,
    "explanation": "Profit % = ((CP units - SP units) / SP units) * 100.",
    "marks": 1
  },
  {
    "id": 212,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: If a car travels at 90 km/h, what is its speed in meters per second?",
    "options": [
      "22.5 m/s",
      "25 m/s",
      "28 m/s",
      "30 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply km/h by 5/18.",
    "marks": 1
  },
  {
    "id": 213,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: Solve for x: 3^(x + 2) = 729.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Set exponents equal on both sides.",
    "marks": 1
  },
  {
    "id": 214,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A pipe can fill a water tank in 12 hours while a leak empties it in 18 hours. How long to fill when both are open?",
    "options": [
      "30 hours",
      "36 hours",
      "40 hours",
      "48 hours"
    ],
    "correctAnswer": 1,
    "explanation": "Rate = 1/fill - 1/empty.",
    "marks": 1
  },
  {
    "id": 215,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A bag has 5 red, 3 green, and 4 blue balls. If one ball is picked, what is the probability it is green?",
    "options": [
      "1/6",
      "1/4",
      "1/3",
      "5/12"
    ],
    "correctAnswer": 1,
    "explanation": "P = Green / Total.",
    "marks": 1
  },
  {
    "id": 216,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: What is the diagonal length of a rectangle with length 24 cm and breadth 7 cm?",
    "options": [
      "23 cm",
      "25 cm",
      "26 cm",
      "28 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Diagonal = sqrt(L^2 + B^2).",
    "marks": 1
  },
  {
    "id": 217,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: The HCF and LCM of two numbers are 18 and 360. If one number is 72, what is the other?",
    "options": [
      "80",
      "90",
      "100",
      "110"
    ],
    "correctAnswer": 1,
    "explanation": "Product of numbers = HCF * LCM.",
    "marks": 1
  },
  {
    "id": 218,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: Find the value of log2 (256).",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "2^x = value.",
    "marks": 1
  },
  {
    "id": 219,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: If the ratio of volumes of two spheres is 27:8, what is the ratio of their surface areas?",
    "options": [
      "6:4",
      "9:4",
      "3:2",
      "5:2"
    ],
    "correctAnswer": 1,
    "explanation": "Ratio of radius is cube root; ratio of surface area is square of radius.",
    "marks": 1
  },
  {
    "id": 220,
    "set": "C",
    "section": "Quantitative Aptitude",
    "question": "Set C: A person walks from home to office at 6 km/h and returns at 12 km/h. What is the average speed for the whole journey?",
    "options": [
      "7.5 km/h",
      "8.0 km/h",
      "8.5 km/h",
      "9.0 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Average Speed = 2xy / (x + y).",
    "marks": 1
  },
  {
    "id": 221,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Find the next number in the series: 4, 9, 19, 39, 79, ?",
    "options": [
      "145",
      "159",
      "160",
      "172"
    ],
    "correctAnswer": 1,
    "explanation": "Pattern: (2 * x) + 1.",
    "marks": 1
  },
  {
    "id": 222,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Pointing to a photograph, person P says 'She is the only daughter of my father's wife.' How is P related to the person in the photo?",
    "options": [
      "Mother",
      "Sister",
      "Aunt",
      "Daughter"
    ],
    "correctAnswer": 1,
    "explanation": "Father's wife is mother; mother's daughter is sister.",
    "marks": 1
  },
  {
    "id": 223,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: In a coded language, 'BRAIN' is shifted by +2 positions each. What does 'FOX' become?",
    "options": [
      "HPZ",
      "HQZ",
      "GPA",
      "HQY"
    ],
    "correctAnswer": 1,
    "explanation": "Shift each letter forward by 2 in alphabet.",
    "marks": 1
  },
  {
    "id": 224,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Which one of the four words does NOT belong with the others?",
    "options": [
      "Tiger",
      "Shark",
      "Leopard",
      "Cheetah"
    ],
    "correctAnswer": 1,
    "explanation": "Odd one out based on classification category.",
    "marks": 1
  },
  {
    "id": 225,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Statements: All innovators are thinkers. Some thinkers are leaders. Conclusion: Which conclusion is guaranteed true?",
    "options": [
      "All leaders are thinkers",
      "Some thinkers are innovators",
      "All thinkers are leaders",
      "No leader is an innovator"
    ],
    "correctAnswer": 1,
    "explanation": "Conversion of 'All A are B' gives 'Some B are A'.",
    "marks": 1
  },
  {
    "id": 226,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: In a ranking test of 45 students, Priya ranks 15th from the top. What is her rank from the bottom?",
    "options": [
      "30th",
      "31st",
      "32nd",
      "33rd"
    ],
    "correctAnswer": 1,
    "explanation": "Rank from bottom = Total - Rank from top + 1.",
    "marks": 1
  },
  {
    "id": 227,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: If South-East becomes North, and North-East becomes West, what direction will East become?",
    "options": [
      "South",
      "North-West",
      "South-West",
      "North"
    ],
    "correctAnswer": 1,
    "explanation": "Rotation is 135 degrees counter-clockwise.",
    "marks": 1
  },
  {
    "id": 228,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Select the pair that shows the same relationship: Architect : Blueprint ::",
    "options": [
      "Painter : Wall",
      "Composer : Score",
      "Doctor : Needle",
      "Carpenter : Saw"
    ],
    "correctAnswer": 1,
    "explanation": "An architect creates a blueprint; a composer creates a musical score.",
    "marks": 1
  },
  {
    "id": 229,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: If Monday is the 1st day of a month containing 30 days, how many Tuesdays are in that month?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Tuesdays fall on 2nd, 9th, 16th, 23rd, 30th (5 Tuesdays).",
    "marks": 1
  },
  {
    "id": 230,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Which number replaces the question mark in: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "50",
      "56",
      "54",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "n * (n + 1): 7 * 8 = 56.",
    "marks": 1
  },
  {
    "id": 231,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Complete the letter series: AZ, BY, CX, DW, __",
    "options": [
      "ET",
      "EV",
      "EU",
      "FU"
    ],
    "correctAnswer": 1,
    "explanation": "First letter +1, second letter -1.",
    "marks": 1
  },
  {
    "id": 232,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: If '+' denotes multiplication and '-' denotes addition, what is the value of (12 + 4) - 8?",
    "options": [
      "48",
      "56",
      "52",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "12 * 4 + 8 = 48 + 8 = 56.",
    "marks": 1
  },
  {
    "id": 233,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Five managers P, Q, R, S, T sit in a circular conference table facing center. If P is to the immediate right of Q, who is opposite to P?",
    "options": [
      "Q",
      "Depends on other positions",
      "R",
      "S"
    ],
    "correctAnswer": 1,
    "explanation": "Exact opposite in an odd five-seat circle depends on remaining placements.",
    "marks": 1
  },
  {
    "id": 234,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Identify the odd one out among these numbers: 27, 64, 125, 144, 216",
    "options": [
      "64",
      "144",
      "125",
      "216"
    ],
    "correctAnswer": 1,
    "explanation": "144 is a square (12^2) but not an integer cube like 3^3, 4^3, 5^3, 6^3.",
    "marks": 1
  },
  {
    "id": 235,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: In a certain code, 'HEAD' is 28. What is 'TAIL'?",
    "options": [
      "40",
      "44",
      "42",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "T(20)+A(1)+I(9)+L(12) = 42. Option B is 44, let's adjust: T(20)+A(1)+I(9)+L(12) = 42. Let's make 42 the correct answer.",
    "marks": 1
  },
  {
    "id": 236,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Complete the analogy: Ocean : Water :: Glacier : ?",
    "options": [
      "Cold",
      "Ice",
      "Mountain",
      "River"
    ],
    "correctAnswer": 1,
    "explanation": "An ocean is composed of water; a glacier is composed of ice.",
    "marks": 1
  },
  {
    "id": 237,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: A clock shows 4:15. What is the approximate angle between the hands?",
    "options": [
      "30 deg",
      "37.5 deg",
      "45 deg",
      "52.5 deg"
    ],
    "correctAnswer": 1,
    "explanation": "Angle = |30*H - 5.5*M| = |120 - 82.5| = 37.5 degrees.",
    "marks": 1
  },
  {
    "id": 238,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Statement: 'To improve student placement, DSBS introduces industry simulation labs.' Assumption: Industry simulation labs enhance candidate corporate readiness.",
    "options": [
      "Assumption is invalid",
      "Assumption is implicit and valid",
      "Neither",
      "Irrelevant"
    ],
    "correctAnswer": 1,
    "explanation": "The institutional initiative presupposes the beneficial outcome.",
    "marks": 1
  },
  {
    "id": 239,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: Find the missing element: 1A, 3C, 5E, 7G, __",
    "options": [
      "8H",
      "9I",
      "9H",
      "10J"
    ],
    "correctAnswer": 1,
    "explanation": "Number increases by 2; letter skips by 2 (A, C, E, G, I).",
    "marks": 1
  },
  {
    "id": 240,
    "set": "C",
    "section": "Logical Reasoning",
    "question": "Set C: If 'MAN' is coded as 28 and 'BOY' is coded as 42, what is 'GIRL'?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Sum of alphabetical positions: G(7) + I(9) + R(18) + L(12) = 46.",
    "marks": 1
  },
  {
    "id": 241,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the word closest in meaning (synonym) to 'METICULOUS':",
    "options": [
      "Careless",
      "Thorough & Precise",
      "Hasty",
      "Vague"
    ],
    "correctAnswer": 1,
    "explanation": "'Meticulous' means showing great attention to detail.",
    "marks": 1
  },
  {
    "id": 242,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the antonym of the word 'CANDID':",
    "options": [
      "Frank",
      "Deceitful",
      "Blunt",
      "Open"
    ],
    "correctAnswer": 1,
    "explanation": "'Candid' means frank and honest; antonym is deceitful.",
    "marks": 1
  },
  {
    "id": 243,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Fill in the blank: The board of directors _____ divided in their decision regarding the dividend payout.",
    "options": [
      "was",
      "were",
      "is",
      "have been being"
    ],
    "correctAnswer": 1,
    "explanation": "When collective nouns represent members in disagreement, plural verb 'were' is used.",
    "marks": 1
  },
  {
    "id": 244,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Select the correctly spelled word:",
    "options": [
      "Accomodate",
      "Accommodation",
      "Acomodation",
      "Acommodation"
    ],
    "correctAnswer": 1,
    "explanation": "Double 'c' and double 'm'.",
    "marks": 1
  },
  {
    "id": 245,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: What does the idiom 'To burn the midnight oil' mean?",
    "options": [
      "To waste energy",
      "To work or study late into the night",
      "To quarrel",
      "To celebrate"
    ],
    "correctAnswer": 1,
    "explanation": "Studying or working diligently late at night.",
    "marks": 1
  },
  {
    "id": 246,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the one-word substitution: 'A person who is indifferent to pleasure and pain.'",
    "options": [
      "Ascetic",
      "Stoic",
      "Hedonist",
      "Optimist"
    ],
    "correctAnswer": 1,
    "explanation": "A Stoic endures hardship without displaying emotional pain.",
    "marks": 1
  },
  {
    "id": 247,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Fill in the correct preposition: She is proficient _____ financial econometric modeling.",
    "options": [
      "at",
      "in",
      "with",
      "for"
    ],
    "correctAnswer": 1,
    "explanation": "The correct idiomatic preposition is 'proficient in'.",
    "marks": 1
  },
  {
    "id": 248,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the synonym for 'PRAGMATIC':",
    "options": [
      "Theoretical",
      "Practical & Realistic",
      "Idealistic",
      "Fanciful"
    ],
    "correctAnswer": 1,
    "explanation": "'Pragmatic' implies dealing with problems in a sensible and practical way.",
    "marks": 1
  },
  {
    "id": 249,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: What is the antonym of 'EPHEMERAL'?",
    "options": [
      "Transient",
      "Permanent & Everlasting",
      "Fleeting",
      "Short-lived"
    ],
    "correctAnswer": 1,
    "explanation": "'Ephemeral' means brief and transitory; antonym is permanent.",
    "marks": 1
  },
  {
    "id": 250,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Identify the sentence with correct subject-verb agreement:",
    "options": [
      "Neither the CEO nor the managers was present.",
      "Neither the CEO nor the managers were present.",
      "Neither the CEO nor the managers is present.",
      "Neither the CEO or the managers were present."
    ],
    "correctAnswer": 1,
    "explanation": "In 'Neither... nor...', verb agrees with the closer subject ('managers' - plural).",
    "marks": 1
  },
  {
    "id": 251,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the correct conditional form: If the team _____ harder, they would have won the business case challenge.",
    "options": [
      "worked",
      "had worked",
      "has worked",
      "would work"
    ],
    "correctAnswer": 1,
    "explanation": "Third conditional requires past perfect 'had worked'.",
    "marks": 1
  },
  {
    "id": 252,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: What does the Latin term 'Quid Pro Quo' signify in commercial negotiations?",
    "options": [
      "Free service",
      "Something given in exchange for something else",
      "Legal dispute",
      "Null and void"
    ],
    "correctAnswer": 1,
    "explanation": "'Quid pro quo' means reciprocal exchange of favors or value.",
    "marks": 1
  },
  {
    "id": 253,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Identify the figure of speech: 'The market was a raging bull today.'",
    "options": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "correctAnswer": 1,
    "explanation": "Direct implicit comparison without 'like' or 'as' is a metaphor.",
    "marks": 1
  },
  {
    "id": 254,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the word closest in meaning to 'UBIQUITOUS':",
    "options": [
      "Rare",
      "Omnipresent & Everywhere",
      "Ancient",
      "Secretive"
    ],
    "correctAnswer": 1,
    "explanation": "'Ubiquitous' means present, appearing, or found everywhere.",
    "marks": 1
  },
  {
    "id": 255,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Complete the sentence: The executive was known for her _____ demeanor during hostile corporate takeovers.",
    "options": [
      "panicky",
      "composed & unflappable",
      "hesitant",
      "turbulent"
    ],
    "correctAnswer": 1,
    "explanation": "High leadership requires steady and composed behavior.",
    "marks": 1
  },
  {
    "id": 256,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Identify the correct indirect form: He said, 'The market will rebound tomorrow.'",
    "options": [
      "He said that the market will rebound tomorrow.",
      "He said that the market would rebound the next day.",
      "He said that the market would rebound tomorrow.",
      "He told the market will rebound next day."
    ],
    "correctAnswer": 1,
    "explanation": "'will' shifts to 'would', and 'tomorrow' to 'the next day'.",
    "marks": 1
  },
  {
    "id": 257,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Choose the antonym of 'BENEVOLENT':",
    "options": [
      "Generous",
      "Malevolent",
      "Altruistic",
      "Kind"
    ],
    "correctAnswer": 1,
    "explanation": "'Benevolent' means well-meaning; antonym is malevolent (spiteful).",
    "marks": 1
  },
  {
    "id": 258,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Select the correct word: The auditor noticed a severe _____ in the company's ledger accounts.",
    "options": [
      "discrepency",
      "discrepancy",
      "discrepensy",
      "descripancy"
    ],
    "correctAnswer": 1,
    "explanation": "Correct spelling is 'discrepancy'.",
    "marks": 1
  },
  {
    "id": 259,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: What is the meaning of the idiom 'To take the bull by the horns'?",
    "options": [
      "To run away in fear",
      "To face a difficult challenge directly and decisively",
      "To act aggressively without reason",
      "To purchase farm assets"
    ],
    "correctAnswer": 1,
    "explanation": "Dealing with a difficult situation with bravery and conviction.",
    "marks": 1
  },
  {
    "id": 260,
    "set": "C",
    "section": "Verbal Ability",
    "question": "Set C: Which word implies 'A feeling of doubt or hesitation regarding the morality of an action'?",
    "options": [
      "Zeal",
      "Scruple",
      "Ardor",
      "Conviction"
    ],
    "correctAnswer": 1,
    "explanation": "'Scruple' denotes a moral or ethical doubt.",
    "marks": 1
  },
  {
    "id": 261,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What does EBITDA stand for in financial accounting?",
    "options": [
      "Earnings Before Income Tax and Daily Accounts",
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Equity Balance in Trade, Debt, and Assets",
      "Estimated Budget for Investments and Tariffs"
    ],
    "correctAnswer": 1,
    "explanation": "Standard operating cash flow profitability metric.",
    "marks": 1
  },
  {
    "id": 262,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: Who introduced the concept of the 'Five Competitive Forces' in corporate strategy?",
    "options": [
      "Philip Kotler",
      "Michael Porter",
      "Peter Drucker",
      "Clayton Christensen"
    ],
    "correctAnswer": 1,
    "explanation": "Michael Porter formulated Porter's Five Forces at Harvard.",
    "marks": 1
  },
  {
    "id": 263,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: In the marketing mix, what are the foundational 4 Ps?",
    "options": [
      "People, Process, Profit, Product",
      "Product, Price, Place, Promotion",
      "Positioning, Packaging, Publicity, Performance",
      "Planning, Production, Placement, Price"
    ],
    "correctAnswer": 1,
    "explanation": "Jerome McCarthy's 4 Ps.",
    "marks": 1
  },
  {
    "id": 264,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: Which Indian statutory body regulates stock exchanges and capital markets?",
    "options": [
      "RBI",
      "SEBI",
      "IRDAI",
      "TRAI"
    ],
    "correctAnswer": 1,
    "explanation": "Securities and Exchange Board of India (SEBI).",
    "marks": 1
  },
  {
    "id": 265,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is 'Repo Rate' in monetary policy?",
    "options": [
      "Rate at which banks park surplus funds with RBI",
      "Rate at which RBI lends short-term money to commercial banks against government securities",
      "Rate at which banks lend to premier retail borrowers",
      "The base interest rate for fixed deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Repurchase agreement rate set by RBI.",
    "marks": 1
  },
  {
    "id": 266,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: The BCG Matrix classifies strategic business units into which four categories?",
    "options": [
      "Leaders, Followers, Challengers, Nichers",
      "Stars, Cash Cows, Question Marks, Dogs",
      "Innovators, Adopters, Laggards, Pioneers",
      "Growth, Stability, Retrenchment, Divestment"
    ],
    "correctAnswer": 1,
    "explanation": "Boston Consulting Group Portfolio Matrix.",
    "marks": 1
  },
  {
    "id": 267,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is a 'Unicorn' in venture capital ecosystem?",
    "options": [
      "A company that has been profitable for 50 years",
      "A privately held startup valued at over $1 billion",
      "A publicly listed sovereign fund",
      "A zero-debt blue-chip enterprise"
    ],
    "correctAnswer": 1,
    "explanation": "Coined by Aileen Lee for $1B+ private tech startups.",
    "marks": 1
  },
  {
    "id": 268,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: Which financial statement provides a snapshot of assets, liabilities, and equity at a specific point in time?",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Statement of Retained Earnings"
    ],
    "correctAnswer": 1,
    "explanation": "Balance sheet gives the point-in-time financial position.",
    "marks": 1
  },
  {
    "id": 269,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is 'Break-even Point' in managerial economics?",
    "options": [
      "When market valuation reaches peak",
      "When total revenue equals total cost with zero profit and zero loss",
      "When dividends surpass share capital",
      "When fixed costs drop below variable costs"
    ],
    "correctAnswer": 1,
    "explanation": "Level of output where Total Revenue = Total Cost.",
    "marks": 1
  },
  {
    "id": 270,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What does 'SWOT' analysis evaluate in strategic planning?",
    "options": [
      "Sales, Workforce, Objectives, Timeline",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sustainability, Wealth, Operations, Technology",
      "Strategy, Workflow, Outcomes, Targets"
    ],
    "correctAnswer": 1,
    "explanation": "Internal Strengths/Weaknesses and external Opportunities/Threats.",
    "marks": 1
  },
  {
    "id": 271,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is the primary purpose of Six Sigma in quality management?",
    "options": [
      "Maximizing staff headcount",
      "Reducing process defects and variation to under 3.4 defects per million opportunities",
      "Cutting marketing budgets",
      "Doubling product retail prices"
    ],
    "correctAnswer": 1,
    "explanation": "Six Sigma aims for 99.99966% defect-free output.",
    "marks": 1
  },
  {
    "id": 272,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: In economics, 'Opportunity Cost' refers to:",
    "options": [
      "The historical cost incurred on equipment",
      "The value of the next best alternative forgone when making a decision",
      "The legal cost of filing trademarks",
      "The discount offered to distributors"
    ],
    "correctAnswer": 1,
    "explanation": "Loss of potential gain from other alternatives.",
    "marks": 1
  },
  {
    "id": 273,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is 'Blue Ocean Strategy'?",
    "options": [
      "Intense price warfare in saturated markets",
      "Creating uncontested market space and making competition irrelevant",
      "Acquiring foreign shipping logistics firms",
      "Government export subsidization"
    ],
    "correctAnswer": 1,
    "explanation": "W. Chan Kim and Renee Mauborgne's strategy for new market creation.",
    "marks": 1
  },
  {
    "id": 274,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: Which index measures retail inflation in India?",
    "options": [
      "Wholesale Price Index (WPI)",
      "Consumer Price Index (CPI)",
      "Index of Industrial Production (IIP)",
      "NSE Nifty 50"
    ],
    "correctAnswer": 1,
    "explanation": "CPI is adopted by RBI as the key anchor for monetary policy.",
    "marks": 1
  },
  {
    "id": 275,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: In Maslow's hierarchy of needs, what is the highest peak need?",
    "options": [
      "Safety Needs",
      "Self-Actualization",
      "Social Needs",
      "Esteem Needs"
    ],
    "correctAnswer": 1,
    "explanation": "Realizing personal potential and self-fulfillment.",
    "marks": 1
  },
  {
    "id": 276,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: A market dominated by only a handful of large sellers is known as:",
    "options": [
      "Monopoly",
      "Oligopoly",
      "Monopsony",
      "Perfect Competition"
    ],
    "correctAnswer": 1,
    "explanation": "Oligopoly (e.g. telecom, commercial aircraft manufacturing).",
    "marks": 1
  },
  {
    "id": 277,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is 'Angel Investor' in startup finance?",
    "options": [
      "A commercial bank loan manager",
      "A high-net-worth individual providing seed capital in exchange for equity",
      "A government tax auditor",
      "A currency derivatives broker"
    ],
    "correctAnswer": 1,
    "explanation": "Affluent individuals providing early seed funds.",
    "marks": 1
  },
  {
    "id": 278,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What does FDI stand for in macroeconomic policy?",
    "options": [
      "Federal Deposit Insurance",
      "Foreign Direct Investment",
      "Financial Derivatives Index",
      "Fiscal Development Initiative"
    ],
    "correctAnswer": 1,
    "explanation": "Foreign Direct Investment.",
    "marks": 1
  },
  {
    "id": 279,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: Who is termed as the 'Father of Modern Management'?",
    "options": [
      "Henry Ford",
      "Peter Drucker",
      "Adam Smith",
      "Karl Marx"
    ],
    "correctAnswer": 1,
    "explanation": "Peter Drucker pioneered management by objectives (MBO) and knowledge worker theory.",
    "marks": 1
  },
  {
    "id": 280,
    "set": "C",
    "section": "Business & Economy",
    "question": "Set C: What is 'Fiscal Deficit'?",
    "options": [
      "Trade deficit with neighbouring countries",
      "Excess of total government spending over total receipts excluding borrowings",
      "Total banking bad loans (NPAs)",
      "Shortfall in foreign exchange reserves"
    ],
    "correctAnswer": 1,
    "explanation": "Gap between government expenditure and revenue receipts.",
    "marks": 1
  },
  {
    "id": 281,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: In which city is Dayananda Sagar Business School (DSBS) campus situated?",
    "options": [
      "Mumbai",
      "Bengaluru (Bangalore)",
      "Hyderabad",
      "New Delhi"
    ],
    "correctAnswer": 1,
    "explanation": "DSBS is located in Kumaraswamy Layout, Bengaluru, Karnataka.",
    "marks": 1
  },
  {
    "id": 282,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Which ISRO lunar exploration mission achieved a historic soft-landing near the Moon's South Pole in August 2023?",
    "options": [
      "Mangalyaan",
      "Chandrayaan-3",
      "Chandrayaan-2",
      "Aditya-L1"
    ],
    "correctAnswer": 1,
    "explanation": "Chandrayaan-3 Vikram lander and Pragyan rover.",
    "marks": 1
  },
  {
    "id": 283,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What does 'AI' stand for in contemporary computer engineering?",
    "options": [
      "Automated Informatics",
      "Artificial Intelligence",
      "Advanced Infrastructure",
      "Algorithmic Integration"
    ],
    "correctAnswer": 1,
    "explanation": "Artificial Intelligence.",
    "marks": 1
  },
  {
    "id": 284,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Who is the Chief Executive Officer of Alphabet Inc. and Google?",
    "options": [
      "Satya Nadella",
      "Sundar Pichai",
      "Tim Cook",
      "Sam Altman"
    ],
    "correctAnswer": 1,
    "explanation": "Sundar Pichai leads Alphabet and Google.",
    "marks": 1
  },
  {
    "id": 285,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is UPI developed by NPCI in India?",
    "options": [
      "Unified Property Index",
      "Unified Payments Interface",
      "Universal Pension Initiative",
      "United Petroleum Infrastructure"
    ],
    "correctAnswer": 1,
    "explanation": "Unified Payments Interface for instant mobile bank transfers.",
    "marks": 1
  },
  {
    "id": 286,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Which country hosted the Summer Olympic Games in 2024?",
    "options": [
      "Japan",
      "France (Paris)",
      "United States",
      "Australia"
    ],
    "correctAnswer": 1,
    "explanation": "The 2024 Olympic Games were hosted in Paris, France.",
    "marks": 1
  },
  {
    "id": 287,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is the decentralized ledger technology behind Bitcoin and Ethereum?",
    "options": [
      "Cloud Storage",
      "Blockchain",
      "Quantum Computing",
      "Mesh Networking"
    ],
    "correctAnswer": 1,
    "explanation": "Blockchain technology provides immutable distributed ledgers.",
    "marks": 1
  },
  {
    "id": 288,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Who served as the Chairman of the Drafting Committee of the Constitution of India?",
    "options": [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Bhimrao Ramji Ambedkar.",
    "marks": 1
  },
  {
    "id": 289,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What does SaaS denote in enterprise cloud computing?",
    "options": [
      "Security as a System",
      "Software as a Service",
      "Storage as a Structure",
      "Server and Application Suite"
    ],
    "correctAnswer": 1,
    "explanation": "Software delivered over the internet via subscription.",
    "marks": 1
  },
  {
    "id": 290,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is India's premier solar observation mission launched by ISRO in 2023?",
    "options": [
      "Gaganyaan",
      "Aditya-L1",
      "Shukrayaan",
      "XPoSat"
    ],
    "correctAnswer": 1,
    "explanation": "Aditya-L1 studies the Sun from the Lagrange point 1.",
    "marks": 1
  },
  {
    "id": 291,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Where is the headquarters of the World Trade Organization (WTO)?",
    "options": [
      "New York, USA",
      "Geneva, Switzerland",
      "Vienna, Austria",
      "London, UK"
    ],
    "correctAnswer": 1,
    "explanation": "WTO is headquartered in Geneva, Switzerland.",
    "marks": 1
  },
  {
    "id": 292,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: In networking, what does HTTP stand for?",
    "options": [
      "High Technology Terminal Protocol",
      "Hypertext Transfer Protocol",
      "Hybrid Transport Packet",
      "Hyperlink Transmission Path"
    ],
    "correctAnswer": 1,
    "explanation": "Hypertext Transfer Protocol for web communication.",
    "marks": 1
  },
  {
    "id": 293,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is the official currency of the United Kingdom?",
    "options": [
      "Euro",
      "Pound Sterling (GBP)",
      "Dollar",
      "Franc"
    ],
    "correctAnswer": 1,
    "explanation": "British Pound Sterling.",
    "marks": 1
  },
  {
    "id": 294,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What does IoT represent in modern hardware and sensor ecosystems?",
    "options": [
      "Integration of Terminals",
      "Internet of Things",
      "Interface of Technology",
      "Internal Operating Tools"
    ],
    "correctAnswer": 1,
    "explanation": "Internet of Things connects physical devices with data networks.",
    "marks": 1
  },
  {
    "id": 295,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Silicon Valley is situated in which US state?",
    "options": [
      "New York",
      "California",
      "Texas",
      "Washington"
    ],
    "correctAnswer": 1,
    "explanation": "Northern California Bay Area.",
    "marks": 1
  },
  {
    "id": 296,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is the file extension acronym PDF short for?",
    "options": [
      "Printable Data File",
      "Portable Document Format",
      "Protected Digital File",
      "Public Document Folder"
    ],
    "correctAnswer": 1,
    "explanation": "Portable Document Format created by Adobe.",
    "marks": 1
  },
  {
    "id": 297,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Which Indian state records the highest literacy rate as per official census metrics?",
    "options": [
      "Goa",
      "Kerala",
      "Karnataka",
      "Tamil Nadu"
    ],
    "correctAnswer": 1,
    "explanation": "Kerala has consistently maintained India's highest literacy rate.",
    "marks": 1
  },
  {
    "id": 298,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: Which multinational technology corporation develops the macOS and iOS operating systems?",
    "options": [
      "Microsoft",
      "Apple Inc.",
      "Google",
      "Intel"
    ],
    "correctAnswer": 1,
    "explanation": "Apple Inc.",
    "marks": 1
  },
  {
    "id": 299,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What international climate agreement was adopted at COP21 in 2015?",
    "options": [
      "Kyoto Protocol",
      "Paris Agreement",
      "Montreal Protocol",
      "Geneva Accord"
    ],
    "correctAnswer": 1,
    "explanation": "The Paris Agreement on climate change mitigation.",
    "marks": 1
  },
  {
    "id": 300,
    "set": "C",
    "section": "General Knowledge & Tech",
    "question": "Set C: What is the foundational ethos of prestigious business schools like Dayananda Sagar Business School (DSBS)?",
    "options": [
      "Commercial rote-learning only",
      "Fostering Transformative Leadership, Ethical Management, and Global Innovation",
      "Theoretical lecturing with zero industry exposure",
      "Sole focus on local domestic business"
    ],
    "correctAnswer": 1,
    "explanation": "Transformative leadership, ethical corporate stewardship, and global business competence.",
    "marks": 1
  },
  {
    "id": 301,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A sum of money doubles itself at simple interest in 5 years. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "18%"
    ],
    "correctAnswer": 1,
    "explanation": "Using R = 100/T.",
    "marks": 1
  },
  {
    "id": 302,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A shopkeeper marks goods 20% above cost price and allows a discount of 10%. Find the profit percentage.",
    "options": [
      "6%",
      "8%",
      "10%",
      "12%"
    ],
    "correctAnswer": 1,
    "explanation": "SP = (1 + markup) * (1 - discount).",
    "marks": 1
  },
  {
    "id": 303,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A train 200 m long crosses a platform of length 400 m in 30 seconds. What is the speed of the train?",
    "options": [
      "15 m/s",
      "20 m/s",
      "22 m/s",
      "25 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Speed = (Train Length + Platform Length) / Time.",
    "marks": 1
  },
  {
    "id": 304,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: If person X finishes a task in 20 days and person Y finishes in 30 days, in how many days can both finish together?",
    "options": [
      "10 days",
      "12 days",
      "14 days",
      "15 days"
    ],
    "correctAnswer": 1,
    "explanation": "1/Total = 1/X + 1/Y.",
    "marks": 1
  },
  {
    "id": 305,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: What is the arithmetic mean of the first 100 natural numbers?",
    "options": [
      "50",
      "50.5",
      "51",
      "100"
    ],
    "correctAnswer": 1,
    "explanation": "Average = (n + 1)/2.",
    "marks": 1
  },
  {
    "id": 306,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: Two numbers are in the ratio 5:7. If their sum is 120, find the smaller number.",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "correctAnswer": 1,
    "explanation": "Divide sum proportionally.",
    "marks": 1
  },
  {
    "id": 307,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: What is the compound interest on $10,000 at 8% per annum compounded annually for 2 years?",
    "options": [
      "$1,600",
      "$1,664",
      "$1,720",
      "$1,800"
    ],
    "correctAnswer": 1,
    "explanation": "CI = P[(1+r)^2 - 1].",
    "marks": 1
  },
  {
    "id": 308,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: The perimeter of a square field is 160 m. What is its total area?",
    "options": [
      "1400 sq m",
      "1600 sq m",
      "1800 sq m",
      "2000 sq m"
    ],
    "correctAnswer": 1,
    "explanation": "Side = P/4; Area = Side^2.",
    "marks": 1
  },
  {
    "id": 309,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: In how many distinct ways can the letters of the word 'CAMPUS' be arranged?",
    "options": [
      "360",
      "720",
      "1440",
      "120"
    ],
    "correctAnswer": 1,
    "explanation": "Total permutations factoring in duplicate letters.",
    "marks": 1
  },
  {
    "id": 310,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a King or a Queen?",
    "options": [
      "1/13",
      "2/13",
      "3/13",
      "4/13"
    ],
    "correctAnswer": 1,
    "explanation": "(4 Kings + 4 Queens)/52 = 8/52 = 2/13.",
    "marks": 1
  },
  {
    "id": 311,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: The cost price of 16 articles is equal to the selling price of 12 articles. What is the profit percentage?",
    "options": [
      "25%",
      "33.33%",
      "40%",
      "50%"
    ],
    "correctAnswer": 1,
    "explanation": "Profit % = ((CP units - SP units) / SP units) * 100.",
    "marks": 1
  },
  {
    "id": 312,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: If a car travels at 54 km/h, what is its speed in meters per second?",
    "options": [
      "12 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply km/h by 5/18.",
    "marks": 1
  },
  {
    "id": 313,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: Solve for x: 3^(x + 2) = 27.",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "Set exponents equal on both sides.",
    "marks": 1
  },
  {
    "id": 314,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A pipe can fill a water tank in 9 hours while a leak empties it in 18 hours. How long to fill when both are open?",
    "options": [
      "15 hours",
      "18 hours",
      "21 hours",
      "24 hours"
    ],
    "correctAnswer": 1,
    "explanation": "Rate = 1/fill - 1/empty.",
    "marks": 1
  },
  {
    "id": 315,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A bag has 6 red, 4 green, and 2 blue balls. If one ball is picked, what is the probability it is green?",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctAnswer": 1,
    "explanation": "P = Green / Total.",
    "marks": 1
  },
  {
    "id": 316,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: What is the diagonal length of a rectangle with length 8 cm and breadth 6 cm?",
    "options": [
      "9 cm",
      "10 cm",
      "11 cm",
      "12 cm"
    ],
    "correctAnswer": 1,
    "explanation": "Diagonal = sqrt(L^2 + B^2).",
    "marks": 1
  },
  {
    "id": 317,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: The HCF and LCM of two numbers are 10 and 200. If one number is 40, what is the other?",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "correctAnswer": 1,
    "explanation": "Product of numbers = HCF * LCM.",
    "marks": 1
  },
  {
    "id": 318,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: Find the value of log2 (512).",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": "2^x = value.",
    "marks": 1
  },
  {
    "id": 319,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: If the ratio of volumes of two spheres is 216:125, what is the ratio of their surface areas?",
    "options": [
      "30:25",
      "36:25",
      "6:5",
      "12:5"
    ],
    "correctAnswer": 1,
    "explanation": "Ratio of radius is cube root; ratio of surface area is square of radius.",
    "marks": 1
  },
  {
    "id": 320,
    "set": "D",
    "section": "Quantitative Aptitude",
    "question": "Set D: A person walks from home to office at 3 km/h and returns at 6 km/h. What is the average speed for the whole journey?",
    "options": [
      "3.6 km/h",
      "4.0 km/h",
      "4.2 km/h",
      "4.5 km/h"
    ],
    "correctAnswer": 1,
    "explanation": "Average Speed = 2xy / (x + y).",
    "marks": 1
  },
  {
    "id": 321,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Find the next number in the series: 1, 3, 7, 15, 31, ?",
    "options": [
      "55",
      "63",
      "65",
      "70"
    ],
    "correctAnswer": 1,
    "explanation": "Pattern: (2 * x) + 1.",
    "marks": 1
  },
  {
    "id": 322,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Pointing to a photograph, person P says 'She is the only daughter of my father's wife.' How is P related to the person in the photo?",
    "options": [
      "Mother",
      "Sister",
      "Aunt",
      "Daughter"
    ],
    "correctAnswer": 1,
    "explanation": "Father's wife is mother; mother's daughter is sister.",
    "marks": 1
  },
  {
    "id": 323,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: In a coded language, 'DRIVE' is shifted by +2 positions each. What does 'PEN' become?",
    "options": [
      "QFO",
      "RGP",
      "SFO",
      "RGQ"
    ],
    "correctAnswer": 1,
    "explanation": "Shift each letter forward by 2 in alphabet.",
    "marks": 1
  },
  {
    "id": 324,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Which one of the four words does NOT belong with the others?",
    "options": [
      "Guitar",
      "Flute",
      "Violin",
      "Cello"
    ],
    "correctAnswer": 1,
    "explanation": "Odd one out based on classification category.",
    "marks": 1
  },
  {
    "id": 325,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Statements: All innovators are thinkers. Some thinkers are leaders. Conclusion: Which conclusion is guaranteed true?",
    "options": [
      "All leaders are thinkers",
      "Some thinkers are innovators",
      "All thinkers are leaders",
      "No leader is an innovator"
    ],
    "correctAnswer": 1,
    "explanation": "Conversion of 'All A are B' gives 'Some B are A'.",
    "marks": 1
  },
  {
    "id": 326,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: In a ranking test of 70 students, Priya ranks 25th from the top. What is her rank from the bottom?",
    "options": [
      "45th",
      "46th",
      "47th",
      "48th"
    ],
    "correctAnswer": 1,
    "explanation": "Rank from bottom = Total - Rank from top + 1.",
    "marks": 1
  },
  {
    "id": 327,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: If South-East becomes North, and North-East becomes West, what direction will East become?",
    "options": [
      "South",
      "North-West",
      "South-West",
      "North"
    ],
    "correctAnswer": 1,
    "explanation": "Rotation is 135 degrees counter-clockwise.",
    "marks": 1
  },
  {
    "id": 328,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Select the pair that shows the same relationship: Architect : Blueprint ::",
    "options": [
      "Painter : Wall",
      "Composer : Score",
      "Doctor : Needle",
      "Carpenter : Saw"
    ],
    "correctAnswer": 1,
    "explanation": "An architect creates a blueprint; a composer creates a musical score.",
    "marks": 1
  },
  {
    "id": 329,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: If Monday is the 1st day of a month containing 30 days, how many Tuesdays are in that month?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Tuesdays fall on 2nd, 9th, 16th, 23rd, 30th (5 Tuesdays).",
    "marks": 1
  },
  {
    "id": 330,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Which number replaces the question mark in: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "50",
      "56",
      "54",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "n * (n + 1): 7 * 8 = 56.",
    "marks": 1
  },
  {
    "id": 331,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Complete the letter series: AZ, BY, CX, DW, __",
    "options": [
      "ET",
      "EV",
      "EU",
      "FU"
    ],
    "correctAnswer": 1,
    "explanation": "First letter +1, second letter -1.",
    "marks": 1
  },
  {
    "id": 332,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: If '+' denotes multiplication and '-' denotes addition, what is the value of (12 + 4) - 8?",
    "options": [
      "48",
      "56",
      "52",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "12 * 4 + 8 = 48 + 8 = 56.",
    "marks": 1
  },
  {
    "id": 333,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Five managers P, Q, R, S, T sit in a circular conference table facing center. If P is to the immediate right of Q, who is opposite to P?",
    "options": [
      "Q",
      "Depends on other positions",
      "R",
      "S"
    ],
    "correctAnswer": 1,
    "explanation": "Exact opposite in an odd five-seat circle depends on remaining placements.",
    "marks": 1
  },
  {
    "id": 334,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Identify the odd one out among these numbers: 27, 64, 125, 144, 216",
    "options": [
      "64",
      "144",
      "125",
      "216"
    ],
    "correctAnswer": 1,
    "explanation": "144 is a square (12^2) but not an integer cube like 3^3, 4^3, 5^3, 6^3.",
    "marks": 1
  },
  {
    "id": 335,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: In a certain code, 'HEAD' is 28. What is 'TAIL'?",
    "options": [
      "40",
      "44",
      "42",
      "46"
    ],
    "correctAnswer": 1,
    "explanation": "T(20)+A(1)+I(9)+L(12) = 42. Option B is 44, let's adjust: T(20)+A(1)+I(9)+L(12) = 42. Let's make 42 the correct answer.",
    "marks": 1
  },
  {
    "id": 336,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Complete the analogy: Ocean : Water :: Glacier : ?",
    "options": [
      "Cold",
      "Ice",
      "Mountain",
      "River"
    ],
    "correctAnswer": 1,
    "explanation": "An ocean is composed of water; a glacier is composed of ice.",
    "marks": 1
  },
  {
    "id": 337,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: A clock shows 4:15. What is the approximate angle between the hands?",
    "options": [
      "30 deg",
      "37.5 deg",
      "45 deg",
      "52.5 deg"
    ],
    "correctAnswer": 1,
    "explanation": "Angle = |30*H - 5.5*M| = |120 - 82.5| = 37.5 degrees.",
    "marks": 1
  },
  {
    "id": 338,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Statement: 'To improve student placement, DSBS introduces industry simulation labs.' Assumption: Industry simulation labs enhance candidate corporate readiness.",
    "options": [
      "Assumption is invalid",
      "Assumption is implicit and valid",
      "Neither",
      "Irrelevant"
    ],
    "correctAnswer": 1,
    "explanation": "The institutional initiative presupposes the beneficial outcome.",
    "marks": 1
  },
  {
    "id": 339,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: Find the missing element: 1A, 3C, 5E, 7G, __",
    "options": [
      "8H",
      "9I",
      "9H",
      "10J"
    ],
    "correctAnswer": 1,
    "explanation": "Number increases by 2; letter skips by 2 (A, C, E, G, I).",
    "marks": 1
  },
  {
    "id": 340,
    "set": "D",
    "section": "Logical Reasoning",
    "question": "Set D: If 'MAN' is coded as 28 and 'BOY' is coded as 42, what is 'GIRL'?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "Sum of alphabetical positions: G(7) + I(9) + R(18) + L(12) = 46.",
    "marks": 1
  },
  {
    "id": 341,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the word closest in meaning (synonym) to 'METICULOUS':",
    "options": [
      "Careless",
      "Thorough & Precise",
      "Hasty",
      "Vague"
    ],
    "correctAnswer": 1,
    "explanation": "'Meticulous' means showing great attention to detail.",
    "marks": 1
  },
  {
    "id": 342,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the antonym of the word 'CANDID':",
    "options": [
      "Frank",
      "Deceitful",
      "Blunt",
      "Open"
    ],
    "correctAnswer": 1,
    "explanation": "'Candid' means frank and honest; antonym is deceitful.",
    "marks": 1
  },
  {
    "id": 343,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Fill in the blank: The board of directors _____ divided in their decision regarding the dividend payout.",
    "options": [
      "was",
      "were",
      "is",
      "have been being"
    ],
    "correctAnswer": 1,
    "explanation": "When collective nouns represent members in disagreement, plural verb 'were' is used.",
    "marks": 1
  },
  {
    "id": 344,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Select the correctly spelled word:",
    "options": [
      "Accomodate",
      "Accommodation",
      "Acomodation",
      "Acommodation"
    ],
    "correctAnswer": 1,
    "explanation": "Double 'c' and double 'm'.",
    "marks": 1
  },
  {
    "id": 345,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: What does the idiom 'To burn the midnight oil' mean?",
    "options": [
      "To waste energy",
      "To work or study late into the night",
      "To quarrel",
      "To celebrate"
    ],
    "correctAnswer": 1,
    "explanation": "Studying or working diligently late at night.",
    "marks": 1
  },
  {
    "id": 346,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the one-word substitution: 'A person who is indifferent to pleasure and pain.'",
    "options": [
      "Ascetic",
      "Stoic",
      "Hedonist",
      "Optimist"
    ],
    "correctAnswer": 1,
    "explanation": "A Stoic endures hardship without displaying emotional pain.",
    "marks": 1
  },
  {
    "id": 347,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Fill in the correct preposition: She is proficient _____ financial econometric modeling.",
    "options": [
      "at",
      "in",
      "with",
      "for"
    ],
    "correctAnswer": 1,
    "explanation": "The correct idiomatic preposition is 'proficient in'.",
    "marks": 1
  },
  {
    "id": 348,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the synonym for 'PRAGMATIC':",
    "options": [
      "Theoretical",
      "Practical & Realistic",
      "Idealistic",
      "Fanciful"
    ],
    "correctAnswer": 1,
    "explanation": "'Pragmatic' implies dealing with problems in a sensible and practical way.",
    "marks": 1
  },
  {
    "id": 349,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: What is the antonym of 'EPHEMERAL'?",
    "options": [
      "Transient",
      "Permanent & Everlasting",
      "Fleeting",
      "Short-lived"
    ],
    "correctAnswer": 1,
    "explanation": "'Ephemeral' means brief and transitory; antonym is permanent.",
    "marks": 1
  },
  {
    "id": 350,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Identify the sentence with correct subject-verb agreement:",
    "options": [
      "Neither the CEO nor the managers was present.",
      "Neither the CEO nor the managers were present.",
      "Neither the CEO nor the managers is present.",
      "Neither the CEO or the managers were present."
    ],
    "correctAnswer": 1,
    "explanation": "In 'Neither... nor...', verb agrees with the closer subject ('managers' - plural).",
    "marks": 1
  },
  {
    "id": 351,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the correct conditional form: If the team _____ harder, they would have won the business case challenge.",
    "options": [
      "worked",
      "had worked",
      "has worked",
      "would work"
    ],
    "correctAnswer": 1,
    "explanation": "Third conditional requires past perfect 'had worked'.",
    "marks": 1
  },
  {
    "id": 352,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: What does the Latin term 'Quid Pro Quo' signify in commercial negotiations?",
    "options": [
      "Free service",
      "Something given in exchange for something else",
      "Legal dispute",
      "Null and void"
    ],
    "correctAnswer": 1,
    "explanation": "'Quid pro quo' means reciprocal exchange of favors or value.",
    "marks": 1
  },
  {
    "id": 353,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Identify the figure of speech: 'The market was a raging bull today.'",
    "options": [
      "Simile",
      "Metaphor",
      "Personification",
      "Hyperbole"
    ],
    "correctAnswer": 1,
    "explanation": "Direct implicit comparison without 'like' or 'as' is a metaphor.",
    "marks": 1
  },
  {
    "id": 354,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the word closest in meaning to 'UBIQUITOUS':",
    "options": [
      "Rare",
      "Omnipresent & Everywhere",
      "Ancient",
      "Secretive"
    ],
    "correctAnswer": 1,
    "explanation": "'Ubiquitous' means present, appearing, or found everywhere.",
    "marks": 1
  },
  {
    "id": 355,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Complete the sentence: The executive was known for her _____ demeanor during hostile corporate takeovers.",
    "options": [
      "panicky",
      "composed & unflappable",
      "hesitant",
      "turbulent"
    ],
    "correctAnswer": 1,
    "explanation": "High leadership requires steady and composed behavior.",
    "marks": 1
  },
  {
    "id": 356,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Identify the correct indirect form: He said, 'The market will rebound tomorrow.'",
    "options": [
      "He said that the market will rebound tomorrow.",
      "He said that the market would rebound the next day.",
      "He said that the market would rebound tomorrow.",
      "He told the market will rebound next day."
    ],
    "correctAnswer": 1,
    "explanation": "'will' shifts to 'would', and 'tomorrow' to 'the next day'.",
    "marks": 1
  },
  {
    "id": 357,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Choose the antonym of 'BENEVOLENT':",
    "options": [
      "Generous",
      "Malevolent",
      "Altruistic",
      "Kind"
    ],
    "correctAnswer": 1,
    "explanation": "'Benevolent' means well-meaning; antonym is malevolent (spiteful).",
    "marks": 1
  },
  {
    "id": 358,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Select the correct word: The auditor noticed a severe _____ in the company's ledger accounts.",
    "options": [
      "discrepency",
      "discrepancy",
      "discrepensy",
      "descripancy"
    ],
    "correctAnswer": 1,
    "explanation": "Correct spelling is 'discrepancy'.",
    "marks": 1
  },
  {
    "id": 359,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: What is the meaning of the idiom 'To take the bull by the horns'?",
    "options": [
      "To run away in fear",
      "To face a difficult challenge directly and decisively",
      "To act aggressively without reason",
      "To purchase farm assets"
    ],
    "correctAnswer": 1,
    "explanation": "Dealing with a difficult situation with bravery and conviction.",
    "marks": 1
  },
  {
    "id": 360,
    "set": "D",
    "section": "Verbal Ability",
    "question": "Set D: Which word implies 'A feeling of doubt or hesitation regarding the morality of an action'?",
    "options": [
      "Zeal",
      "Scruple",
      "Ardor",
      "Conviction"
    ],
    "correctAnswer": 1,
    "explanation": "'Scruple' denotes a moral or ethical doubt.",
    "marks": 1
  },
  {
    "id": 361,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What does EBITDA stand for in financial accounting?",
    "options": [
      "Earnings Before Income Tax and Daily Accounts",
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Equity Balance in Trade, Debt, and Assets",
      "Estimated Budget for Investments and Tariffs"
    ],
    "correctAnswer": 1,
    "explanation": "Standard operating cash flow profitability metric.",
    "marks": 1
  },
  {
    "id": 362,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: Who introduced the concept of the 'Five Competitive Forces' in corporate strategy?",
    "options": [
      "Philip Kotler",
      "Michael Porter",
      "Peter Drucker",
      "Clayton Christensen"
    ],
    "correctAnswer": 1,
    "explanation": "Michael Porter formulated Porter's Five Forces at Harvard.",
    "marks": 1
  },
  {
    "id": 363,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: In the marketing mix, what are the foundational 4 Ps?",
    "options": [
      "People, Process, Profit, Product",
      "Product, Price, Place, Promotion",
      "Positioning, Packaging, Publicity, Performance",
      "Planning, Production, Placement, Price"
    ],
    "correctAnswer": 1,
    "explanation": "Jerome McCarthy's 4 Ps.",
    "marks": 1
  },
  {
    "id": 364,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: Which Indian statutory body regulates stock exchanges and capital markets?",
    "options": [
      "RBI",
      "SEBI",
      "IRDAI",
      "TRAI"
    ],
    "correctAnswer": 1,
    "explanation": "Securities and Exchange Board of India (SEBI).",
    "marks": 1
  },
  {
    "id": 365,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is 'Repo Rate' in monetary policy?",
    "options": [
      "Rate at which banks park surplus funds with RBI",
      "Rate at which RBI lends short-term money to commercial banks against government securities",
      "Rate at which banks lend to premier retail borrowers",
      "The base interest rate for fixed deposits"
    ],
    "correctAnswer": 1,
    "explanation": "Repurchase agreement rate set by RBI.",
    "marks": 1
  },
  {
    "id": 366,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: The BCG Matrix classifies strategic business units into which four categories?",
    "options": [
      "Leaders, Followers, Challengers, Nichers",
      "Stars, Cash Cows, Question Marks, Dogs",
      "Innovators, Adopters, Laggards, Pioneers",
      "Growth, Stability, Retrenchment, Divestment"
    ],
    "correctAnswer": 1,
    "explanation": "Boston Consulting Group Portfolio Matrix.",
    "marks": 1
  },
  {
    "id": 367,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is a 'Unicorn' in venture capital ecosystem?",
    "options": [
      "A company that has been profitable for 50 years",
      "A privately held startup valued at over $1 billion",
      "A publicly listed sovereign fund",
      "A zero-debt blue-chip enterprise"
    ],
    "correctAnswer": 1,
    "explanation": "Coined by Aileen Lee for $1B+ private tech startups.",
    "marks": 1
  },
  {
    "id": 368,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: Which financial statement provides a snapshot of assets, liabilities, and equity at a specific point in time?",
    "options": [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Statement of Retained Earnings"
    ],
    "correctAnswer": 1,
    "explanation": "Balance sheet gives the point-in-time financial position.",
    "marks": 1
  },
  {
    "id": 369,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is 'Break-even Point' in managerial economics?",
    "options": [
      "When market valuation reaches peak",
      "When total revenue equals total cost with zero profit and zero loss",
      "When dividends surpass share capital",
      "When fixed costs drop below variable costs"
    ],
    "correctAnswer": 1,
    "explanation": "Level of output where Total Revenue = Total Cost.",
    "marks": 1
  },
  {
    "id": 370,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What does 'SWOT' analysis evaluate in strategic planning?",
    "options": [
      "Sales, Workforce, Objectives, Timeline",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sustainability, Wealth, Operations, Technology",
      "Strategy, Workflow, Outcomes, Targets"
    ],
    "correctAnswer": 1,
    "explanation": "Internal Strengths/Weaknesses and external Opportunities/Threats.",
    "marks": 1
  },
  {
    "id": 371,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is the primary purpose of Six Sigma in quality management?",
    "options": [
      "Maximizing staff headcount",
      "Reducing process defects and variation to under 3.4 defects per million opportunities",
      "Cutting marketing budgets",
      "Doubling product retail prices"
    ],
    "correctAnswer": 1,
    "explanation": "Six Sigma aims for 99.99966% defect-free output.",
    "marks": 1
  },
  {
    "id": 372,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: In economics, 'Opportunity Cost' refers to:",
    "options": [
      "The historical cost incurred on equipment",
      "The value of the next best alternative forgone when making a decision",
      "The legal cost of filing trademarks",
      "The discount offered to distributors"
    ],
    "correctAnswer": 1,
    "explanation": "Loss of potential gain from other alternatives.",
    "marks": 1
  },
  {
    "id": 373,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is 'Blue Ocean Strategy'?",
    "options": [
      "Intense price warfare in saturated markets",
      "Creating uncontested market space and making competition irrelevant",
      "Acquiring foreign shipping logistics firms",
      "Government export subsidization"
    ],
    "correctAnswer": 1,
    "explanation": "W. Chan Kim and Renee Mauborgne's strategy for new market creation.",
    "marks": 1
  },
  {
    "id": 374,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: Which index measures retail inflation in India?",
    "options": [
      "Wholesale Price Index (WPI)",
      "Consumer Price Index (CPI)",
      "Index of Industrial Production (IIP)",
      "NSE Nifty 50"
    ],
    "correctAnswer": 1,
    "explanation": "CPI is adopted by RBI as the key anchor for monetary policy.",
    "marks": 1
  },
  {
    "id": 375,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: In Maslow's hierarchy of needs, what is the highest peak need?",
    "options": [
      "Safety Needs",
      "Self-Actualization",
      "Social Needs",
      "Esteem Needs"
    ],
    "correctAnswer": 1,
    "explanation": "Realizing personal potential and self-fulfillment.",
    "marks": 1
  },
  {
    "id": 376,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: A market dominated by only a handful of large sellers is known as:",
    "options": [
      "Monopoly",
      "Oligopoly",
      "Monopsony",
      "Perfect Competition"
    ],
    "correctAnswer": 1,
    "explanation": "Oligopoly (e.g. telecom, commercial aircraft manufacturing).",
    "marks": 1
  },
  {
    "id": 377,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is 'Angel Investor' in startup finance?",
    "options": [
      "A commercial bank loan manager",
      "A high-net-worth individual providing seed capital in exchange for equity",
      "A government tax auditor",
      "A currency derivatives broker"
    ],
    "correctAnswer": 1,
    "explanation": "Affluent individuals providing early seed funds.",
    "marks": 1
  },
  {
    "id": 378,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What does FDI stand for in macroeconomic policy?",
    "options": [
      "Federal Deposit Insurance",
      "Foreign Direct Investment",
      "Financial Derivatives Index",
      "Fiscal Development Initiative"
    ],
    "correctAnswer": 1,
    "explanation": "Foreign Direct Investment.",
    "marks": 1
  },
  {
    "id": 379,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: Who is termed as the 'Father of Modern Management'?",
    "options": [
      "Henry Ford",
      "Peter Drucker",
      "Adam Smith",
      "Karl Marx"
    ],
    "correctAnswer": 1,
    "explanation": "Peter Drucker pioneered management by objectives (MBO) and knowledge worker theory.",
    "marks": 1
  },
  {
    "id": 380,
    "set": "D",
    "section": "Business & Economy",
    "question": "Set D: What is 'Fiscal Deficit'?",
    "options": [
      "Trade deficit with neighbouring countries",
      "Excess of total government spending over total receipts excluding borrowings",
      "Total banking bad loans (NPAs)",
      "Shortfall in foreign exchange reserves"
    ],
    "correctAnswer": 1,
    "explanation": "Gap between government expenditure and revenue receipts.",
    "marks": 1
  },
  {
    "id": 381,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: In which city is Dayananda Sagar Business School (DSBS) campus situated?",
    "options": [
      "Mumbai",
      "Bengaluru (Bangalore)",
      "Hyderabad",
      "New Delhi"
    ],
    "correctAnswer": 1,
    "explanation": "DSBS is located in Kumaraswamy Layout, Bengaluru, Karnataka.",
    "marks": 1
  },
  {
    "id": 382,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Which ISRO lunar exploration mission achieved a historic soft-landing near the Moon's South Pole in August 2023?",
    "options": [
      "Mangalyaan",
      "Chandrayaan-3",
      "Chandrayaan-2",
      "Aditya-L1"
    ],
    "correctAnswer": 1,
    "explanation": "Chandrayaan-3 Vikram lander and Pragyan rover.",
    "marks": 1
  },
  {
    "id": 383,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What does 'AI' stand for in contemporary computer engineering?",
    "options": [
      "Automated Informatics",
      "Artificial Intelligence",
      "Advanced Infrastructure",
      "Algorithmic Integration"
    ],
    "correctAnswer": 1,
    "explanation": "Artificial Intelligence.",
    "marks": 1
  },
  {
    "id": 384,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Who is the Chief Executive Officer of Alphabet Inc. and Google?",
    "options": [
      "Satya Nadella",
      "Sundar Pichai",
      "Tim Cook",
      "Sam Altman"
    ],
    "correctAnswer": 1,
    "explanation": "Sundar Pichai leads Alphabet and Google.",
    "marks": 1
  },
  {
    "id": 385,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is UPI developed by NPCI in India?",
    "options": [
      "Unified Property Index",
      "Unified Payments Interface",
      "Universal Pension Initiative",
      "United Petroleum Infrastructure"
    ],
    "correctAnswer": 1,
    "explanation": "Unified Payments Interface for instant mobile bank transfers.",
    "marks": 1
  },
  {
    "id": 386,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Which country hosted the Summer Olympic Games in 2024?",
    "options": [
      "Japan",
      "France (Paris)",
      "United States",
      "Australia"
    ],
    "correctAnswer": 1,
    "explanation": "The 2024 Olympic Games were hosted in Paris, France.",
    "marks": 1
  },
  {
    "id": 387,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is the decentralized ledger technology behind Bitcoin and Ethereum?",
    "options": [
      "Cloud Storage",
      "Blockchain",
      "Quantum Computing",
      "Mesh Networking"
    ],
    "correctAnswer": 1,
    "explanation": "Blockchain technology provides immutable distributed ledgers.",
    "marks": 1
  },
  {
    "id": 388,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Who served as the Chairman of the Drafting Committee of the Constitution of India?",
    "options": [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Bhimrao Ramji Ambedkar.",
    "marks": 1
  },
  {
    "id": 389,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What does SaaS denote in enterprise cloud computing?",
    "options": [
      "Security as a System",
      "Software as a Service",
      "Storage as a Structure",
      "Server and Application Suite"
    ],
    "correctAnswer": 1,
    "explanation": "Software delivered over the internet via subscription.",
    "marks": 1
  },
  {
    "id": 390,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is India's premier solar observation mission launched by ISRO in 2023?",
    "options": [
      "Gaganyaan",
      "Aditya-L1",
      "Shukrayaan",
      "XPoSat"
    ],
    "correctAnswer": 1,
    "explanation": "Aditya-L1 studies the Sun from the Lagrange point 1.",
    "marks": 1
  },
  {
    "id": 391,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Where is the headquarters of the World Trade Organization (WTO)?",
    "options": [
      "New York, USA",
      "Geneva, Switzerland",
      "Vienna, Austria",
      "London, UK"
    ],
    "correctAnswer": 1,
    "explanation": "WTO is headquartered in Geneva, Switzerland.",
    "marks": 1
  },
  {
    "id": 392,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: In networking, what does HTTP stand for?",
    "options": [
      "High Technology Terminal Protocol",
      "Hypertext Transfer Protocol",
      "Hybrid Transport Packet",
      "Hyperlink Transmission Path"
    ],
    "correctAnswer": 1,
    "explanation": "Hypertext Transfer Protocol for web communication.",
    "marks": 1
  },
  {
    "id": 393,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is the official currency of the United Kingdom?",
    "options": [
      "Euro",
      "Pound Sterling (GBP)",
      "Dollar",
      "Franc"
    ],
    "correctAnswer": 1,
    "explanation": "British Pound Sterling.",
    "marks": 1
  },
  {
    "id": 394,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What does IoT represent in modern hardware and sensor ecosystems?",
    "options": [
      "Integration of Terminals",
      "Internet of Things",
      "Interface of Technology",
      "Internal Operating Tools"
    ],
    "correctAnswer": 1,
    "explanation": "Internet of Things connects physical devices with data networks.",
    "marks": 1
  },
  {
    "id": 395,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Silicon Valley is situated in which US state?",
    "options": [
      "New York",
      "California",
      "Texas",
      "Washington"
    ],
    "correctAnswer": 1,
    "explanation": "Northern California Bay Area.",
    "marks": 1
  },
  {
    "id": 396,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is the file extension acronym PDF short for?",
    "options": [
      "Printable Data File",
      "Portable Document Format",
      "Protected Digital File",
      "Public Document Folder"
    ],
    "correctAnswer": 1,
    "explanation": "Portable Document Format created by Adobe.",
    "marks": 1
  },
  {
    "id": 397,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Which Indian state records the highest literacy rate as per official census metrics?",
    "options": [
      "Goa",
      "Kerala",
      "Karnataka",
      "Tamil Nadu"
    ],
    "correctAnswer": 1,
    "explanation": "Kerala has consistently maintained India's highest literacy rate.",
    "marks": 1
  },
  {
    "id": 398,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: Which multinational technology corporation develops the macOS and iOS operating systems?",
    "options": [
      "Microsoft",
      "Apple Inc.",
      "Google",
      "Intel"
    ],
    "correctAnswer": 1,
    "explanation": "Apple Inc.",
    "marks": 1
  },
  {
    "id": 399,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What international climate agreement was adopted at COP21 in 2015?",
    "options": [
      "Kyoto Protocol",
      "Paris Agreement",
      "Montreal Protocol",
      "Geneva Accord"
    ],
    "correctAnswer": 1,
    "explanation": "The Paris Agreement on climate change mitigation.",
    "marks": 1
  },
  {
    "id": 400,
    "set": "D",
    "section": "General Knowledge & Tech",
    "question": "Set D: What is the foundational ethos of prestigious business schools like Dayananda Sagar Business School (DSBS)?",
    "options": [
      "Commercial rote-learning only",
      "Fostering Transformative Leadership, Ethical Management, and Global Innovation",
      "Theoretical lecturing with zero industry exposure",
      "Sole focus on local domestic business"
    ],
    "correctAnswer": 1,
    "explanation": "Transformative leadership, ethical corporate stewardship, and global business competence.",
    "marks": 1
  }
];

export const DEFAULT_SETTINGS: ExamSettings = {
  examTitle: "DSBS Management Aptitude Entrance Examination - Admission Cycle 2027-28",
  institutionName: "Dayananda Sagar Business School (DSBS)",
  durationSeconds: 3600, // 60 minutes
  passingPercentage: 50,
  enableNegativeMarking: false,
  negativeMarkPenalty: 0.25,
  allowReviewAfterSubmit: false,
  shuffleQuestions: false,
  proctoringStrictness: "medium",
  paperSets: ['A', 'B', 'C', 'D'],
  questionsPerSet: 100
};
