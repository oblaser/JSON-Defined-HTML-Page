/*
author          Oliver Blaser
date            09.01.2022
copyright       MIT - Copyright (c) 2022 Oliver Blaser
*/

const pageData =
{
    //#p include "config.js"

    defaultStyle:
    [
        { type: "text", css: "margin: 7px 0px;" },
        { type: "title2", css: "margin-top: 20px;" },
        { type: "listItem", css: "padding-top: 5px;" }
    ],

    content:
    [
        { type: "title1", text: "JSON Defined HTML Page" },

        { type: "html", text: "<div style=\"margin: 7px 0px;\">" },
        { type: "text", text: "Used to create small and simple content pages. All the content is defined by the", htmlStyle: "display:inline-block; margin:0px;" },
        { type: "text", text: "./index.js", htmlStyle: "display:inline-block; margin:0px 3px; padding:1px 3px; border-radius:5px; font-family:'Courier New'; font-size:15px; background-color:rgba(128,128,128,0.2);" },
        { type: "text", text: "or", htmlStyle: "display:inline-block; margin:0px;" },
        { type: "text", text: "./index.json", htmlStyle: "display:inline-block; margin:0px 3px; padding:1px 3px; border-radius:5px; font-family:'Courier New'; font-size:15px; background-color:rgba(128,128,128,0.2);" },
        { type: "text", text: "file.", htmlStyle: "display:inline-block; margin:0px;" },
        { type: "html", text: "</div>" },

        { type: "spacer", value: 10 },

        {
            type: "list",
            items:
            [
                { type: "link", url: "./downloads/", text: "Downloads" },
                { type: "link", url: "./examples/", text: "Examples" },
                { type: "link", url: "https://github.com/oblaser/json-defined-html-page", text: "GitHub Repo" }
            ]
        },

        { type: "spacer", value: 7 }
    ],

    footer:
    [
        //#p include "footer.js"
    ]
};
