const notes = [ {},
    {
      title: "My next trip",
      body: "I would like to Amsterdam"
    }, 
     {
       title: "Habbits to work on",
       body: "Exercise, Eating a bit better"
     },
     {
       title: "Office modification",
       body: "Get a new seat"
     }
   ]
   
   const findNote = function (notes, noteTitle) {
     const index = notes.findIndex(function (note, index) {
      return note.title === noteTitle
     })
     return notes[index] 
   }
   const note = findNote(notes, "Office modification")
   console.log(note) 
   
   const index = notes.findIndex(function (note, index) {
     return note.title === "Habbits to work on"
   })
   console.log (index)
   
   //const findNote = function (notes, noteTitle) {
   //  return notes.find(function (note, index) {
   //   return note.title === noteTitle
   //  })
   //}
   // const note = findNote(notes, "Office modification")
   //console.log(note)