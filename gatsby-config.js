module.exports = {
  siteMetadata: {
    title: 'Gurukool',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'kmranrg, react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'v18lyqpsq85o',
        accessToken: 'Z44A_UKnaXL2WaAwiXfuxjUYp5-9BrVGfw1I8j4u5pI'
      }
    }
  ],
  pathPrefix: "/Gurukool",
}
