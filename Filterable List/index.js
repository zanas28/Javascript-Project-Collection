let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', function(e) {
    let inputThis = e.target.value.toUpperCase();

    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');

    console.log(li)
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // if matched
        if (a.textContent.toUpperCase().indexOf(inputThis) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
        
    }
})