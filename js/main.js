;(function() {
    var Generator = (function() {

        function init() {
            document.getElementById('cardTexts').onkeyup = generateCards
        }

        function generateCards() {
            var texts = document.getElementById('cardTexts').value.split(/\n/) || []
              , list = document.getElementById('cards-list')

            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }

            if(texts.length) {
                for(var i = 0; i < texts.length; i++) {
                    var li = document.createElement('li')
                      , p = document.createElement('p')

                    p.innerHTML = texts[i]
                    li.appendChild(p)
                    list.appendChild(li)
                }
            }
        }

        return {
            init: init
        }

    })()
    Generator.init()
})()