// for nav bar
const sidemenu = document.querySelector('aside');
const menubtn = document.querySelector('#menu-btn');
const closebtn = document.querySelector('#close-btn');

menubtn.addEventListener('click',()=>{
    sidemenu.style.left='0'
})
closebtn.addEventListener('click',()=>{
    sidemenu.style.left='-100%'
})


const profile = document.querySelector('.profile');
    const card = document.querySelector('.card');

    // Toggle display=block on the first click
    profile.addEventListener('click', (event) => {
      card.style.display = 'block';

      // Stop click on profile from propagating to the document
      event.stopPropagation();
    });

    // Hide the card when clicking anywhere else on the screen
    document.addEventListener('click', () => {
      card.style.display = 'none';
    });

    // Prevent hiding the card when clicking directly on it
    card.addEventListener('click', (event) => {
      event.stopPropagation();
    });



// theme change
const theme = document.querySelector('.theme-toggle');

theme.addEventListener('click',()=>{
   document.body.classList.toggle('dark-theme-variable');

   theme.querySelector('i:nth-child(1)').classList.toggle('active');
   theme.querySelector('i:nth-child(2)').classList.toggle('active');
})

// add product
const overlay = document.querySelector('.overlay');
const addcard = document.querySelector('.add-cart');
document.getElementById('product-add').addEventListener('click', () => {
  overlay.style.display = 'block';
  addcard.style.display = 'block';
});

// Close card and hide overlay
document.querySelector('.cls-btn').addEventListener('click', () => {
  overlay.style.display = 'none';
  addcard.style.display = 'none';
});

// search product

document.querySelector('.key-search').addEventListener('keyup',(event)=>{
  const tr=document.querySelectorAll('tbody tr');
    const value=event.target.value.toUpperCase();
    tr.forEach(row=>{
        let rowValue=row.textContent;
        if(rowValue.toUpperCase().indexOf(value)>-1){
            row.style.display='';
        }else{
            row.style.display='none';
        }
    })
})

// Add product to recent orders table

document.querySelector('form').addEventListener('submit',(event)=>{
  event.preventDefault();
  const productName = document.querySelector('.get-input1').value;
  const productNumber = document.querySelector('.get-input2').value;
  const payment = document.querySelector('.get-input3').value;
  const status = document.querySelector('.get-input4').value;

const newOrder = {
  productName: productName,
  productNumber: productNumber,
  payment: payment,
  status: status
};

orders.push(newOrder);

const newRow = document.createElement('tr');
const newRowContent = `
  <td>${newOrder.productName}</td>
  <td>${newOrder.productNumber}</td>
  <td>${newOrder.payment}</td>
  <td class="${newOrder.status === 'Declined' ? 'danger' : newOrder.status === 'Pending' ? 'warning' : 'success'}">${newOrder.status}</td>
  <td>Details</td>
`;
newRow.innerHTML = newRowContent;
document.querySelector('tbody').appendChild(newRow);

// Reset the form
document.querySelector("form").reset();

// Hide the overlay and add card
overlay.style.display = 'none';
addcard.style.display = 'none';
})







// Add data from order.js to recent orders table
// Define the orders array
import { orders } from '/order.js';

orders.forEach(orders => {
    const row = document.createElement('tr');
    const rowContent = `
        <td>${orders.productName}</td>
        <td>${orders.productNumber}</td>
        <td>${orders.payment}</td>
        <td class="${orders.status === 'Declined' ? 'danger': orders.status === 'Pending' ? 'warning' :'success'}" >${orders.status}</td>
        <td>Details</td>
    `;
   row.innerHTML= rowContent;
   document.querySelector('tbody').appendChild(row);
});
