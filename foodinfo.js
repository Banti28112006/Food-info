// foodinfo.js

(function() {
    // Check if the main database file was loaded correctly
    if (typeof allFoodData === 'undefined') {
        console.error("FATAL: The 'all_databases.js' file is not loaded. Check the <script> tag in your HTML.");
        document.getElementById('foodInput').placeholder = "Error: Database file missing.";
        document.getElementById('foodInput').disabled = true;
        return; // Stop the script if the data is not available
    }

    const input = document.getElementById('foodInput');
    const suggestBox = document.getElementById('suggestList');
    const resultBox = document.getElementById('foodResult');
    const langSelect = document.getElementById('lang-select');
    const foodImgPath = 'assets/food/';
    let currentFoodData = {};

    function switchLanguage(lang) {
        currentFoodData = allFoodData[lang] || {};
        input.value = "";
        resultBox.style.display = 'none';
        suggestBox.style.display = 'none';
    }

    langSelect.addEventListener('change', (e) => switchLanguage(e.target.value));

    function levenshtein(a, b) {
      a = a.toLowerCase(); b = b.toLowerCase();
      if (!a.length) return b.length;
      if (!b.length) return a.length;
      const v0 = Array(b.length + 1).fill(0); const v1 = Array(b.length + 1).fill(0);
      for (let i = 0; i <= b.length; i++) v0[i] = i;
      for (let i = 0; i < a.length; i++) {
        v1[0] = i + 1;
        for (let j = 0; j < b.length; j++) {
          const cost = a[i] === b[j] ? 0 : 1;
          v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
        }
        for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
      }
      return v1[b.length];
    }
    function similarity(a, b) {
      const lv = levenshtein(a,b);
      return 1 - (lv / Math.max(a.length, b.length, 1));
    }

    function getSuggestions(term) {
      term = (term || '').trim().toLowerCase();
      if (!term || Object.keys(currentFoodData).length === 0) return [];
      const foodList = Object.entries(currentFoodData);
      let scored = foodList.map(([key, value]) => {
        let name = value.name || key;
        let nameLower = name.toLowerCase();
        let sim = Math.max(similarity(term, key), similarity(term, nameLower));
        let starts = nameLower.startsWith(term) ? 1.5 : 0;
        let inc = nameLower.includes(term) ? 0.5 : 0;
        return { key, name, img: value.image, score: sim + starts + inc };
      });
      scored = scored.filter(x => x.score >= 0.65).sort((a, b) => b.score - a.score);
      return scored.slice(0, 8);
    }

    function fillSuggestions() {
      const term = input.value;
      const suggestions = getSuggestions(term);
      suggestBox.innerHTML = "";
      if (suggestions.length > 0) {
        suggestions.forEach(({ key, name, img }) => {
          const div = document.createElement('div');
          div.className = 'suggestion-item';
          div.innerHTML = (img ? `<img src="${foodImgPath+img}" alt="" loading="lazy" />` : '') +
                          `<span>${highlightMatch(name, term)}</span>`;
          div.onclick = () => {
            input.value = name;
            suggestBox.style.display = 'none';
            showFoodInfo(key);
          };
          suggestBox.appendChild(div);
        });
        suggestBox.style.display = 'block';
      } else {
        suggestBox.style.display = 'none';
      }
    }

    function highlightMatch(foodName, typed) {
        if (!typed) return foodName;
        const regex = new RegExp(`(${typed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return foodName.replace(regex, '<b>$1</b>');
    }

    input.addEventListener('input', fillSuggestions);
    input.addEventListener('focus', fillSuggestions);
    input.addEventListener('blur', () => setTimeout(() => suggestBox.style.display = 'none', 200));

    input.addEventListener('keydown', function(e) {
      const items = suggestBox.querySelectorAll('.suggestion-item');
      if (!items.length || suggestBox.style.display === 'none') return;
      let active = suggestBox.querySelector('.active');
      let idx = active ? Array.from(items).indexOf(active) : -1;
      if (e.key === 'ArrowDown') { e.preventDefault(); idx = (idx + 1) % items.length; } 
      else if (e.key === 'ArrowUp') { e.preventDefault(); idx = (idx - 1 + items.length) % items.length; } 
      else if (e.key === 'Enter' && active) { e.preventDefault(); active.click(); } 
      else if (e.key === 'Escape') { suggestBox.style.display = 'none'; }
      items.forEach((it, i) => it.classList.toggle('active', i === idx));
    });

    window.searchFood = function() {
      let inp = input.value.trim().toLowerCase();
      let key;
      if (Object.keys(currentFoodData).length > 0) {
        key = Object.keys(currentFoodData).find(k => currentFoodData[k].name.toLowerCase() === inp);
      }
      if (!key) {
        const suggestions = getSuggestions(inp);
        if (suggestions.length > 0) key = suggestions[0].key;
      }
      if (key && currentFoodData[key]) {
          showFoodInfo(key);
      } else {
        resultBox.innerHTML = "<span class='error-msg'>Food not found. Please try another name.</span>";
        resultBox.style.display = "block";
      }
    };

    function showFoodInfo(key) {
      const d = currentFoodData[key];
      suggestBox.style.display = 'none';
      resultBox.innerHTML =
        (d.image ? `<img class="food-image" src="${foodImgPath+d.image}" alt="${d.name||key}" loading="lazy">` : '') +
        `<strong class="food-title">${d.name||key}</strong>
        <span>Calories: <b>${d.kcal}</b> kcal / 100g</span><br>
        <span class="macros">Protein: <b>${d.protein}</b>g | Carbs: <b>${d.carbs}</b>g | Fat: <b>${d.fat}</b>g</span>`;
      resultBox.style.display = "block";
    }
    
    switchLanguage(langSelect.value);

})();
