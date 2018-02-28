const _= require('lodash')


module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.erros) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({erros})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const erros = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors

}