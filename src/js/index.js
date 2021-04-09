/*

author         Oliver Blaser
date           09.04.2021
copyright      MIT - Copyright (c) 2020 Oliver Blaser

*/

const versionStr = '1.0.2';

function getHTMLerror(msg = 'error')
{
    let html = '<div><div style="display: inline-block; border-radius: 5px; border: solid 2px var(--errorFg); margin-bottom: 8px; padding: 9px 13px; background-color: var(--errorBg); color: var(--errorFg); font-weight: normal; font-size: 16px; font-family: Helvetica, sans-serif;">';
    html += msg + '</div></div>';
    return html;
}

function getPreDefStyle(type = 'type', preDefStyle = [ { type: 'type', css: '/**/' } ])
{
    let result = '/**/';

    result = false;
    for (let i = 0; i < preDefStyle.length; ++i)
    {
        if (type === preDefStyle[i].type)
        {
            result = preDefStyle[i].css;
            break;
        }
    }

    return result;
}

function getHTML(cdo = { type: 'html', text: getHTMLerror('no cdo defined') }, preDefStyle = [ { type: 'type', css: '/**/' } ])
{
    let html = '';
    let styleStr = '';

    if((typeof(cdo) == 'object') && (typeof(cdo.type) == 'string'))
    {
        let preDefStyleStr = getPreDefStyle(cdo.type, preDefStyle);

        if (preDefStyleStr !== false) styleStr += preDefStyleStr;
        if (typeof(cdo.htmlStyle) == 'string') styleStr += cdo.htmlStyle;

        switch (cdo.type)
        {
            case 'title1':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h1 class="cdo_title1"';
                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    html += '>' + cdo.text + '</h1>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'title2':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h2 class="cdo_title2"';
                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    html += '>' + cdo.text + '</h2>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'title3':
                if(typeof(cdo.text) == 'string')
                {
                    html = '<h3 class="cdo_title3"';
                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    html += '>' + cdo.text + '</h3>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'link':
                if(typeof(cdo.url) == 'string')
                {
                    html = '<a class="cdo_link" href="' + cdo.url + '"';

                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    if (cdo.newTab) html += ' target="_blank"';
                    if (cdo.download) html += ' download';

                    html += '>';

                    if (typeof(cdo.text) == 'string') html += cdo.text;
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
                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    html += '>' + cdo.text + '</div>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'spacer':
                if((typeof(cdo.value) == 'number') && (Number.isInteger(cdo.value)) && (cdo.value >= 0))
                {
                    html = '<div class="cdo_spacer" style="height: ' + cdo.value.toString() + 'px;';
                    if (styleStr.length > 0) html += styleStr;
                    html += '"></div>';
                }
                else html = getHTMLerror('<div style="font-weight: bold;">error ' + cdo.type + '</div>' + JSON.stringify(cdo));
                break;

            case 'list':
                try
                {
                    html = '<ul class="cdo_list"';
                    if (styleStr.length > 0) html += ' style="' + styleStr + '"';
                    html += '>';

                    let liPreDefStyleStr = getPreDefStyle('listItem', preDefStyle);

                    for(let i = 0; i < cdo.items.length; ++i)
                    {
                        html += '<li class="cdo_listItem"';

                        let liStyleStr = '';
                        if (liPreDefStyleStr !== false) liStyleStr += liPreDefStyleStr;
                        if (typeof(cdo.items[i].liHtmlStyle) == 'string') liStyleStr += cdo.items[i].liHtmlStyle;
                        if (liStyleStr.length > 0) html += ' style="' + liStyleStr + '"';
                        
                        html += '>';

                        html += getHTML(cdo.items[i], undefined);

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
    $('#versionString').html(versionStr);

    $.get('./index.json', function(res)
    {
        /*#p rmn 1 */
        console.log(res);

        if(res.config)
        {
            if(res.config.maxWidth) $('#mainContainer').css('max-width', res.config.maxWidth);

            if(res.config.color1) document.documentElement.style.setProperty('--color1', res.config.color1);
            if(res.config.color2) document.documentElement.style.setProperty('--color2', res.config.color2);
            if(res.config.color3) document.documentElement.style.setProperty('--color3', res.config.color3);
            if(res.config.colorText) document.documentElement.style.setProperty('--colorText', res.config.colorText);
            if(res.config.colorHighlight) document.documentElement.style.setProperty('--colorHighlight', res.config.colorHighlight);
            if(res.config.fontFamily) document.documentElement.style.setProperty('--fontFamily', res.config.fontFamily);

            if(res.config.center === true) $('#mainContainer').css({"margin-left":"auto","margin-right":"auto"});
        }

        try
        {
            let html = '';

            for(let i = 0; i < res.content.length; ++i)
            {
                html += getHTML(res.content[i], res.defaultStyle);
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
                html += getHTML(res.footer[i], undefined);
            }

            $('#footerContent').html(html);
        }
        catch (err)
        {
            $('#footerContent').html(getHTMLerror(err));
        }
    });
});
