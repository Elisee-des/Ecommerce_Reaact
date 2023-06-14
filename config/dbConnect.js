const { default: monogoose } = requre('mongoose')

const dbConnect = () => {
    const conn = monogoose.connect('mongodb://localhost:27017')
}

 