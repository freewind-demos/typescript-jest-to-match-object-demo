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
        },
        {
          eee: [666, 777]
        }
      ]
    ).toMatchObject([
      {aaa: 111},
      {
        bbb: {
          ccc: 333
        }
      },
      {
        eee: [666, 777]
      }
    ])
  })
})
