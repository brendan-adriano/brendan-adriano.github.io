function changeClass(){
    
    const body = document.getElementById('body');
    const jumo = document.getElementById('jumbotron');
    const button = document.getElementById('button');

    if (button.innerText === 'Turn on the Dark?') {

    body.classList.remove('bg-light-subtle');
    body.classList.add('bg-dark-subtle');

    jumbotron.classList.remove('bg-body-tertiary')
    jumbotron.classList.add('bg-dark')
    jumbotron.classList.add('text-bg-dark')

    button.innerText = 'Turn on the Light!';
    } else {
        body.classList.remove('bg-dark-subtle');
        body.classList.add('bg-light-subtle');
    
        jumbotron.classList.remove('bg-dark')
        jumbotron.classList.add('bg-body-tertiary')
        jumbotron.classList.remove('text-bg-dark')
        jumbotron.classList.add('text-bg-light')
    
        button.innerText = 'Turn on the Dark?';
    }
}
    
