// script.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  
  // This will hold all your searchable items
  const products = [
    {
      name: "500ml",
      category: "Drinking Water",
      price: "R8",
      description: "Pure spring water"
    },

    {
        name:" 1litre"
        category: "Drinking Water"
        price:"R12"
        description:"Pure spring water"
    },


    {
        name:"1.5Litre"
        category:"Drinking Water"
        price:"R14"
        description:"Pure spring water"
    },

    {
      name: "5Litre",
      category: "Bulk Water",
      price: "R24",
      description: "Ideal for home use"
    },


    {
        name:"10Litre"
        category:"Bulk water"
        price:"R40"
        description:"Ideal for home use"
    },




    {
      name: "Water Delivery Service",
      category: "Service",
      price: "R50",
      description: "Fresh clean water delivered"
    },
    // Add more products here...
  ];

  // Function to display filtered products
  function displayProducts(filteredProducts) {
  
    const container = document.getElementById('productsContainer');
    if (!container) return;

  

    if (filteredProducts.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#666;">No products found.</p>';
      return;
    }

    filteredProducts.forEach(product => {
      const div = document.createElement('div');
      div.style = "border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px; display: inline-block; width: 300px;";
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Category:</strong> ${product.category}</p>
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
      `;
      container.appendChild(div);
    });
  }

  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );


    displayProducts(filtered);
  });

  // Show all products when page loads
  displayProducts(products);
}),

//giving the submit button in the contact page a function
const form = document.getElementById("enquiryForm")
const messagebox=document.getElementById("Message-box")

form.addEventListener("submit",function(event){
  //other line will be added after

  const name = document.getElementById("Name").value
  const Email =  document.getElementById("Email").value
  const Message = document.getElementById("message").value


  if(name === "") {

    messagebox.textContent= "please enter your name "
    return;
  }


  if(email ===""){

    messagebox.textContent= "please enter your email"
    return
  }
