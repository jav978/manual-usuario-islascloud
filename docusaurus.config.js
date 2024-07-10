// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";



/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "IslasCloud",
    tagline: "Manual de Usuario",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://manual-usuario-islas-cloud.netlify.app",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "IslasCloud", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    markdown: {
        mermaid: true
    },
    themes: ["@docusaurus/theme-mermaid"],

    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },
    plugins: [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        require.resolve("docusaurus-plugin-image-zoom"),
        require.resolve("docusaurus-lunr-search")
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
                },
                blog: {
                    showReadingTime: true,
                   
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
                },
                theme: {
                    customCss: "./src/css/custom.css"
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            mermaid: {
                theme: { light: "neutral", dark: "forest" }
            },
           
            zoom: {
                // selector: '.markdown :not(em) > img',
                selector:
                    '.markdown :not(em) > img[src$=".png"], .markdown :not(em) > img[src$=".jpg"]',
                background: {
                    light: "rgb(255, 255, 255)",
                    dark: "rgb(50, 50, 50)"
                },
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                }
            },

            navbar: {
                //    title: "IslasCloud",
                title: "IslasCloud",
                //style: "dark",
                hideOnScroll: false,
                logo: {
                    alt: "IslasCloud mobile",
                    src: "img/IslasCloud_Logo_icono_color.png"
                    // width:"160rem",
                    // height:"180rem"
                },
                items: [
                    // {
                    //     type: "docSidebar",
                    //     sidebarId: "tutorialSidebar",
                    //     position: "right",
                    //     label: "Introducción "
                    // }
                ]
            },
            footer: {
                style: "dark",                
                logo: {
                    alt: "IslasCloud mobile",
                    src: "img/iconos/Destralogotipoblanco.png",
                    height: "64px",
                    width: "100px"
                },

                copyright: `By DESTRA ©
                version: 2.18.72
                9794e675 
                ${new Date().getFullYear()}
                Desarrollo de Soluciones en Tratamiento de Agua.`
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula
            }
        })
};

export default config;
