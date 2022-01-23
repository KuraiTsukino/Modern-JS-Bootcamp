const notes = [
  {
    title: "My next trip",
    body: "I would like to Amsterdam",
  },
  {
    title: "Habbits to work on",
    body: "Exercise, Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// Method FINDINDEX.

const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title === noteTitle;
  });
  return notes[index];
};
const note = findNote(notes, "Office modification");
console.log(note);

const index = notes.findIndex(function (note, index) {
  return note.title === "Habbits to work on";
});
console.log(index);

// Method FIND.

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title === noteTitle;
  });
};
const note = findNote(notes, "Office modification");
console.log(note);

// Method FILTER. Filter a note.
const findNotes = function (notes, query) {
  const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
  return filteredNotes;
};

console.log(findNotes(notes, "eating"));

// Method SORT
