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
    }
];
