export const PRODUCTS = [
    {
        name: 'Notion',
        value: 'Notion',
        label: 'Notion',
        description:
            'Too many tools? Too much chaos? With Notion, all your work is in one place. Notion is the best way to collaborate. For desktop and mobile. Better shared docs. Infinite flexibility.',
        integrations: [
            { value: 'Wordpress', label: 'Wordpress' },
            { value: 'Woocommerce', label: 'Woocommerce' },
            { value: 'Shopify', label: 'Shopify' },
            { value: 'Zapier', label: 'Zapier' },
            { value: 'Mailchimp', label: 'Mailchimp' },
        ],
    },
    {
        name: 'Zapier',
        value: 'Zapier',
        label: 'Zapier',
        description:
            'Zapier is a product that allows end users to integrate the web applications they use and automate workflows.',
        integrations: [
            { value: 'Wordpress', label: 'Wordpress' },
            { value: 'Woocommerce', label: 'Woocommerce' },

            { value: 'Shopify', label: 'Shopify' },
            { value: 'Notion', label: 'Notion' },
            { value: 'Mailchimp', label: 'Mailchimp' },
        ],
    },
    {
        name: 'Wordpress',
        value: 'Wordpress',
        label: 'Wordpress',
        iconPath: 'src/assets/productIcons/wordpress.jpg',

        description:
            'Create a free website or build a blog with ease on WordPress.com. Dozens of free, customizable, mobile-ready designs and themes. Free hosting and support.',

        integrations: [
            { value: 'Zapier', label: 'Zapier' },
            { value: 'Shopify', label: 'Shopify' },
            { value: 'Notion', label: 'Notion' },
            { value: 'Mailchimp', label: 'Mailchimp' },
            { value: 'Woocommerce', label: 'Woocommerce' },
        ],
    },
]
