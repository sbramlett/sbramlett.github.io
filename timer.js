function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

		function startTimer() {
    // Start timer on click button?
    }

		function resetTimer() {
    // Reset timers to starting time?
    }

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
           // repeat countdown?
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown", 0, 10 );
countdown( "countdown2", 0, 20 );
countdown( "countdown3", 0, 30 );
countdown( "countdown4", 0, 40 );