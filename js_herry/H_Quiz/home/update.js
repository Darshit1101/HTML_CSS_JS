// let tit0 = document.getElementById('description');
// let tit2 = document.getElementById('title2');
// let tit1 = document.getElementById('title1');
// let tit3 = document.getElementById('title3');
// let tit4 = document.getElementById('title4');
// let tit5 = document.getElementById('title5');
 
// var url_str = window.location.href;
// var url2 = new URL(url_str)
// var itemIndex = url2.searchParams.get("id")
// console.log(itemIndex)

// function edited(){
//     const data = localStorage.getItem("itemsJson");
//     console.log(data)
//     let JSONData = JSON.parse(data);
//     console.log(JSONData)
//     let main = JSONData[itemIndex];
//     console.log(main)
//     console.log(itemIndex)
//     tit0.value = main[0];
//     tit1.value  = main[1];
//     tit2.value  = main[2];
//     tit3.value  = main[3];
//     tit4.value  = main[4];
//     tit5.value  = main[5];
//       JSONData[itemIndex] = [tit0.value, tit1.value,tit2.value, tit3.value, tit4.value,tit5.value];
   
//     console.log(JSONData)
//     // itemJsonArray = [];
//     // itemJsonArray.push([tit0,tit1,tit2,tit3,tit4,tit5]);
//     localStorage.setItem('itemsJson', JSON.stringify(JSONData))
// }
// edited()

// Function to handle form submission and update localStorage
function updateQuiz() {
    // Get the ID parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemIndex = urlParams.get('id');

    // Retrieve JSON data from localStorage
    let jsonData = JSON.parse(localStorage.getItem('itemsJson')) || [];

    // Find the item in the array based on its index
    const itemToUpdate = jsonData[itemIndex];

    // Update the item with the new values from the form
    itemToUpdate[0] = document.getElementById('description').value;
    itemToUpdate[1] = document.getElementById('title1').value;
    itemToUpdate[2] = document.getElementById('title2').value;
    itemToUpdate[3] = document.getElementById('title3').value;
    itemToUpdate[4] = document.getElementById('title4').value;
    itemToUpdate[5] = document.getElementById('title5').value;

    // Update the JSON data in localStorage
    localStorage.setItem('itemsJson', JSON.stringify(jsonData));
}

// Function to populate form fields with existing quiz data
function populateFormFields() {
    // Get the ID parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemIndex = urlParams.get('id');

    // Retrieve JSON data from localStorage
    let jsonData = JSON.parse(localStorage.getItem('itemsJson')) || [];

    // Find the item in the array based on its index
    const itemToUpdate = jsonData[itemIndex];

    // Populate form fields with item data
    document.getElementById('description').value = itemToUpdate[0];
    document.getElementById('title1').value = itemToUpdate[1];
    document.getElementById('title2').value = itemToUpdate[2];
    document.getElementById('title3').value = itemToUpdate[3];
    document.getElementById('title4').value = itemToUpdate[4];
    document.getElementById('title5').value = itemToUpdate[5];
}

// Add event listener to the update button
document.getElementById('add').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    updateQuiz(); // Update the quiz data
    // Redirect to some page or perform any other action after update
});

// Populate form fields when the page loads
populateFormFields();

function mm(){
   window.location.assign("./home.html")
}