function getFirstSelector(selector) {
  
  return document.querySelector(selector)
  
}

function nestedTarget( target ) {
  
  return document.getElementById('nested').getElementsByClassName('target')[0]
  
}

var deepestChild = function () {
  
  return document.querySelector('div#grand-node div div div div')
  
}

var increaseRankBy = function (n) {
  
  const lis = document.querySelectorAll('ul.ranked-list li')
  
  
  for (let i = 0; i < lis.length; i++) {
    console.log(lis[i])
  }
}

increaseRankBy(1)
