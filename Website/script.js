const displayTabData = (tab) => {
    // Get all elements with the class "tab-pan-new"
    let elements = document.querySelectorAll('.tab-pan-new');
  

    // Loop through each element and remove the "active" class
    elements.forEach(element => {
        element.classList.remove('active');
    });

    //add active class on tab
    document.getElementById('faq-tab-' + tab).classList.add('active')
}


// const displayTabDatatwo = (tab) => {
//   // Get all elements with the class "tab-pan-new"
//   let elements = document.querySelectorAll('.tab-pan-newtwo');


//   // Loop through each element and remove the "active" class
//   elements.forEach(element => {
//       element.classList.remove('active');
//   });

//   //add active class on tab
//   document.getElementById('faq-tabtwo-' + tab).classList.add('active')
// }




const displayTabDatatwo = (tab) => {
    // Get all elements with the class "tab-pan-new"
    let elements = document.querySelectorAll('.tab-pan-newtwo');
  
  
    // Loop through each element and remove the "active" class
    elements.forEach(element => {
        element.classList.remove('active');
    });
  
    //add active class on tab
    document.getElementById('faq-tabtwo-' + tab).classList.add('active')
  }







