//Traversing
//Moving from Parent to Child or Child to parent elemnt is called Traversing.
//We must have a child parent structure for traversing.  

let prabhat=(e)=>{
    alert(e.closest('tr').querySelector('td:nth-child(2)'));
}

document.querySelector('.p_viewbtn').addEventListener('click', (e) =>{ //e is a formal argument.
    console.log(e.target.closest('tr').querySelector('td:nth-child(2').innerHTML); //Closest() is mailny used for traversing up.
    //QuerySelector is a traversing down method.
})