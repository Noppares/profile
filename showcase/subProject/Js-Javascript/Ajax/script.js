// const btn = document.querySelector("#request");
// const bio = document.querySelector("#bio");

// const request = new XMLHttpRequest();

// request.onreadystatechange = function(){
//     if(request.readyState === 4){
//         bio.style.border = "1px solid #e8e8e8";
//         if(request.status === 200){
//             bio.innerHTML = request.responseText;
//         }else{
//             bio.innerHTML = 'An error occurred during your request: ' + request.satatus + ' ' +request.satatusText;
//         }
//     }
// }

// request.open("get", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt");
// btn.addEventListener('click', function(){
//     this.style.display="none";
//     request.send();
// });

$(document).ready(function(){

        const $btn = $('#request');
        const $bio = $('#bio');

        function completeFunction(responseText, textSatatus, request){
            $bio.css('border', '1px solid#e8e8e8');

            if(textSatatus == 'error'){
                $bio.text('An error occurred during your request: ' + request.satatus + ' ' +request.satatusText);
            }
        }
        $btn.on('click', function(){
            $(this).hide();

            $bio.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt', completeFunction);
        });
});