function suggestRestaurant() {
  let budget = document.getElementById("budgetInput").value;
  let resultText = document.getElementById("resultText");

  if (budget === "" || budget <= 0) {
    resultText.innerHTML = "⚠ Please enter a valid budget!";
    return;
  }

  budget = Number(budget);

  let suggestion = "";

  if (budget < 100) {
    suggestion = `
      <b>Recommended Option:</b> Street Food Stalls 🍢<br>
      <b>Suggested Menu:</b> Puchka, Egg Roll, Chowmein, Samosa<br>
      <b>Price Range:</b> ₹20 – ₹90<br>
      <b>Nearby Examples:</b> Local Street Stalls
    `;
  }
  else if (budget >= 100 && budget < 200) {
    suggestion = `
      <b>Restaurant:</b> Food Express 🍛<br>
      <b>Menu Suggestions:</b> Veg Thali, Chicken Fried Rice, Chowmein, Chole Bhature<br>
      <b>Avg Price:</b> ₹120 – ₹180
    `;
  }
  else if (budget >= 200 && budget < 300) {
    suggestion = `
      <b>Restaurant:</b> Spicy Hub 🌶️<br>
      <b>Menu Suggestions:</b> Chicken Biryani, Paneer Butter Masala, Tandoori Roti<br>
      <b>Avg Price:</b> ₹180 – ₹250
    `;
  }
  else if (budget >= 300 && budget < 450) {
    suggestion = `
      <b>Restaurant:</b> Biryani House 🍗<br>
      <b>Menu Suggestions:</b> Special Chicken Biryani, Mutton Haleem, Chicken Chaap<br>
      <b>Avg Price:</b> ₹250 – ₹400
    `;
  }
  else if (budget >= 450 && budget < 700) {
    suggestion = `
      <b>Restaurant:</b> Taste Corner 🍽️<br>
      <b>Menu Suggestions:</b> Grilled Sandwich, Pizza, Chicken Steak, Pasta<br>
      <b>Avg Price:</b> ₹350 – ₹600
    `;
  }
  else if (budget >= 700 && budget < 1000) {
    suggestion = `
      <b>Restaurant:</b> Urban Tadka / Cafe Mocha ☕<br>
      <b>Menu Suggestions:</b> Sizzlers, Burgers, Alfredo Pasta, Mocktails<br>
      <b>Avg Price:</b> ₹600 – ₹900
    `;
  }
  else {
    suggestion = `
      <b>Premium Restaurants:</b> Barbeque Nation, Mainland China, The Bistro Grill 🍽️🔥<br>
      <b>Menu Suggestions:</b> Buffet Meals, Chinese Platters, Grilled Seafood, Desserts<br>
      <b>Avg Price:</b> ₹1000 – ₹2000
    `;
  }

  resultText.innerHTML = suggestion;
}
