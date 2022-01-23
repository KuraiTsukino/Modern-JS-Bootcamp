// Remove all p tags that have "the" in the text.

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})
