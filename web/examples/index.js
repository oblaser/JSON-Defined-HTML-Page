/*
author          Oliver Blaser
date            09.01.2022
copyright       MIT - Copyright (c) 2022 Oliver Blaser
*/

const pageData =
{
    //#p include "../config.js"

    content:
    [
        { type: "title1", text: "Examples" },

        { type: "link", url: "../", text: "Back" },
        { type: "text", text: "&nbsp;to the project page.", htmlStyle: "display: inline-block; margin: 7px 0px;" },

        { type: "spacer", value: 5 },

        { type: "text", text: "This pages&nbsp;", htmlStyle: "display: inline-block; margin: 7px 0px;" },
        { type: "link", url: "./index.js", newTab: true, text: "index.js" },


        { type: "spacer", value: 20 },
        { type: "title2", text: "Testing All Types" },
        {
            type: "list",
            items:
            [
                { type: "link", url: "./allTypes/" },
                { type: "link", url: "./allTypes/index.json", newTab: true, text: "index.json" }
            ]
        },


        { type: "spacer", value: 20 },
        { type: "title2", text: "Testing Config And Default Styles" },
        {
            type: "list",
            items:
            [
                { type: "link", url: "./configAndDefaultStyles/" },
                { type: "link", url: "./configAndDefaultStyles/index.json", newTab: true }
            ]
        },


        { type: "spacer", value: 20 },
        { type: "title2", text: "Download Page" },
        {
            type: "list",
            items:
            [
                { type: "link", url: "./downloads/" },
                { type: "link", url: "./downloads/index.json", newTab: true, text: "index.json" }
            ]
        }
    ],

    footer:
    [
        //#p include "../footer.js"
    ]
};
