const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/booksDB')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    price: Number,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    review: String
})

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    books: bookSchema,
})

const Book = mongoose.model("Book", bookSchema)

const Author = mongoose.model("Author", authorSchema)


const hobit = new Book({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 23,
    rating: 4.6,
    review: "The Hobbit is a children's fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the epic fantasy works The Lord of the Rings."
})

hobit.save()

const author = new Author({
    name: "J.R.R. Tolkien",
    age: 125,
    books: hobit,
})

author.save()


const lotr = new Book({
    title: "Lord of the Rings",
    price: 19,
    author: "J.R.R. Tolkien",
    rating: 4.9,
    review: "The Lord of the Rings is a fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the epic fantasy works The Hobbit and The Lord of the Rings."
})

const atomicHabits = new Book({
    title: "Atomic Habits",
    author: "James Clear",
    price: 21,
    rating: 4.9,
    review: 'atomic habits is a book by james clear about how to live a healthy life.'
})

// const sapiens = new Book({
//     title: "21 Lessons for the 21st Century",
//     author: "Yuval Noah Harari",
//     price: 29,
//     rating: 4.9,
//     review: "Sapiens explores the nature of our changing world and the impact of our changing human nature on our world."
// })

// sapiens.save()

// Book.insertMany([lotr, atomicHabits], (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Books inserted")
//     }
// })

// author.save()
// book.save()

// Book.updateOne({ title: "Atomic Habits" }, { author: "James Clear" }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Book updated")
//     }
// })

// Book.deleteOne({ _id: "62d17adb176c5dbdb1beefbd" }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Deleted one entry')
//     }
// })

// find data in collection
Book.find((err, books) => {
    if (err) {
        console.log(err)
    } else {
        console.log(books)
    }
})

