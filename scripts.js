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
        name:"1 litre",
        category:"Drinking Water",
        price:"R12",
        description:"Pure spring water"
    },


    {
        name:"1.5Litre",
        category:"Drinking Water",
        price:"R14",
        description:"Pure spring water"
    },

    {
      name: "5Litre",
      category: "Bulk Water",
      price: "R24",
      description: "Ideal for home use"
    },


    {
        name:"10Litre",
        category:"Bulk water",
        price:"R40",
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

    container.innerHTML = '';

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
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );

      displayProducts(filtered);
    });
  }

  // Show all products when page loads
  displayProducts(products);

  // Contact form handling inside DOMContentLoaded to ensure elements exist
  const form = document.getElementById("enquiryForm");
  const messageBox = document.getElementById("Message-box");

  if (form && messageBox) {
    form.addEventListener("submit", function(event){
      event.preventDefault();

      const nameValue = document.getElementById("Name") ? document.getElementById("Name").value.trim() : '';
      const email = document.getElementById("Email") ? document.getElementById("Email").value.trim() : '';
      const messageValue = document.getElementById("message") ? document.getElementById("message").value.trim() : '';

      if(nameValue === "") {
        messageBox.textContent= "Please enter your name.";
        return;
      }

      if(email === ""){
        messageBox.textContent= "Please enter your email.";
        return;
      }

      if(!email.includes('@') || !email.includes('.')){
        messageBox.textContent = 'Please enter a valid email address.';
        return;
      }

      if(messageValue === "") {
        messageBox.textContent = 'Please enter your message.';
        return;
      }

      const myEmail = "shangisasiyanda@gmail.com";
      const subject = "New Contact Form Submission From " + nameValue;
      const body = "Name: " + nameValue + "\nEmail: " + email + "\n\nMessage: " + messageValue;
      
      window.location.href =  "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      //displaying a success message
      messageBox.textContent = 'Thank you for contacting us ' + nameValue + '! We will get back to you shortly.';
      form.reset();//reset the form fields
    });
  }
});