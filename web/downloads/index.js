/*
author          Oliver Blaser
date            09.01.2022
copyright       MIT - Copyright (c) 2022 Oliver Blaser
*/

const pageData =
{
    //#p include "../config.js"

    defaultStyle:
    [
        { type: "text", css: "margin: 7px 0px;" },
        { type: "title3", css: "margin-top: 10px; font-size: 14px;" },
        { type: "listItem", css: "padding-bottom: 1px;" }
    ],

    content:
    [
        { type: "title1", text: "Downloads" },

        { type: "link", url: "../", text: "Back" },
        { type: "text", text: "&nbsp;to the project page.", htmlStyle: "display: inline-block; margin: 7px 0px;" },
        { type: "spacer", value: 3 },
        { type: "link", url: "https://github.com/oblaser/json-defined-html-page/blob/master/license.txt", text: "License" },
        { type: "spacer", value: 5 },

        { type: "title3", text: "v1.1.0" },
        {
            type: "list",
            items:
            [
                { type: "link", url: "./files/jdhp_1.1.0.html", download: true },
                { type: "link", url: "./files/jdhp_1.1.0.zip", download: true },
                { type: "link", url: "./files/jdhp_1.1.0.tar.gz", download: true }
            ]
        },

        { type: "title3", text: "v1.0.1" },
        {
            type: "list",
            items:
            [
                { type: "link", url: "./files/jdhp_1.0.1.html", download: true },
                { type: "link", url: "./files/jdhp_1.0.1.zip", download: true }
            ]
        }
    ],

    footer:
    [
        //#p include "../footer.js"
    ]
};
