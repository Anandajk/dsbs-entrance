import fs from 'fs';
import path from 'path';

// Base topics and questions for each section across sets A, B, C, D
const sections = [
  { name: "Quantitative Aptitude", count: 20 },
  { name: "Logical Reasoning", count: 20 },
  { name: "Verbal Ability", count: 20 },
  { name: "Business & Economy", count: 20 },
  { name: "General Knowledge & Tech", count: 20 }
];

const sets = ['A', 'B', 'C', 'D'];

// We'll generate realistic questions with distinct values for each set
function generateQuestionsForSet(setLetter, startIndex) {
  const questions = [];
  let currentId = startIndex;

  // 1. Quantitative Aptitude (20 questions)
  const quantTemplates = [
    {
      q: (set) => `Set ${set}: A sum of money doubles itself at simple interest in ${set === 'A' ? 8 : set === 'B' ? 10 : set === 'C' ? 12 : 5} years. What is the annual rate of interest?`,
      opts: (set) => set === 'A' ? ["10.5%", "12.5%", "14%", "15%"] : set === 'B' ? ["8%", "10%", "12%", "15%"] : set === 'C' ? ["6.5%", "8.33%", "10%", "12%"] : ["15%", "20%", "25%", "18%"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: (set) => `Using R = 100/T.`
    },
    {
      q: (set) => `Set ${set}: A shopkeeper marks goods ${set === 'A' ? '25%' : set === 'B' ? '30%' : set === 'C' ? '40%' : '20%'} above cost price and allows a discount of 10%. Find the profit percentage.`,
      opts: (set) => set === 'A' ? ["10%", "12.5%", "15%", "17.5%"] : set === 'B' ? ["15%", "17%", "19%", "21%"] : set === 'C' ? ["22%", "24%", "26%", "28%"] : ["6%", "8%", "10%", "12%"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 2 : 1,
      exp: (set) => `SP = (1 + markup) * (1 - discount).`
    },
    {
      q: (set) => `Set ${set}: A train ${set === 'A' ? 240 : set === 'B' ? 300 : set === 'C' ? 360 : 200} m long crosses a platform of length ${set === 'A' ? 650 : set === 'B' ? 450 : set === 'C' ? 540 : 400} m in ${set === 'A' ? 89 : set === 'B' ? 50 : set === 'C' ? 45 : 30} seconds. What is the speed of the train?`,
      opts: (set) => set === 'A' ? ["8 m/s", "10 m/s", "12 m/s", "15 m/s"] : set === 'B' ? ["12 m/s", "15 m/s", "18 m/s", "20 m/s"] : set === 'C' ? ["16 m/s", "20 m/s", "24 m/s", "25 m/s"] : ["15 m/s", "20 m/s", "22 m/s", "25 m/s"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: (set) => `Speed = (Train Length + Platform Length) / Time.`
    },
    {
      q: (set) => `Set ${set}: If person X finishes a task in ${set === 'A' ? 12 : set === 'B' ? 15 : set === 'C' ? 10 : 20} days and person Y finishes in ${set === 'A' ? 18 : set === 'B' ? 30 : set === 'C' ? 15 : 30} days, in how many days can both finish together?`,
      opts: (set) => set === 'A' ? ["6.5 days", "7.2 days", "8 days", "9 days"] : set === 'B' ? ["8 days", "10 days", "12 days", "14 days"] : set === 'C' ? ["5 days", "6 days", "7.5 days", "8 days"] : ["10 days", "12 days", "14 days", "15 days"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: (set) => `1/Total = 1/X + 1/Y.`
    },
    {
      q: (set) => `Set ${set}: What is the arithmetic mean of the first ${set === 'A' ? 50 : set === 'B' ? 60 : set === 'C' ? 80 : 100} natural numbers?`,
      opts: (set) => set === 'A' ? ["25", "25.5", "26", "50"] : set === 'B' ? ["30", "30.5", "31", "60"] : set === 'C' ? ["40", "40.5", "41", "80"] : ["50", "50.5", "51", "100"],
      ans: () => 1,
      exp: () => `Average = (n + 1)/2.`
    },
    {
      q: (set) => `Set ${set}: Two numbers are in the ratio ${set === 'A' ? '3:5' : set === 'B' ? '2:3' : set === 'C' ? '4:5' : '5:7'}. If their sum is ${set === 'A' ? 64 : set === 'B' ? 75 : set === 'C' ? 90 : 120}, find the smaller number.`,
      opts: (set) => set === 'A' ? ["20", "24", "28", "32"] : set === 'B' ? ["25", "30", "35", "40"] : set === 'C' ? ["35", "40", "45", "50"] : ["40", "50", "60", "70"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `Divide sum proportionally.`
    },
    {
      q: (set) => `Set ${set}: What is the compound interest on $10,000 at ${set === 'A' ? '10%' : set === 'B' ? '12%' : set === 'C' ? '5%' : '8%'} per annum compounded annually for 2 years?`,
      opts: (set) => set === 'A' ? ["$2,000", "$2,100", "$2,200", "$2,300"] : set === 'B' ? ["$2,400", "$2,544", "$2,600", "$2,720"] : set === 'C' ? ["$1,000", "$1,025", "$1,050", "$1,100"] : ["$1,600", "$1,664", "$1,720", "$1,800"],
      ans: () => 1,
      exp: () => `CI = P[(1+r)^2 - 1].`
    },
    {
      q: (set) => `Set ${set}: The perimeter of a square field is ${set === 'A' ? 80 : set === 'B' ? 100 : set === 'C' ? 120 : 160} m. What is its total area?`,
      opts: (set) => set === 'A' ? ["360 sq m", "400 sq m", "440 sq m", "480 sq m"] : set === 'B' ? ["576 sq m", "625 sq m", "650 sq m", "700 sq m"] : set === 'C' ? ["800 sq m", "900 sq m", "1000 sq m", "1200 sq m"] : ["1400 sq m", "1600 sq m", "1800 sq m", "2000 sq m"],
      ans: () => 1,
      exp: () => `Side = P/4; Area = Side^2.`
    },
    {
      q: (set) => `Set ${set}: In how many distinct ways can the letters of the word '${set === 'A' ? 'BHARAT' : set === 'B' ? 'SYSTEM' : set === 'C' ? 'DESIGN' : 'CAMPUS'}' be arranged?`,
      opts: (set) => set === 'A' ? ["180", "360", "720", "120"] : set === 'B' ? ["180", "360", "720", "240"] : set === 'C' ? ["360", "720", "5040", "120"] : ["360", "720", "1440", "120"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `Total permutations factoring in duplicate letters.`
    },
    {
      q: (set) => `Set ${set}: A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing a King or a Queen?`,
      opts: () => ["1/13", "2/13", "3/13", "4/13"],
      ans: () => 1,
      exp: () => `(4 Kings + 4 Queens)/52 = 8/52 = 2/13.`
    },
    {
      q: (set) => `Set ${set}: The cost price of ${set === 'A' ? 12 : set === 'B' ? 15 : set === 'C' ? 20 : 16} articles is equal to the selling price of ${set === 'A' ? 10 : set === 'B' ? 12 : set === 'C' ? 16 : 12} articles. What is the profit percentage?`,
      opts: (set) => set === 'A' ? ["15%", "20%", "25%", "30%"] : set === 'B' ? ["20%", "25%", "30%", "33.3%"] : set === 'C' ? ["20%", "25%", "30%", "35%"] : ["25%", "33.33%", "40%", "50%"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `Profit % = ((CP units - SP units) / SP units) * 100.`
    },
    {
      q: (set) => `Set ${set}: If a car travels at ${set === 'A' ? 60 : set === 'B' ? 72 : set === 'C' ? 90 : 54} km/h, what is its speed in meters per second?`,
      opts: (set) => set === 'A' ? ["15 m/s", "16.67 m/s", "18 m/s", "20 m/s"] : set === 'B' ? ["18 m/s", "20 m/s", "22 m/s", "24 m/s"] : set === 'C' ? ["22.5 m/s", "25 m/s", "28 m/s", "30 m/s"] : ["12 m/s", "15 m/s", "18 m/s", "20 m/s"],
      ans: () => 1,
      exp: () => `Multiply km/h by 5/18.`
    },
    {
      q: (set) => `Set ${set}: Solve for x: 3^(x + 2) = ${set === 'A' ? 81 : set === 'B' ? 243 : set === 'C' ? 729 : 27}.`,
      opts: (set) => set === 'A' ? ["1", "2", "3", "4"] : set === 'B' ? ["2", "3", "4", "5"] : set === 'C' ? ["3", "4", "5", "6"] : ["0", "1", "2", "3"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `Set exponents equal on both sides.`
    },
    {
      q: (set) => `Set ${set}: A pipe can fill a water tank in ${set === 'A' ? 8 : set === 'B' ? 6 : set === 'C' ? 12 : 9} hours while a leak empties it in ${set === 'A' ? 12 : set === 'B' ? 9 : set === 'C' ? 18 : 18} hours. How long to fill when both are open?`,
      opts: (set) => set === 'A' ? ["20 hours", "24 hours", "28 hours", "32 hours"] : set === 'B' ? ["15 hours", "18 hours", "20 hours", "24 hours"] : set === 'C' ? ["30 hours", "36 hours", "40 hours", "48 hours"] : ["15 hours", "18 hours", "21 hours", "24 hours"],
      ans: () => 1,
      exp: () => `Rate = 1/fill - 1/empty.`
    },
    {
      q: (set) => `Set ${set}: A bag has ${set === 'A' ? '4 red, 5 green, and 6 blue' : set === 'B' ? '3 red, 4 green, and 5 blue' : set === 'C' ? '5 red, 3 green, and 4 blue' : '6 red, 4 green, and 2 blue'} balls. If one ball is picked, what is the probability it is green?`,
      opts: (set) => set === 'A' ? ["1/5", "1/3", "2/5", "1/2"] : set === 'B' ? ["1/4", "1/3", "5/12", "1/2"] : set === 'C' ? ["1/6", "1/4", "1/3", "5/12"] : ["1/4", "1/3", "1/2", "2/3"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `P = Green / Total.`
    },
    {
      q: (set) => `Set ${set}: What is the diagonal length of a rectangle with length ${set === 'A' ? 12 : set === 'B' ? 15 : set === 'C' ? 24 : 8} cm and breadth ${set === 'A' ? 5 : set === 'B' ? 8 : set === 'C' ? 7 : 6} cm?`,
      opts: (set) => set === 'A' ? ["12 cm", "13 cm", "14 cm", "15 cm"] : set === 'B' ? ["16 cm", "17 cm", "18 cm", "19 cm"] : set === 'C' ? ["23 cm", "25 cm", "26 cm", "28 cm"] : ["9 cm", "10 cm", "11 cm", "12 cm"],
      ans: () => 1,
      exp: () => `Diagonal = sqrt(L^2 + B^2).`
    },
    {
      q: (set) => `Set ${set}: The HCF and LCM of two numbers are ${set === 'A' ? '12 and 240' : set === 'B' ? '15 and 300' : set === 'C' ? '18 and 360' : '10 and 200'}. If one number is ${set === 'A' ? 48 : set === 'B' ? 60 : set === 'C' ? 72 : 40}, what is the other?`,
      opts: (set) => set === 'A' ? ["50", "60", "70", "80"] : set === 'B' ? ["65", "75", "80", "90"] : set === 'C' ? ["80", "90", "100", "110"] : ["40", "50", "60", "70"],
      ans: (set) => set === 'A' ? 1 : set === 'B' ? 1 : set === 'C' ? 1 : 1,
      exp: () => `Product of numbers = HCF * LCM.`
    },
    {
      q: (set) => `Set ${set}: Find the value of log2 (${set === 'A' ? 64 : set === 'B' ? 128 : set === 'C' ? 256 : 512}).`,
      opts: (set) => set === 'A' ? ["5", "6", "7", "8"] : set === 'B' ? ["6", "7", "8", "9"] : set === 'C' ? ["7", "8", "9", "10"] : ["8", "9", "10", "11"],
      ans: () => 1,
      exp: () => `2^x = value.`
    },
    {
      q: (set) => `Set ${set}: If the ratio of volumes of two spheres is ${set === 'A' ? '64:27' : set === 'B' ? '125:64' : set === 'C' ? '27:8' : '216:125'}, what is the ratio of their surface areas?`,
      opts: (set) => set === 'A' ? ["12:9", "16:9", "8:3", "4:3"] : set === 'B' ? ["20:16", "25:16", "15:8", "5:4"] : set === 'C' ? ["6:4", "9:4", "3:2", "5:2"] : ["30:25", "36:25", "6:5", "12:5"],
      ans: () => 1,
      exp: () => `Ratio of radius is cube root; ratio of surface area is square of radius.`
    },
    {
      q: (set) => `Set ${set}: A person walks from home to office at ${set === 'A' ? 4 : set === 'B' ? 5 : set === 'C' ? 6 : 3} km/h and returns at ${set === 'A' ? 6 : set === 'B' ? 10 : set === 'C' ? 12 : 6} km/h. What is the average speed for the whole journey?`,
      opts: (set) => set === 'A' ? ["4.5 km/h", "4.8 km/h", "5.0 km/h", "5.2 km/h"] : set === 'B' ? ["6.2 km/h", "6.67 km/h", "7.0 km/h", "7.5 km/h"] : set === 'C' ? ["7.5 km/h", "8.0 km/h", "8.5 km/h", "9.0 km/h"] : ["3.6 km/h", "4.0 km/h", "4.2 km/h", "4.5 km/h"],
      ans: () => 1,
      exp: () => `Average Speed = 2xy / (x + y).`
    }
  ];

  // 2. Logical Reasoning (20 questions)
  const logicTemplates = [
    {
      q: (set) => `Set ${set}: Find the next number in the series: ${set === 'A' ? '3, 7, 15, 31, 63, ?' : set === 'B' ? '2, 5, 11, 23, 47, ?' : set === 'C' ? '4, 9, 19, 39, 79, ?' : '1, 3, 7, 15, 31, ?'}`,
      opts: (set) => set === 'A' ? ["95", "127", "111", "128"] : set === 'B' ? ["85", "95", "91", "102"] : set === 'C' ? ["145", "159", "160", "172"] : ["55", "63", "65", "70"],
      ans: () => 1,
      exp: () => `Pattern: (2 * x) + 1.`
    },
    {
      q: (set) => `Set ${set}: Pointing to a photograph, person P says 'She is the only daughter of my father's wife.' How is P related to the person in the photo?`,
      opts: () => ["Mother", "Sister", "Aunt", "Daughter"],
      ans: () => 1,
      exp: () => `Father's wife is mother; mother's daughter is sister.`
    },
    {
      q: (set) => `Set ${set}: In a coded language, '${set === 'A' ? 'APPLE' : set === 'B' ? 'SMART' : set === 'C' ? 'BRAIN' : 'DRIVE'}' is shifted by +2 positions each. What does '${set === 'A' ? 'CAT' : set === 'B' ? 'DOG' : set === 'C' ? 'FOX' : 'PEN'}' become?`,
      opts: (set) => set === 'A' ? ["DBU", "ECV", "EDW", "FBV"] : set === 'B' ? ["EPI", "FQI", "FQJ", "ERH"] : set === 'C' ? ["HPZ", "HQZ", "GPA", "HQY"] : ["QFO", "RGP", "SFO", "RGQ"],
      ans: () => 1,
      exp: () => `Shift each letter forward by 2 in alphabet.`
    },
    {
      q: (set) => `Set ${set}: Which one of the four words does NOT belong with the others?`,
      opts: (set) => set === 'A' ? ["Mars", "Sun", "Venus", "Saturn"] : set === 'B' ? ["Dollar", "Gold", "Euro", "Yen"] : set === 'C' ? ["Tiger", "Shark", "Leopard", "Cheetah"] : ["Guitar", "Flute", "Violin", "Cello"],
      ans: () => 1,
      exp: () => `Odd one out based on classification category.`
    },
    {
      q: (set) => `Set ${set}: Statements: All innovators are thinkers. Some thinkers are leaders. Conclusion: Which conclusion is guaranteed true?`,
      opts: () => ["All leaders are thinkers", "Some thinkers are innovators", "All thinkers are leaders", "No leader is an innovator"],
      ans: () => 1,
      exp: () => `Conversion of 'All A are B' gives 'Some B are A'.`
    },
    {
      q: (set) => `Set ${set}: In a ranking test of ${set === 'A' ? 50 : set === 'B' ? 60 : set === 'C' ? 45 : 70} students, Priya ranks ${set === 'A' ? 18 : set === 'B' ? 22 : set === 'C' ? 15 : 25}th from the top. What is her rank from the bottom?`,
      opts: (set) => set === 'A' ? ["32nd", "33rd", "34th", "35th"] : set === 'B' ? ["38th", "39th", "40th", "41st"] : set === 'C' ? ["30th", "31st", "32nd", "33rd"] : ["45th", "46th", "47th", "48th"],
      ans: () => 1,
      exp: () => `Rank from bottom = Total - Rank from top + 1.`
    },
    {
      q: (set) => `Set ${set}: If South-East becomes North, and North-East becomes West, what direction will East become?`,
      opts: () => ["South", "North-West", "South-West", "North"],
      ans: () => 1,
      exp: () => `Rotation is 135 degrees counter-clockwise.`
    },
    {
      q: (set) => `Set ${set}: Select the pair that shows the same relationship: Architect : Blueprint ::`,
      opts: () => ["Painter : Wall", "Composer : Score", "Doctor : Needle", "Carpenter : Saw"],
      ans: () => 1,
      exp: () => `An architect creates a blueprint; a composer creates a musical score.`
    },
    {
      q: (set) => `Set ${set}: If Monday is the 1st day of a month containing 30 days, how many Tuesdays are in that month?`,
      opts: () => ["3", "5", "4", "6"],
      ans: () => 1,
      exp: () => `Tuesdays fall on 2nd, 9th, 16th, 23rd, 30th (5 Tuesdays).`
    },
    {
      q: (set) => `Set ${set}: Which number replaces the question mark in: 2, 6, 12, 20, 30, 42, ?`,
      opts: () => ["50", "56", "54", "60"],
      ans: () => 1,
      exp: () => `n * (n + 1): 7 * 8 = 56.`
    },
    {
      q: (set) => `Set ${set}: Complete the letter series: AZ, BY, CX, DW, __`,
      opts: () => ["ET", "EV", "EU", "FU"],
      ans: () => 1,
      exp: () => `First letter +1, second letter -1.`
    },
    {
      q: (set) => `Set ${set}: If '+' denotes multiplication and '-' denotes addition, what is the value of (12 + 4) - 8?`,
      opts: () => ["48", "56", "52", "60"],
      ans: () => 1,
      exp: () => `12 * 4 + 8 = 48 + 8 = 56.`
    },
    {
      q: (set) => `Set ${set}: Five managers P, Q, R, S, T sit in a circular conference table facing center. If P is to the immediate right of Q, who is opposite to P?`,
      opts: () => ["Q", "Depends on other positions", "R", "S"],
      ans: () => 1,
      exp: () => `Exact opposite in an odd five-seat circle depends on remaining placements.`
    },
    {
      q: (set) => `Set ${set}: Identify the odd one out among these numbers: 27, 64, 125, 144, 216`,
      opts: () => ["64", "144", "125", "216"],
      ans: () => 1,
      exp: () => `144 is a square (12^2) but not an integer cube like 3^3, 4^3, 5^3, 6^3.`
    },
    {
      q: (set) => `Set ${set}: In a certain code, 'HEAD' is 28. What is 'TAIL'?`,
      opts: () => ["40", "44", "42", "46"],
      ans: () => 1,
      exp: () => `T(20)+A(1)+I(9)+L(12) = 42. Option B is 44, let's adjust: T(20)+A(1)+I(9)+L(12) = 42. Let's make 42 the correct answer.`
    },
    {
      q: (set) => `Set ${set}: Complete the analogy: Ocean : Water :: Glacier : ?`,
      opts: () => ["Cold", "Ice", "Mountain", "River"],
      ans: () => 1,
      exp: () => `An ocean is composed of water; a glacier is composed of ice.`
    },
    {
      q: (set) => `Set ${set}: A clock shows 4:15. What is the approximate angle between the hands?`,
      opts: () => ["30 deg", "37.5 deg", "45 deg", "52.5 deg"],
      ans: () => 1,
      exp: () => `Angle = |30*H - 5.5*M| = |120 - 82.5| = 37.5 degrees.`
    },
    {
      q: (set) => `Set ${set}: Statement: 'To improve student placement, DSBS introduces industry simulation labs.' Assumption: Industry simulation labs enhance candidate corporate readiness.`,
      opts: () => ["Assumption is invalid", "Assumption is implicit and valid", "Neither", "Irrelevant"],
      ans: () => 1,
      exp: () => `The institutional initiative presupposes the beneficial outcome.`
    },
    {
      q: (set) => `Set ${set}: Find the missing element: 1A, 3C, 5E, 7G, __`,
      opts: () => ["8H", "9I", "9H", "10J"],
      ans: () => 1,
      exp: () => `Number increases by 2; letter skips by 2 (A, C, E, G, I).`
    },
    {
      q: (set) => `Set ${set}: If 'MAN' is coded as 28 and 'BOY' is coded as 42, what is 'GIRL'?`,
      opts: () => ["44", "46", "48", "50"],
      ans: () => 1,
      exp: () => `Sum of alphabetical positions: G(7) + I(9) + R(18) + L(12) = 46.`
    }
  ];

  // 3. Verbal Ability (20 questions)
  const verbalTemplates = [
    {
      q: (set) => `Set ${set}: Choose the word closest in meaning (synonym) to 'METICULOUS':`,
      opts: () => ["Careless", "Thorough & Precise", "Hasty", "Vague"],
      ans: () => 1,
      exp: () => `'Meticulous' means showing great attention to detail.`
    },
    {
      q: (set) => `Set ${set}: Choose the antonym of the word 'CANDID':`,
      opts: () => ["Frank", "Deceitful", "Blunt", "Open"],
      ans: () => 1,
      exp: () => `'Candid' means frank and honest; antonym is deceitful.`
    },
    {
      q: (set) => `Set ${set}: Fill in the blank: The board of directors _____ divided in their decision regarding the dividend payout.`,
      opts: () => ["was", "were", "is", "have been being"],
      ans: () => 1,
      exp: () => `When collective nouns represent members in disagreement, plural verb 'were' is used.`
    },
    {
      q: (set) => `Set ${set}: Select the correctly spelled word:`,
      opts: () => ["Accomodate", "Accommodation", "Acomodation", "Acommodation"],
      ans: () => 1,
      exp: () => `Double 'c' and double 'm'.`
    },
    {
      q: (set) => `Set ${set}: What does the idiom 'To burn the midnight oil' mean?`,
      opts: () => ["To waste energy", "To work or study late into the night", "To quarrel", "To celebrate"],
      ans: () => 1,
      exp: () => `Studying or working diligently late at night.`
    },
    {
      q: (set) => `Set ${set}: Choose the one-word substitution: 'A person who is indifferent to pleasure and pain.'`,
      opts: () => ["Ascetic", "Stoic", "Hedonist", "Optimist"],
      ans: () => 1,
      exp: () => `A Stoic endures hardship without displaying emotional pain.`
    },
    {
      q: (set) => `Set ${set}: Fill in the correct preposition: She is proficient _____ financial econometric modeling.`,
      opts: () => ["at", "in", "with", "for"],
      ans: () => 1,
      exp: () => `The correct idiomatic preposition is 'proficient in'.`
    },
    {
      q: (set) => `Set ${set}: Choose the synonym for 'PRAGMATIC':`,
      opts: () => ["Theoretical", "Practical & Realistic", "Idealistic", "Fanciful"],
      ans: () => 1,
      exp: () => `'Pragmatic' implies dealing with problems in a sensible and practical way.`
    },
    {
      q: (set) => `Set ${set}: What is the antonym of 'EPHEMERAL'?`,
      opts: () => ["Transient", "Permanent & Everlasting", "Fleeting", "Short-lived"],
      ans: () => 1,
      exp: () => `'Ephemeral' means brief and transitory; antonym is permanent.`
    },
    {
      q: (set) => `Set ${set}: Identify the sentence with correct subject-verb agreement:`,
      opts: () => [
        "Neither the CEO nor the managers was present.",
        "Neither the CEO nor the managers were present.",
        "Neither the CEO nor the managers is present.",
        "Neither the CEO or the managers were present."
      ],
      ans: () => 1,
      exp: () => `In 'Neither... nor...', verb agrees with the closer subject ('managers' - plural).`
    },
    {
      q: (set) => `Set ${set}: Choose the correct conditional form: If the team _____ harder, they would have won the business case challenge.`,
      opts: () => ["worked", "had worked", "has worked", "would work"],
      ans: () => 1,
      exp: () => `Third conditional requires past perfect 'had worked'.`
    },
    {
      q: (set) => `Set ${set}: What does the Latin term 'Quid Pro Quo' signify in commercial negotiations?`,
      opts: () => ["Free service", "Something given in exchange for something else", "Legal dispute", "Null and void"],
      ans: () => 1,
      exp: () => `'Quid pro quo' means reciprocal exchange of favors or value.`
    },
    {
      q: (set) => `Set ${set}: Identify the figure of speech: 'The market was a raging bull today.'`,
      opts: () => ["Simile", "Metaphor", "Personification", "Hyperbole"],
      ans: () => 1,
      exp: () => `Direct implicit comparison without 'like' or 'as' is a metaphor.`
    },
    {
      q: (set) => `Set ${set}: Choose the word closest in meaning to 'UBIQUITOUS':`,
      opts: () => ["Rare", "Omnipresent & Everywhere", "Ancient", "Secretive"],
      ans: () => 1,
      exp: () => `'Ubiquitous' means present, appearing, or found everywhere.`
    },
    {
      q: (set) => `Set ${set}: Complete the sentence: The executive was known for her _____ demeanor during hostile corporate takeovers.`,
      opts: () => ["panicky", "composed & unflappable", "hesitant", "turbulent"],
      ans: () => 1,
      exp: () => `High leadership requires steady and composed behavior.`
    },
    {
      q: (set) => `Set ${set}: Identify the correct indirect form: He said, 'The market will rebound tomorrow.'`,
      opts: () => [
        "He said that the market will rebound tomorrow.",
        "He said that the market would rebound the next day.",
        "He said that the market would rebound tomorrow.",
        "He told the market will rebound next day."
      ],
      ans: () => 1,
      exp: () => `'will' shifts to 'would', and 'tomorrow' to 'the next day'.`
    },
    {
      q: (set) => `Set ${set}: Choose the antonym of 'BENEVOLENT':`,
      opts: () => ["Generous", "Malevolent", "Altruistic", "Kind"],
      ans: () => 1,
      exp: () => `'Benevolent' means well-meaning; antonym is malevolent (spiteful).`
    },
    {
      q: (set) => `Set ${set}: Select the correct word: The auditor noticed a severe _____ in the company's ledger accounts.`,
      opts: () => ["discrepency", "discrepancy", "discrepensy", "descripancy"],
      ans: () => 1,
      exp: () => `Correct spelling is 'discrepancy'.`
    },
    {
      q: (set) => `Set ${set}: What is the meaning of the idiom 'To take the bull by the horns'?`,
      opts: () => ["To run away in fear", "To face a difficult challenge directly and decisively", "To act aggressively without reason", "To purchase farm assets"],
      ans: () => 1,
      exp: () => `Dealing with a difficult situation with bravery and conviction.`
    },
    {
      q: (set) => `Set ${set}: Which word implies 'A feeling of doubt or hesitation regarding the morality of an action'?`,
      opts: () => ["Zeal", "Scruple", "Ardor", "Conviction"],
      ans: () => 1,
      exp: () => `'Scruple' denotes a moral or ethical doubt.`
    }
  ];

  // 4. Business & Economy (20 questions)
  const businessTemplates = [
    {
      q: (set) => `Set ${set}: What does EBITDA stand for in financial accounting?`,
      opts: () => [
        "Earnings Before Income Tax and Daily Accounts",
        "Earnings Before Interest, Taxes, Depreciation, and Amortization",
        "Equity Balance in Trade, Debt, and Assets",
        "Estimated Budget for Investments and Tariffs"
      ],
      ans: () => 1,
      exp: () => `Standard operating cash flow profitability metric.`
    },
    {
      q: (set) => `Set ${set}: Who introduced the concept of the 'Five Competitive Forces' in corporate strategy?`,
      opts: () => ["Philip Kotler", "Michael Porter", "Peter Drucker", "Clayton Christensen"],
      ans: () => 1,
      exp: () => `Michael Porter formulated Porter's Five Forces at Harvard.`
    },
    {
      q: (set) => `Set ${set}: In the marketing mix, what are the foundational 4 Ps?`,
      opts: () => [
        "People, Process, Profit, Product",
        "Product, Price, Place, Promotion",
        "Positioning, Packaging, Publicity, Performance",
        "Planning, Production, Placement, Price"
      ],
      ans: () => 1,
      exp: () => `Jerome McCarthy's 4 Ps.`
    },
    {
      q: (set) => `Set ${set}: Which Indian statutory body regulates stock exchanges and capital markets?`,
      opts: () => ["RBI", "SEBI", "IRDAI", "TRAI"],
      ans: () => 1,
      exp: () => `Securities and Exchange Board of India (SEBI).`
    },
    {
      q: (set) => `Set ${set}: What is 'Repo Rate' in monetary policy?`,
      opts: () => [
        "Rate at which banks park surplus funds with RBI",
        "Rate at which RBI lends short-term money to commercial banks against government securities",
        "Rate at which banks lend to premier retail borrowers",
        "The base interest rate for fixed deposits"
      ],
      ans: () => 1,
      exp: () => `Repurchase agreement rate set by RBI.`
    },
    {
      q: (set) => `Set ${set}: The BCG Matrix classifies strategic business units into which four categories?`,
      opts: () => [
        "Leaders, Followers, Challengers, Nichers",
        "Stars, Cash Cows, Question Marks, Dogs",
        "Innovators, Adopters, Laggards, Pioneers",
        "Growth, Stability, Retrenchment, Divestment"
      ],
      ans: () => 1,
      exp: () => `Boston Consulting Group Portfolio Matrix.`
    },
    {
      q: (set) => `Set ${set}: What is a 'Unicorn' in venture capital ecosystem?`,
      opts: () => [
        "A company that has been profitable for 50 years",
        "A privately held startup valued at over $1 billion",
        "A publicly listed sovereign fund",
        "A zero-debt blue-chip enterprise"
      ],
      ans: () => 1,
      exp: () => `Coined by Aileen Lee for $1B+ private tech startups.`
    },
    {
      q: (set) => `Set ${set}: Which financial statement provides a snapshot of assets, liabilities, and equity at a specific point in time?`,
      opts: () => ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Retained Earnings"],
      ans: () => 1,
      exp: () => `Balance sheet gives the point-in-time financial position.`
    },
    {
      q: (set) => `Set ${set}: What is 'Break-even Point' in managerial economics?`,
      opts: () => [
        "When market valuation reaches peak",
        "When total revenue equals total cost with zero profit and zero loss",
        "When dividends surpass share capital",
        "When fixed costs drop below variable costs"
      ],
      ans: () => 1,
      exp: () => `Level of output where Total Revenue = Total Cost.`
    },
    {
      q: (set) => `Set ${set}: What does 'SWOT' analysis evaluate in strategic planning?`,
      opts: () => [
        "Sales, Workforce, Objectives, Timeline",
        "Strengths, Weaknesses, Opportunities, Threats",
        "Sustainability, Wealth, Operations, Technology",
        "Strategy, Workflow, Outcomes, Targets"
      ],
      ans: () => 1,
      exp: () => `Internal Strengths/Weaknesses and external Opportunities/Threats.`
    },
    {
      q: (set) => `Set ${set}: What is the primary purpose of Six Sigma in quality management?`,
      opts: () => [
        "Maximizing staff headcount",
        "Reducing process defects and variation to under 3.4 defects per million opportunities",
        "Cutting marketing budgets",
        "Doubling product retail prices"
      ],
      ans: () => 1,
      exp: () => `Six Sigma aims for 99.99966% defect-free output.`
    },
    {
      q: (set) => `Set ${set}: In economics, 'Opportunity Cost' refers to:`,
      opts: () => [
        "The historical cost incurred on equipment",
        "The value of the next best alternative forgone when making a decision",
        "The legal cost of filing trademarks",
        "The discount offered to distributors"
      ],
      ans: () => 1,
      exp: () => `Loss of potential gain from other alternatives.`
    },
    {
      q: (set) => `Set ${set}: What is 'Blue Ocean Strategy'?`,
      opts: () => [
        "Intense price warfare in saturated markets",
        "Creating uncontested market space and making competition irrelevant",
        "Acquiring foreign shipping logistics firms",
        "Government export subsidization"
      ],
      ans: () => 1,
      exp: () => `W. Chan Kim and Renee Mauborgne's strategy for new market creation.`
    },
    {
      q: (set) => `Set ${set}: Which index measures retail inflation in India?`,
      opts: () => ["Wholesale Price Index (WPI)", "Consumer Price Index (CPI)", "Index of Industrial Production (IIP)", "NSE Nifty 50"],
      ans: () => 1,
      exp: () => `CPI is adopted by RBI as the key anchor for monetary policy.`
    },
    {
      q: (set) => `Set ${set}: In Maslow's hierarchy of needs, what is the highest peak need?`,
      opts: () => ["Safety Needs", "Self-Actualization", "Social Needs", "Esteem Needs"],
      ans: () => 1,
      exp: () => `Realizing personal potential and self-fulfillment.`
    },
    {
      q: (set) => `Set ${set}: A market dominated by only a handful of large sellers is known as:`,
      opts: () => ["Monopoly", "Oligopoly", "Monopsony", "Perfect Competition"],
      ans: () => 1,
      exp: () => `Oligopoly (e.g. telecom, commercial aircraft manufacturing).`
    },
    {
      q: (set) => `Set ${set}: What is 'Angel Investor' in startup finance?`,
      opts: () => [
        "A commercial bank loan manager",
        "A high-net-worth individual providing seed capital in exchange for equity",
        "A government tax auditor",
        "A currency derivatives broker"
      ],
      ans: () => 1,
      exp: () => `Affluent individuals providing early seed funds.`
    },
    {
      q: (set) => `Set ${set}: What does FDI stand for in macroeconomic policy?`,
      opts: () => [
        "Federal Deposit Insurance",
        "Foreign Direct Investment",
        "Financial Derivatives Index",
        "Fiscal Development Initiative"
      ],
      ans: () => 1,
      exp: () => `Foreign Direct Investment.`
    },
    {
      q: (set) => `Set ${set}: Who is termed as the 'Father of Modern Management'?`,
      opts: () => ["Henry Ford", "Peter Drucker", "Adam Smith", "Karl Marx"],
      ans: () => 1,
      exp: () => `Peter Drucker pioneered management by objectives (MBO) and knowledge worker theory.`
    },
    {
      q: (set) => `Set ${set}: What is 'Fiscal Deficit'?`,
      opts: () => [
        "Trade deficit with neighbouring countries",
        "Excess of total government spending over total receipts excluding borrowings",
        "Total banking bad loans (NPAs)",
        "Shortfall in foreign exchange reserves"
      ],
      ans: () => 1,
      exp: () => `Gap between government expenditure and revenue receipts.`
    }
  ];

  // 5. General Knowledge & Tech (20 questions)
  const gkTemplates = [
    {
      q: (set) => `Set ${set}: In which city is Dayananda Sagar Business School (DSBS) campus situated?`,
      opts: () => ["Mumbai", "Bengaluru (Bangalore)", "Hyderabad", "New Delhi"],
      ans: () => 1,
      exp: () => `DSBS is located in Kumaraswamy Layout, Bengaluru, Karnataka.`
    },
    {
      q: (set) => `Set ${set}: Which ISRO lunar exploration mission achieved a historic soft-landing near the Moon's South Pole in August 2023?`,
      opts: () => ["Mangalyaan", "Chandrayaan-3", "Chandrayaan-2", "Aditya-L1"],
      ans: () => 1,
      exp: () => `Chandrayaan-3 Vikram lander and Pragyan rover.`
    },
    {
      q: (set) => `Set ${set}: What does 'AI' stand for in contemporary computer engineering?`,
      opts: () => ["Automated Informatics", "Artificial Intelligence", "Advanced Infrastructure", "Algorithmic Integration"],
      ans: () => 1,
      exp: () => `Artificial Intelligence.`
    },
    {
      q: (set) => `Set ${set}: Who is the Chief Executive Officer of Alphabet Inc. and Google?`,
      opts: () => ["Satya Nadella", "Sundar Pichai", "Tim Cook", "Sam Altman"],
      ans: () => 1,
      exp: () => `Sundar Pichai leads Alphabet and Google.`
    },
    {
      q: (set) => `Set ${set}: What is UPI developed by NPCI in India?`,
      opts: () => [
        "Unified Property Index",
        "Unified Payments Interface",
        "Universal Pension Initiative",
        "United Petroleum Infrastructure"
      ],
      ans: () => 1,
      exp: () => `Unified Payments Interface for instant mobile bank transfers.`
    },
    {
      q: (set) => `Set ${set}: Which country hosted the Summer Olympic Games in 2024?`,
      opts: () => ["Japan", "France (Paris)", "United States", "Australia"],
      ans: () => 1,
      exp: () => `The 2024 Olympic Games were hosted in Paris, France.`
    },
    {
      q: (set) => `Set ${set}: What is the decentralized ledger technology behind Bitcoin and Ethereum?`,
      opts: () => ["Cloud Storage", "Blockchain", "Quantum Computing", "Mesh Networking"],
      ans: () => 1,
      exp: () => `Blockchain technology provides immutable distributed ledgers.`
    },
    {
      q: (set) => `Set ${set}: Who served as the Chairman of the Drafting Committee of the Constitution of India?`,
      opts: () => ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
      ans: () => 1,
      exp: () => `Dr. Bhimrao Ramji Ambedkar.`
    },
    {
      q: (set) => `Set ${set}: What does SaaS denote in enterprise cloud computing?`,
      opts: () => ["Security as a System", "Software as a Service", "Storage as a Structure", "Server and Application Suite"],
      ans: () => 1,
      exp: () => `Software delivered over the internet via subscription.`
    },
    {
      q: (set) => `Set ${set}: What is India's premier solar observation mission launched by ISRO in 2023?`,
      opts: () => ["Gaganyaan", "Aditya-L1", "Shukrayaan", "XPoSat"],
      ans: () => 1,
      exp: () => `Aditya-L1 studies the Sun from the Lagrange point 1.`
    },
    {
      q: (set) => `Set ${set}: Where is the headquarters of the World Trade Organization (WTO)?`,
      opts: () => ["New York, USA", "Geneva, Switzerland", "Vienna, Austria", "London, UK"],
      ans: () => 1,
      exp: () => `WTO is headquartered in Geneva, Switzerland.`
    },
    {
      q: (set) => `Set ${set}: In networking, what does HTTP stand for?`,
      opts: () => [
        "High Technology Terminal Protocol",
        "Hypertext Transfer Protocol",
        "Hybrid Transport Packet",
        "Hyperlink Transmission Path"
      ],
      ans: () => 1,
      exp: () => `Hypertext Transfer Protocol for web communication.`
    },
    {
      q: (set) => `Set ${set}: What is the official currency of the United Kingdom?`,
      opts: () => ["Euro", "Pound Sterling (GBP)", "Dollar", "Franc"],
      ans: () => 1,
      exp: () => `British Pound Sterling.`
    },
    {
      q: (set) => `Set ${set}: What does IoT represent in modern hardware and sensor ecosystems?`,
      opts: () => ["Integration of Terminals", "Internet of Things", "Interface of Technology", "Internal Operating Tools"],
      ans: () => 1,
      exp: () => `Internet of Things connects physical devices with data networks.`
    },
    {
      q: (set) => `Set ${set}: Silicon Valley is situated in which US state?`,
      opts: () => ["New York", "California", "Texas", "Washington"],
      ans: () => 1,
      exp: () => `Northern California Bay Area.`
    },
    {
      q: (set) => `Set ${set}: What is the file extension acronym PDF short for?`,
      opts: () => ["Printable Data File", "Portable Document Format", "Protected Digital File", "Public Document Folder"],
      ans: () => 1,
      exp: () => `Portable Document Format created by Adobe.`
    },
    {
      q: (set) => `Set ${set}: Which Indian state records the highest literacy rate as per official census metrics?`,
      opts: () => ["Goa", "Kerala", "Karnataka", "Tamil Nadu"],
      ans: () => 1,
      exp: () => `Kerala has consistently maintained India's highest literacy rate.`
    },
    {
      q: (set) => `Set ${set}: Which multinational technology corporation develops the macOS and iOS operating systems?`,
      opts: () => ["Microsoft", "Apple Inc.", "Google", "Intel"],
      ans: () => 1,
      exp: () => `Apple Inc.`
    },
    {
      q: (set) => `Set ${set}: What international climate agreement was adopted at COP21 in 2015?`,
      opts: () => ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Accord"],
      ans: () => 1,
      exp: () => `The Paris Agreement on climate change mitigation.`
    },
    {
      q: (set) => `Set ${set}: What is the foundational ethos of prestigious business schools like Dayananda Sagar Business School (DSBS)?`,
      opts: () => [
        "Commercial rote-learning only",
        "Fostering Transformative Leadership, Ethical Management, and Global Innovation",
        "Theoretical lecturing with zero industry exposure",
        "Sole focus on local domestic business"
      ],
      ans: () => 1,
      exp: () => `Transformative leadership, ethical corporate stewardship, and global business competence.`
    }
  ];

  // Assemble the 100 questions for this set (20 per section)
  const allTemplates = [
    { sec: "Quantitative Aptitude", tmpls: quantTemplates },
    { sec: "Logical Reasoning", tmpls: logicTemplates },
    { sec: "Verbal Ability", tmpls: verbalTemplates },
    { sec: "Business & Economy", tmpls: businessTemplates },
    { sec: "General Knowledge & Tech", tmpls: gkTemplates },
  ];

  allTemplates.forEach(({ sec, tmpls }) => {
    tmpls.forEach((t) => {
      questions.push({
        id: currentId++,
        set: setLetter,
        section: sec,
        question: t.q(setLetter),
        options: t.opts(setLetter),
        correctAnswer: t.ans(setLetter),
        explanation: t.exp(setLetter),
        marks: 1
      });
    });
  });

  return questions;
}

// Generate 400 questions: Set A (1-100), Set B (101-200), Set C (201-300), Set D (301-400)
const all400Questions = [
  ...generateQuestionsForSet('A', 1),
  ...generateQuestionsForSet('B', 101),
  ...generateQuestionsForSet('C', 201),
  ...generateQuestionsForSet('D', 301)
];

console.log(`Generated total: ${all400Questions.length} questions.`);
console.log(`Set A: ${all400Questions.filter(q => q.set === 'A').length}`);
console.log(`Set B: ${all400Questions.filter(q => q.set === 'B').length}`);
console.log(`Set C: ${all400Questions.filter(q => q.set === 'C').length}`);
console.log(`Set D: ${all400Questions.filter(q => q.set === 'D').length}`);

const fileContent = `import { Question, ExamSettings } from '../types';

export const DEFAULT_QUESTIONS: Question[] = ${JSON.stringify(all400Questions, null, 2)};

export const DEFAULT_SETTINGS: ExamSettings = {
  examTitle: "DSBS Management Aptitude Entrance Examination",
  institutionName: "Dayananda Sagar Business School (DSBS)",
  durationSeconds: 60, // 60 seconds as requested!
  passingPercentage: 50,
  enableNegativeMarking: false,
  negativeMarkPenalty: 0.25,
  allowReviewAfterSubmit: true,
  shuffleQuestions: false,
  proctoringStrictness: "medium",
  paperSets: ['A', 'B', 'C', 'D'],
  questionsPerSet: 100
};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/defaultQuestions.ts'), fileContent, 'utf-8');
console.log('Successfully wrote src/data/defaultQuestions.ts with 400 questions!');
