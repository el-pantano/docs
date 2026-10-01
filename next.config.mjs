import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: false,
      }
    ]
  },
})
