(function() {
    numberWang = {
            countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
                // Required parameters
                var divPlaceholder = document.getElementById(containerid);
                var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
                var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1;
                // Optional parameters
                betweenNumberDuration = betweenNumberDuration || 20;
                betweenEffect = betweenEffect || "jello";
                effectDuration = effectDuration || "0.1s";
                endingEffect = endingEffect || "tada";
                endingEffectDuration = endingEffectDuration || "1s";
                // if both numbers ARE numbers
                if (isNaN(startingNumber, endingNumber)) {
                    console.log('both starting and ending numbers are not integars!');
                    return false;
                } else {
                    if (fixedStartingNumber < 0) {
                        divPlaceholder.innerHTML = fixedStartingNumber - 1;
                    } else {
                        divPlaceholder.innerHTML = fixedStartingNumber;
                    }

                    if (fixedEndingNumber < 0) {
                        var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1;
                    } else {
                        var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1;
                    }

                    if (fixedStartingNumber > fixedEndingNumber) {
                        function updateToEndNumber() {
                            divPlaceholder.style.animationDuration = effectDuration;
                            divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
                            divPlaceholder.innerHTML = fixedStartingNumber--;
                            if (fixedStartingNumber == fixedEndingNumber) {
                                clearInterval(clearCountTimer);
                                clearCountTimer = 0;
                                divPlaceholder.style.animationDuration = endingEffectDuration;
                                divPlaceholder.setAttribute("class", endingEffect + " animated");
                            }
                        }
                        var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
                    } else if (fixedStartingNumber < fixedEndingNumber) {
                        function updateToEndNumber() {
                            divPlaceholder.style.animationDuration = effectDuration;
                            divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
                            divPlaceholder.innerHTML = fixedStartingNumber++;
                            if (fixedStartingNumber == fixedEndingNumber) {
                                clearInterval(clearCountTimer);
                                clearCountTimer = 0;
                                divPlaceholder.style.animationDuration = endingEffectDuration;
                                divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
                            }
                        }
                        var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
                    } else if (fixedStartingNumber == fixedEndingNumber) {
                        clearInterval(clearCountTimer);
                        clearCountTimer = 0;
                        divPlaceholder.style.animationDuration = endingEffectDuration;
                        divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
                    }
                }
            }
        }
        // End of function	

    // Make an API call:
    // $.getJSON("https://cpv2api.com/profile/cameronfitzwilliam", function(resp){
    // If successful!
    // if(resp.success){
    // Get followers
    var userFollowers = 222;
    // Use function
    numberWang.countUpOrDown('numberWang', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s");
    // }
    // });

})();