export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63639ef2948617679262b518',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2022-studio-7kygv8ex',
                  apiId: 'b560265b-a0a1-49f9-b9b8-40d28991033d'
                },
                {
                  buildHookId: '63639ef371760e67ac22ae34',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2022-web-duub9yjh',
                  apiId: '1648d4da-48ff-484d-b267-13e2e686b8ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-nextjs-landing-pages2022',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2022-web-duub9yjh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
