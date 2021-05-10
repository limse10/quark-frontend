let isFullscreen = true;
let frameElem = document.documentElement;


function screenHandler(){
    if(isFullscreen){
        console.log(frameElem);
        openFull();
        isFullscreen = false;
    }
    else if(!isFullscreen){
        closeFull();
        isFullscreen = true;
    }
}
function openFull(){
    if (frameElem.requestFullscreen) {
        frameElem.requestFullscreen();
      } else if (frameElem.webkitRequestFullscreen) { /* Safari */
        frameElem.webkitRequestFullscreen();
      } else if (frameElem.msRequestFullscreen) { /* IE11 */
        frameElem.msRequestFullscreen();
      }
}
function closeFull(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
}
