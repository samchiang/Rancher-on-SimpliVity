module.exports = {
  title: 'Rancher on HPE SimpliVity',
  dest: '../MVI1/',
  base: '/Rancher-on-SimpliVity/MVI1/',   
  plugins: ['vuepress-plugin-export'], 
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' }
    ],

    repo: 'testaction',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:

    docsRepo: 'https://github.com/HewlettPackard/Rancher-on-SimpliVity',
    // if your docs are not at the root of the repo:
    docsDir: 'docs-src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'docs-dev',

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',


    sidebar: [
      '/summary',
      {
        title: 'Release Notes',
        collapsable: true,
        children: [
          '/rel-notes/rel-notes',
          //'/rel-notes/new-features',
          //'/rel-notes/fixed-issues',
          '/rel-notes/known-issues'
        ]
      },
      {
        title: 'Solution overview',
        children: [
          'soln-overview/solution-overview',
          'soln-overview/containers-k8s-devops',
          'soln-overview/rancher-overview',
          'soln-overview/simplivity-overview',
          'soln-overview/solution-configuration',
          'soln-overview/solution-sizing',
          'soln-overview/high-availability',
          'soln-overview/playbooks'
        ]
      },
      {
        title: 'Configuring the solution',
        children: [
          'config-core/ansible-config',      
          'config-core/vmware-config',   
          'config-core/edit-vault'
        ]
      }

    ]
  }
}

      
