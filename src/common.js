export function capitalize(string) {
    var firstLetter = string[0]
    var restOfWord = string.slice(1) // start at the 1 index

    return firstLetter.toUpperCase() + restOfWord
}