console.log('Loading svizzerina index.js...')
require('../css/svizzerina.sass')

const initialize = () => {
  console.log('initialize svizzerina')
}
console.log('initialize function:', initialize)

const foo = () => console.log('foooooooooooo!')

export default initialize
export {foo}
