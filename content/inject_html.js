function restyle_page(){
    console.log("Came to restyle page");
    head_contents = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="button_style.css">
        <!-- <script src="main.js" defer></script> -->
        <title>ClipboardCpy</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');
        *,
        *:before,
        *:after  {
            box-sizing: border-box;
            margin: 0;
            padding: 0;  
            background-color: rgb(49, 49, 49);
        }

        .text_container{
            display: flex;
            flex-flow: column;
            justify-content: center;
            margin: 10px;
            padding: 10px;
            border: solid 2px white;

        }

        .text-line{
            color: whitesmoke;
            font-size: xx-large;
            margin-bottom: 10px;
            justify-content: center;
        }

        .text-line p{
            text-align: center;
        }

        .toggle {
        cursor: pointer;
        display: inline-block;
        }

        .toggle-switch {
        display: inline-block;
        background: #ccc;
        border-radius: 16px;
        width: 58px;
        height: 32px;
        position: relative;
        vertical-align: middle;
        transition: background 0.25s;
        }
        .toggle-switch:before, .toggle-switch:after {
        content: "";
        }
        .toggle-switch:before {
        display: block;
        background: linear-gradient(to bottom, #fff 0%, #eee 100%);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        width: 24px;
        height: 24px;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: left 0.25s;
        }
        .toggle:hover .toggle-switch:before {
        background: linear-gradient(to bottom, #fff 0%, #fff 100%);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
        }
        .toggle-checkbox:checked + .toggle-switch {
        background: #56c080;
        }
        .toggle-checkbox:checked + .toggle-switch:before {
        left: 30px;
        }

        .toggle-checkbox {
        position: absolute;
        visibility: hidden;
        }

        .toggle-label {
        margin-left: 5px;
        position: relative;
        top: 2px;
        }

        .options{
            color: whitesmoke;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 10px;

        }
    </style>
    `
    const body_contents = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="button_style.css">
        <!-- <script src="main.js" defer></script> -->
        <title>ClipboardCpy</title>
    </head>
    <body>
        <div id="container" class="text_container">
            <!-- <div id="div1" class="text-line">
                <p>This is simply a test</p>
            </div> -->
        </div>
        <!-- 羽川翼クラスの委員長 -->
    </body>
    </html>
    `
    const head = document.getElementsByTagName("head");
    const body = document.getElementsByTagName("body");
    
    head[0].innerHTML = head_contents
    body[0].innerHTML = body_contents;
    
}

restyle_page()