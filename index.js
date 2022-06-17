function changeBackground() {

    if (document.body.style.background == `rgb(30, 30, 30)`) {

        document.body.style.background = 'white';
        document.body.style.color = 'black';
        // document.getElementById(`portHeading`).style.backgroundColor = 'rgba("$color: #2d9bf5", "$alpha: 1.0")';

    } else {

        document.body.style.background = '#1E1E1E';
        document.body.style.color = 'white';
        // document.body.a.style.color = 'black';
        // document.getElementById(`portHeading`).style.backgroundColor = 'grey';

    }
}