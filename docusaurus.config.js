// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";



/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "IslasCloud",
    tagline: "Manual de Usuario del Sistema IslasCloud",
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
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid'],  
   

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },
    plugins: [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        require.resolve('docusaurus-plugin-image-zoom')
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
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
        ({           // Replace with your project's social card
            mermaid: {
                theme: {light: 'neutral', dark: 'forest'}
              },
            // imageZoom: {
            //   // CSS selector to apply the plugin to, defaults to '.markdown img'
            //   selector: '.markdown img',
            //   // Optional medium-zoom options
            //   // see: https://www.npmjs.com/package/medium-zoom#options
            //   options: {
            //     margin: 24,
            //     background: '#BADA55',
            //     scrollOffset: 0,
            //     container: '#zoom-container',
            //     template: '#zoom-template',
            //   },
            // },            
            zoom: {
                // selector: '.markdown :not(em) > img',
                selector: '.markdown :not(em) > img[src$=".png"], .markdown :not(em) > img[src$=".jpg"]',
                background: {
                  light: 'rgb(255, 255, 255)',
                  dark: 'rgb(50, 50, 50)'
                },
                config: {
                  // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                }
              },  
           
            navbar: {
                title: "IslasCloud",
                style: "dark",
                hideOnScroll:false,
                logo: {
                    alt: "IslasCloud mobile",
                    src: "img/IslasCloud_Logo_icono_color.png"
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "right",
                        label: "Docs"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Introducción",
                                to: "/docs/intro",
                            }
                        ]
                     },
                    // {
                    //     title: "Community",
                    //     items: [
                    //         {
                    //             label: "Stack Overflow",
                    //             href: "https://stackoverflow.com/questions/tagged/docusaurus"
                    //         },
                    //         {
                    //             label: "Discord",
                    //             href: "https://discordapp.com/invite/docusaurus"
                    //         },
                    //         {
                    //             label: "Twitter",
                    //             href: "https://twitter.com/docusaurus"
                    //         }
                    //     ]
                    // },
                    // {
                    //     title: "More",
                    //     items: [
                    //         {
                    //             label: "Blog",
                    //             to: "/blog"
                    //         },
                    //         {
                    //             label: "GitHub",
                    //             href: "https://github.com/facebook/docusaurus"
                    //         }
                    //     ]
                    // }
                ],
                logo: {
                    alt: "IslasCloud mobile",
                    src: "img/IslasCloud_Logo_icono_color.png",
                    height: "32px",
                    width: "48px"
                },

                copyright: `By DESTRA ©
                version: 2.1.18
                5cae7d6 
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
