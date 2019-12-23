import React from 'react'

export const foo = {
  a : {
    b: {
      c: {
        hello: (name: string) => `Hello, ${name}`,
      },
    },
  },
  name: () => 'foo',
}