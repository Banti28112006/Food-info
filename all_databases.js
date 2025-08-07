// all_databases.js

const allFoodData = {
    // English Data
    "en": {
        "chapati": { "kcal": 85, "protein": 3, "carbs": 18, "fat": 0.5, "name": "Chapati", "image": "chapati.png" },
        "rice_white": { "kcal": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "name": "White Rice (Cooked)", "image": "rice.png" },
        "paratha": { "kcal": 150, "protein": 4, "carbs": 25, "fat": 4, "name": "Paratha", "image": "paratha.png" },
        "naan": { "kcal": 315, "protein": 10, "carbs": 55, "fat": 6, "name": "Naan", "image": "naan.png" },
        "jowar_bhakri": { "kcal": 90, "protein": 2.5, "carbs": 20, "fat": 0.6, "name": "Jowar Bhakri", "image": "bhakri.png" },
        "bajra_roti": { "kcal": 110, "protein": 3.5, "carbs": 24, "fat": 1, "name": "Bajra Roti", "image": "bajra_roti.png" },
        "brown_rice": { "kcal": 111, "protein": 2.6, "carbs": 23, "fat": 0.9, "name": "Brown Rice (Cooked)", "image": "brown_rice.png" },
        "puri": { "kcal": 101, "protein": 1.2, "carbs": 12, "fat": 5, "name": "Puri", "image": "puri.png" },
        "idli": { "kcal": 39, "protein": 1, "carbs": 8, "fat": 0.2, "name": "Idli (1 piece)", "image": "idli.png" },
        "dosa_plain": { "kcal": 165, "protein": 4, "carbs": 35, "fat": 1.5, "name": "Dosa (Plain)", "image": "dosa.png" },
        "toor_dal": { "kcal": 110, "protein": 7, "carbs": 20, "fat": 1, "name": "Toor Dal (Cooked)", "image": "toor_dal.png" },
        "moong_dal": { "kcal": 105, "protein": 7, "carbs": 19, "fat": 0.5, "name": "Moong Dal (Cooked)", "image": "moong_dal.png" },
        "chana_dal": { "kcal": 164, "protein": 8, "carbs": 28, "fat": 1, "name": "Chana Dal (Cooked)", "image": "chana_dal.png" },
        "rajma": { "kcal": 127, "protein": 8, "carbs": 23, "fat": 0.5, "name": "Rajma (Kidney Beans)", "image": "rajma.png" },
        "chana_masala": { "kcal": 150, "protein": 6, "carbs": 22, "fat": 4, "name": "Chana Masala", "image": "chana_masala.png" },
        "aloo_gobi": { "kcal": 98, "protein": 3, "carbs": 12, "fat": 4.5, "name": "Aloo Gobi", "image": "aloo_gobi.png" },
        "bhindi_masala": { "kcal": 80, "protein": 2, "carbs": 8, "fat": 5, "name": "Bhindi Masala", "image": "bhindi_masala.png" },
        "palak_paneer": { "kcal": 190, "protein": 10, "carbs": 8, "fat": 14, "name": "Palak Paneer", "image": "palak_paneer.png" },
        "baingan_bharta": { "kcal": 75, "protein": 2, "carbs": 10, "fat": 3, "name": "Baingan Bharta", "image": "baingan_bharta.png" },
        "mixed_veg": { "kcal": 95, "protein": 3, "carbs": 10, "fat": 5, "name": "Mixed Vegetable Curry", "image": "mixed_veg.png" },
        "chicken_curry": { "kcal": 240, "protein": 25, "carbs": 6, "fat": 13, "name": "Chicken Curry", "image": "chicken_curry.png" },
        "egg_boiled": { "kcal": 77, "protein": 6, "carbs": 0.6, "fat": 5, "name": "Boiled Egg (1 large)", "image": "boiled_egg.png" },
        "egg_omelette": { "kcal": 95, "protein": 7, "carbs": 1, "fat": 7, "name": "Omelette (1 egg)", "image": "omelette.png" },
        "fish_fry": { "kcal": 280, "protein": 22, "carbs": 10, "fat": 16, "name": "Fish Fry", "image": "fish_fry.png" },
        "milk": { "kcal": 60, "protein": 3.2, "carbs": 4.8, "fat": 3.3, "name": "Milk (100ml)", "image": "milk.png" },
        "curd": { "kcal": 60, "protein": 3.5, "carbs": 4, "fat": 3, "name": "Curd/Yogurt", "image": "curd.png" },
        "paneer": { "kcal": 265, "protein": 18, "carbs": 1.2, "fat": 20, "name": "Paneer", "image": "paneer.png" },
        "ghee": { "kcal": 900, "protein": 0, "carbs": 0, "fat": 100, "name": "Ghee", "image": "ghee.png" },
        "butter": { "kcal": 717, "protein": 0.9, "carbs": 0.1, "fat": 81, "name": "Butter", "image": "butter.png" },
        "poha": { "kcal": 110, "protein": 2, "carbs": 24, "fat": 1, "name": "Poha", "image": "poha.png" },
        "upma": { "kcal": 190, "protein": 5, "carbs": 30, "fat": 6, "name": "Upma", "image": "upma.png" },
        "apple": { "kcal": 52, "protein": 0.3, "carbs": 14, "fat": 0.2, "name": "Apple", "image": "apple.png" },
        "banana": { "kcal": 89, "protein": 1.1, "carbs": 23, "fat": 0.3, "name": "Banana", "image": "banana.png" },
        "mango": { "kcal": 60, "protein": 0.8, "carbs": 15, "fat": 0.4, "name": "Mango", "image": "mango.png" },
        "orange": { "kcal": 47, "protein": 0.9, "carbs": 12, "fat": 0.1, "name": "Orange", "image": "orange.png" },
        "onion": { "kcal": 40, "protein": 1.1, "carbs": 9, "fat": 0.1, "name": "Onion", "image": "onion.png" },
        "tomato": { "kcal": 18, "protein": 0.9, "carbs": 3.9, "fat": 0.2, "name": "Tomato", "image": "tomato.png" },
        "cucumber": { "kcal": 15, "protein": 0.7, "carbs": 3.6, "fat": 0.1, "name": "Cucumber", "image": "cucumber.png" },
        "potato": { "kcal": 77, "protein": 2, "carbs": 17, "fat": 0.1, "name": "Potato", "image": "potato.png" },
        "samosa": { "kcal": 262, "protein": 4, "carbs": 24, "fat": 17, "name": "Samosa (1 piece)", "image": "samosa.png" },
        "vada_pav": { "kcal": 290, "protein": 7, "carbs": 45, "fat": 10, "name": "Vada Pav", "image": "vada_pav.png" }
    },
    // Hindi Data - **COPY YOUR HINDI DATA HERE**
    "hi": {
        "chapati": { "kcal": 85, "protein": 3, "carbs": 18, "fat": 0.5, "name": "चपाती", "image": "chapati.png" },
        "rice_white": { "kcal": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "name": "सफेद चावल (पका हुआ)", "image": "rice.png" }
    },
    // Marathi Data - **COPY YOUR MARATHI DATA HERE**
    "mr": {
        "chapati": { "kcal": 85, "protein": 3, "carbs": 18, "fat": 0.5, "name": "चपाती", "image": "chapati.png" },
        "rice_white": { "kcal": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "name": "पांढरा तांदूळ (शिजवलेला)", "image": "rice.png" }
    }
};
