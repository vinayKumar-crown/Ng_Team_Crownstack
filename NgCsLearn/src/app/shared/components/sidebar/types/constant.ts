export const sideBarNav = [
    {
        route: 'theme',
        name: 'Theme'
    },
    {
        route: 'wc',
        name: 'Web Components'
    },
    {
        route: 'encapsulation',
        name: 'Encapsulation'
    },
    {
        route: 'locale',
        name: 'Locale & i18n'
    },
    {
        route: 'dynamic',
        name: 'Dynamic Components',
        children: [
            {
                route: 'dynamic/ad',
                name: 'Ads Example'
            },
            {
                route: 'dynamic/user',
                name: 'User Example'
            }
        ]
    },
    {
        route: 'conditionally-load',
        name: 'Load Module',
        children: [
            {
                route: 'conditionally-load/route',
                name: 'By Routing'
            },
            {
                route: 'conditionally-load/component',
                name: 'By Component'
            }
        ]
    },
    {
        route: 'tut-standalone',
        name: 'Tutorial Standalone',
        children: [
            {
                route: 'tut-standalone/basic',
                name: 'Basic Standalone Components'
            },
            {
                route: 'tut-standalone/bootstrap',
                name: 'Bootstrap Application'
            },
            {
                route: 'tut-standalone/routing',
                name: 'Routing'
            }
        ]
    }
];
