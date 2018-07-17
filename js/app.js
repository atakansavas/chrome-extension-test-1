// alert("sa");

$(document).ready(function () {
    $(".js-btn-start-app").click(function () {
        alert("kazma");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    code: PaintBody()
                });
        });
    })
})

function PaintBody() {
    document.body.style.backgroundColor = "black";
}


// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
//   });



// changeColor.onclick = function(element) {
//   alert("sa");
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };