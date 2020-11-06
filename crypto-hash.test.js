const Block = require('./block');
const {GENESIS_DATA} = require('./config');
const cryptoHash= require('./crypto-hash');


const { D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A}
describe('cryptoHash()', () =>{

if('generates a SHA-256 hashed output', () =>{
  expect(cryptoHash('foo'))
  .toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
});

it('produces the same hash with the same input arguments in any order', () =>{
  expect(cryptoHash('one', 'two', 'three'))
  .toEqual(cryptoHash('three', 'one', 'two'));
});

if('creates a SHA-256 `hash` based on the proper inputs', () =>{
  expect(mindedBlock.hash).toEqual(cryptoHash())
})

})
