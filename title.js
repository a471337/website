var i=0;
setInterval(function(){
    var titles=[
"|i|",
"|in|",
"|inf|",
"|infer|",
"|infern|",
"|inferna|",
"|infernal|",
"|inferna|",
"|infern|",
"|infer|",
"|infe|",
"|inf|",
"|in|",
"|i|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

