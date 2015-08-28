var chai = require('chai')

global.sinon = require('sinon')

var sinonChai = require('sinon-chai')
chai.use(sinonChai)

global.expect = chai.expect
