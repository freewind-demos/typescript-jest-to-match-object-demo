describe('toMatchObject', () => {
  it('tests', () => {
    expect(
      [
        {aaa: 111},
        {
          bbb: {
            ccc: 333,
            ddd: 444
          }
        }
      ]
    ).toMatchObject([
      {aaa: 111},
      {
        bbb: {
          ccc: 333
        }
      }
    ])
  })
})
