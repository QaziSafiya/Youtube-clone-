var Listname = [
  "mahi",
  "Gori",
  "Popeye",
  "Aashu",
  "Keserwani",
  "Mohini",
  "Rattrap",
  "Coder",
  "CodeTitans",
  "Codewiz",
  "Hacathonbuzz",
  "Aurelia Rios",
  "Elyse Lloyd",
  "Grey Kemp",
  "Mason McKenzie",
  "Briar Dixon",
  "Camden Hinton",
  "Jaelynn Brady",
  "Reed Hinton",
  "aelynn Cherry",
  "Rome Frye",
  "Raya Payne",
  "Edward Stone",
  "Catalina Ortiz",
  "Landon Lawrence",
  "Lauren Thompson",
  "Theodore Avalos",
  "Paloma Washington",
  "Juan Ayala",
  "Blair Walter",
  "Lochlan Yoder",
  "Emerie Wolf",

  "Milan Morse",
  "Kairi Weiss",
  "Koa Juarez",
  "Juliet Simmons",
  "Harrison Sherman",
  "Addilyn Jarvis",
  "Marlon Booth",
  "Zariyah Lewis",
  "Wyatt Peck",
  "Crystal Kennedy",
  "Maxwell Brock",
];

const Randomemojies = ["🤠", "🤓", "🐼", "🙂", "🤖", "😘", " 🦝", "🚀", "⛄️"];

export function randomemoji() {
  return Randomemojies[Math.floor(Math.random() * Randomemojies.length)];
}
export function randomname() {
  return Listname[Math.floor(Math.random() * Listname.length)];
}

export function Randommessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
