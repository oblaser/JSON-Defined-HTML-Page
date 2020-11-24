# JSON Defined HTML Page

Used to quickly create small and simple content pages. All the content is defined by the `index.json` file.

> In my case I mainly use them as download pages, separated from the actual website.

[Here](https://oblaser.ch/__product/json-defined-html-page/) you can have a look on a live version of this index.json example.

---

# index.json Specification

The main object contains two arrays named `content` and `footer`, each containing content defining objects.


## Content Defining Objects
Each object must provide the `type` key.


### titleX
Where X can be 1, 2, or 3.

|Key|Value Type|Description|
|---|---|---|
|`text`|string||
|`htmlStyle`|string|_optional_|


### text
|Key|Value Type|Description|
|---|---|---|
|`text`|string||
|`htmlStyle`|string|_optional_|


### link
|Key|Value Type|Description|
|---|---|---|
|`url`|string||
|`text`|string|_optional_ If not specified the display text will be the same as the url.|
|`download`|bool|_optional_|
|`newTab`|bool|_optional_|
|`htmlStyle`|string|_optional_|


### spacer
|Key|Value Type|Description|
|---|---|---|
|`value`|number||
|`htmlStyle`|string|_optional_|


### list
|Key|Value Type|Description|
|---|---|---|
|`items`|array of objects|Contains content defining objects|
|`htmlStyle`|string|_optional_|

List items are normal content defining objects, which can have additional optional keys:
|Key|Value Type|Description|
|---|---|---|
|`comment`|string|_optional_|
|`liHtmlStyle`|string|_optional_|


### html
|Key|Value Type|Description|
|---|---|---|
|`text`|string|The whole html element|
