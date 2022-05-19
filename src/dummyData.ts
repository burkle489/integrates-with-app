import { PRODUCT_ICONS } from "./constants"
import { Product } from "./constants/models"

export const PRODUCTS:Product[] = [
    {
        name: 'Notion',
        value: 'Notion',
        label: 'Notion',
        icon: PRODUCT_ICONS.NOTION,
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
        icon: PRODUCT_ICONS.ZAPIER,

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
        icon: PRODUCT_ICONS.WORDPRESS,
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
    {
        name: 'Woocommerce',
        value: 'Woocommerce',
        label: 'Woocommerce',
        icon: PRODUCT_ICONS.WOOCOMMERCE,
        description:
            "Build exactly the eCommerce website you want. WooCommerce is a customizable, open-source eCommerce platform built on WordPress.",

        integrations: [
            { value: 'Zapier', label: 'Zapier' },
            { value: 'Shopify', label: 'Shopify' },
            { value: 'Notion', label: 'Notion' },
            { value: 'Wordpress', label: 'Wordpress' },

        ],
    },
    {
        name: 'Shopify',
        value: 'Shopify',
        label: 'Shopify',
        icon: PRODUCT_ICONS.SHOPIFY,
        description:
            "If you can dream it, you can sell it with Shopify. Millionsof the world's most successful brands trust Shopify to sell, ship and process payments anywhere.",

        integrations: [
            { value: 'Zapier', label: 'Zapier' },
            { value: 'Mailchimp', label: 'Mailchimp' },
            { value: 'Woocommerce', label: 'Woocommerce' },
        ],
    },
    {
        name: 'Mailchimp',
        value: 'Mailchimp',
        label: 'Mailchimp',
        icon: PRODUCT_ICONS.MAILCHIMP,
        description:
            "Turn emails into revenue. Over 13 million businesses rely on Mailchimp to create and send engaging emails that reach the right people, build better relationships, and help drive revenue and growth.",

        integrations: [
            { value: 'Zapier', label: 'Zapier' },
            { value: 'Shopify', label: 'Shopify' },
            { value: 'Wordpress', label: 'Wordpress' },

        ],
    },
]
