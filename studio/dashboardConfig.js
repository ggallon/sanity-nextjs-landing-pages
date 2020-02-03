export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e3839d92dc1113995ba4616',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fgw1398y',
                  apiId: '55e5ae7c-a70d-4b17-903c-5cb49bd3909b'
                },
                {
                  buildHookId: '5e3839d91c77182c1dd40fdd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9qgg3gks',
                  apiId: '524b224f-c6e3-4ccd-8035-1c03b90500f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ggallon/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9qgg3gks.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
