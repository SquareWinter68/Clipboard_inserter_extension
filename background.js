
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function increase_counter(){
    let counter = 0;
    try{
        counter = browser.storage.local.get("counter");
        counter = browser.storage.local.set({ counter: counter+1 });
    }
    catch(error){
        browser.storage.local.set({ counter: counter+1 });
    }
}
tabs = []
// async function copy_clipboard(){ 
//     let counter_ = 0;
//     let last_text = "";
//     while (true){
//         await sleep(1000);
//         console.log("called", counter_++);
//         can_add = get_checkbox();
//         if (can_add){
//             console.log("hello there", counter_);
//             navigator.clipboard.readText().then((clip_text) => {
//                 if (last_text === ""){
//                     last_text = clip_text;
//                     //add_div(clip_text, counter++)
//                     increase_counter();
//                     browser.tabs.executeScript({
//                         file: "content/inject_text.js",
//                       });

//                 }
//                 else{
//                     if (clip_text != last_text){
//                         last_text = clip_text
//                         //add_div(clip_text, counter++)
//                         increase_counter();
//                         browser.tabs.executeScript({
//                             file: "content/inject_text.js",
//                           });
//                     }
//                 }
//                 console.log(clip_text);
//             });
//         }
//     }
// }
var last_text = ""
function copy_clipboard(can_paste){
    if (can_paste){
        navigator.clipboard.readText().then((clip_text) => {
            if (last_text === ""){
                last_text = clip_text;
                browser.tabs.executeScript({
                    file: "content/inject_text.js",
                  });
            }
            else{
                if (clip_text != last_text){
                    browser.tabs.executeScript({
                        file: "content/inject_text.js",
                      });
                    last_text = clip_text;
                }
            }
        });
    }
}

setInterval(() => {
    browser.storage.local.get("addToBody").then((result)=> {
        // the value of the checkbox gets stored only when the popup is first run, untill then it is undefined
        if(typeof(result.addToBody) !== "undefined"){    
            console.log("test ", result.addToBody)
            copy_clipboard(result.addToBody);

        }
    })
}, 1000);

// add support for multiple tabs later, as well as user optins such as costume interval and such.
// can do it both with script and "page": "index.html",
// maybe the later might prove more useful for user options and such
// if the approach with the html page is chosen the data/data.js comes into play