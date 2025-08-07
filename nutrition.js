document.getElementById('userForm').addEventListener('submit', function(e){
  e.preventDefault();
  const age = parseInt(document.getElementById('age').value),
        weight = parseFloat(document.getElementById('weight').value),
        height = parseFloat(document.getElementById('height').value),
        gender = document.getElementById('gender').value,
        goal = document.querySelector('input[name="goal"]:checked').value;
  if (!gender || !age || !weight || !height) { alert("Please complete all fields."); return; }
  let bmr = 10*weight + 6.25*height - 5*age + (gender==="male"?5:gender==="female"?-161:0);
  let calories = Math.round(bmr*1.35);
  if (goal==="lose") calories -= 350;
  if (goal==="gain") calories += 350;
  let protein = Math.round(weight*(goal==="lose"?1.7:goal==="gain"?1.5:1.3));
  let fat = Math.round(weight*(goal==="lose"?0.8:goal==="gain"?1.0:0.9));
  let carbs = Math.round(weight*(goal==="lose"?3.2:goal==="gain"?5:4));
  let water = (weight*0.035).toFixed(2);
  document.getElementById('result').innerHTML =
    `<span class="badge"><span class="icon">💧</span> Water: ${water} L</span>
     <span class="badge"><span class="icon">🍽️</span> Calories: ${calories}</span><br>
     🥩 Protein: <b>${protein}g</b> 🥑 Fat: <b>${fat}g</b> 🍞 Carbs: <b>${carbs}g</b>`;
  document.getElementById('result').style.display = "block";
});
