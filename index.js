function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  var collector = document.querySelectorAll("ul.ranked-list li")
  for (var i=0;i<collector.length;i++) {
    collector[i].innerHTML = parseInt(collector[i].innerHTML) + 1
  }
}