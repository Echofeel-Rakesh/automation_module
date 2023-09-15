var openedWindows = [];
window._open = window.open; // saving original function
window._close = window.close;

function newWin(url,name){
  var w = window._open(url,name)
  openedWindows.push(w);
  return w;
}

function closeWin() {
    //localStorage.clear();
    //sessionStorage.clear();
//   for (w in openedWindows) {
//     //cascade to children
//     console.log(w);
//     w.close();
//   }

    for(i=0; i<openedWindows.length; i++)
    {
        openedWindows[i].close();
    }
}