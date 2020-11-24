/*

Author:     Oliver Blaser

Date c:     24.11.2020
Date e:     24.11.2020

License:    MIT - see bottom of file

*/

function getHTMLerror(msg = 'error')
{
    let html = '<div><div style="display: inline-block; border-radius: 5px; border: solid 2px var(--errorFg); margin-bottom: 8px; padding: 9px 13px; background-color: var(--errorBg); color: var(--errorFg); font-weight: normal; font-size: 16px; font-family: Helvetica, sans-serif;">';
    html += msg + '</div></div>';
    return html;
}

function getHTML(cdo = { type: 'html', text: getHTMLerror('no cdo defined') })
{
    let html = '';

    if((typeof(cdo) == 'object') && (typeof(cdo.type) == 'string'))
    {
        switch(cdo.type)
        {
            case 'title1':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h1 class="cdo_title1"';
                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    html += '>' + cdo.text + '</h1>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'title2':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h2 class="cdo_title2"';
                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    html += '>' + cdo.text + '</h2>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'title3':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h3 class="cdo_title3"';
                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    html += '>' + cdo.text + '</h3>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'link':
                if(typeof(cdo.url) == 'string')
                {
                    html = '<a class="cdo_link" href="' + cdo.url + '"';

                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    if(cdo.newTab) html += ' target="_blank"';
                    if(cdo.download) html += ' download';

                    html += '>';

                    if(typeof(cdo.text) == 'string') html += cdo.text;
                    else
                    {
                        if(cdo.url.split('/').pop().includes('.')) html += cdo.url.split('/').pop();
                        else html += cdo.url;
                    }

                    html += '</a>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'text':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<div class="cdo_text"';
                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    html += '>' + cdo.text + '</div>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'spacer':
                if((typeof(cdo.value) == 'number') && (Number.isInteger(cdo.value)) && (cdo.value >= 0))
                {
                    html = '<div class="cdo_spacer" style="height: ' + cdo.value.toString() + 'px;';
                    if(typeof(cdo.htmlStyle) == 'string') html += cdo.htmlStyle;
                    html += '"></div>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'list':
                try
                {
                    html = '<ul class="cdo_list"';
                    if(typeof(cdo.htmlStyle) == 'string') html += ' style="' + cdo.htmlStyle + '"';
                    html += '>';

                    for(let i = 0; i < cdo.items.length; ++i)
                    {
                        html += '<li class="cdo_listItem"';
                        if(typeof(cdo.items[i].liHtmlStyle) == 'string') html += ' style="' + cdo.items[i].liHtmlStyle + '"';
                        html += '>';

                        html += getHTML(cdo.items[i]);

                        if(typeof(cdo.items[i].comment) == 'string') html += '<br/>' + cdo.items[i].comment;

                        html += '</li>';
                    }

                    html += '</ul>';
                }
                catch (err)
                {
                    html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + err + '<br/>' + JSON.stringify(cdo));
                }
                break;

            case 'html':
                if(typeof(cdo.text) == 'string') html = cdo.text;
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;
            
            default:
                html = getHTMLerror('<div style="font-weight: bold;">error</div>' + JSON.stringify(cdo));
                break;
        }
    }
    else
    {
        html = getHTMLerror('<div style="font-weight: bold;">error</div>' + JSON.stringify(cdo));
    }

    return html;
}

$(function()
{
    $.get('./index.json', function(res)
    {
        //console.log(res);

        try
        {
            let html = '';

            for(let i = 0; i < res.content.length; ++i)
            {
                html += getHTML(res.content[i]);
            }

            $('#contentContainer').html(html);
        }
        catch (err)
        {
            $('#contentContainer').html(getHTMLerror(err));
        }

        try
        {
            let html = '';
    
            for(let i = 0; i < res.footer.length; ++i)
            {
                html += getHTML(res.footer[i]);
            }

            $('#footer').html(html);
        }
        catch (err)
        {
            $('#footer').html(getHTMLerror(err));
        }
    });
});

/*

Copyright (c) 2020 Oliver Blaser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
