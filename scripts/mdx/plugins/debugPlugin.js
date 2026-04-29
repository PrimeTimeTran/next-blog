export default {
  name: 'debugPlugin',
  before_tokenize(ctx) {
    console.log('TOKENIZING:', ctx.file)
  },
  after_write(ctx) {
    console.log('after_write:', ctx.file)
  },
}
