module.exports = {
  title: 'Sthamer Doku',
  locales: {
    '/': {
      lang: 'de-DE',
      title: 'Sthamer',
      description: ''
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  themeConfig: {
    repo: 'Kicktemp/sthamerdoc',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Deutsch',
        selectText: 'Sprachen',
        ariaLabel: 'Sprachen',
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        lastUpdated: 'Zuletzt aktualisiert',
        serviceWorker: {
          updatePopup: {
            message: "Neuer Inhalt verfügbar.",
            buttonText: "Neuladen"
          }
        },
        nav: require('./nav/de'),
        sidebar: {
          '/dokumentation/': getDokumentationSidebar('Frontend', 'Backend'),
          '/ablauf/': getAblaufSidebar(),
          '/todo/' : getTodoSidebar(),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.theme-default-content img',
        delay: 500,
        options: {
          margin: 24,
          background: '#009fe3',
          scrollOffset: 0,
        },
      },
    ],
  ],
  extraWatchFiles: [
    '.vuepress/nav/de.js'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  }
}

function getDokumentationSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        'frontend/',
        'frontend/texte',
        'frontend/mehrsprachigkeit'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'backend/',
        'backend/schaum_komponente'
      ]
    }
  ]
}

function getAblaufSidebar () {
  return [
    {
      title: 'CLI / Cronjobs',
      collapsable: false,
      children: [
        'cli/',
        'cli/csv',
        'cli/joomlauser',
      ]
    },
    {
      title: 'Frontend',
      collapsable: false,
      children: [
        'frontend/',
      ]
    },
    {
      title: 'Backend',
      collapsable: false,
      children: [
        'backend/'
      ]
    }
  ]
}

function getTodoSidebar()
{
  return [

    {
      title: '',
      collapsable: false,
      children: [
          '',
          'fragen',
        'backlog'
          ]
    }
  ]
}