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

const findNote2 = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title === noteTitle;
  });
};
const note2 = findNote2(notes, "Office modification");
console.log(note2);

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

console.log ("March" < "January") // false

const sortNotes = function (notes) {
  notes.sort( function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)