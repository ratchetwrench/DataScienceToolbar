const myBars = safari.extension.bars;
function updateAllBars {
    for (var i = 0; i < myBars.length; ++i) {
        var barWindow = myBars[i].contentWindow;
        barWindow.doSomething();
        var myWindow = safari.application.activeBrowserWindow;
        if (myBars[i].browserWindow === myWindow) {
            barWindow.doSomethingSpecial();
        }
    }
}