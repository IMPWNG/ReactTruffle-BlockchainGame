const { assert } = require('chai')

const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
  let token

  before(async () => {
    token = await MemoryToken.deployed()
  })

  describe('deployment', async() => {
    it('deploys successfully', async () => {
      const address = token.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('Has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'Memory Token')
    })
    it('Has a symbol', async () => {
      const symbol = await token.symbol()
      assert.equal(symbol, 'MEMORY')
    })
  })
  describe('token distribution', async () => {
    let result

    it('mints token', async () => {
      await token.mint(accounts[0], 'https://www.token-uri.con/nft')
      
      //It should increase the total supply 
      result = await token.totalSupply()
      assert.equal(result.toString(), '1', 'total supply is correct ')

      //It should increments the owner balance 
      result = await token.balanceOf(accounts[0])
      assert.equal(result.toString(), '1', 'balanceOf is correct')

      //The token should belong to the owner
      result = await token.ownerOf('1')
      assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')
      result = await token.tokenOfOwnerByIndex(accounts[0], 0)

      //The owner can see the token
    })
  })
})
 