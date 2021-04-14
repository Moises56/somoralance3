const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/somoralancedb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// })
//     .then(db => console.log('base Conectada'))
//     .catch(err => console.log(err));

    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb+srv://moises:asd.456@cluster0.rucpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
 .then(db => console.log('Base Conectada'))
 .catch(err => console.log(err));
 
 //mongodb+srv://moises:asd.456@cluster0.rucpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority