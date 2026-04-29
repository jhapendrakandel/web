const menuData = {
    lunch: [
        { name: 'Lunch Set', description: '① Salad<br>② Naan or rice<br>③ One type of curry of your choice<br>[Keema egg curry, vegetable curry, chicken curry, butter chicken curry, potato and spinach curry, bean curry]', price: '¥850', image: '.Dishesh/Launch/lunch101.jpg' },
        { name: 'Namaste Lunch', description: 'Salad<br>Mini naan<br>Rice (small)<br>Chicken tikka<br>Chicken curry<br>Bean and tomato curry (butter flavor)', price: '¥980', image: '.Dishesh/Launch/lunch102.jpg' },
        { name: 'Happy Lunch Set', description: '① Salad<br>② Tandoori Chicken<br>③ Rice (small)<br>④ One curry of your choice from the main menu<br>⑤ One naan of your choice from the main menu<br>⑥ Mango Lassi', price: '¥1500', image: '.Dishesh/Launch/lunch103.jpg' },
        { name: 'Ladies Lunch', description: '① Salad<br>② Naan or rice<br>③ One curry of your choice from the curry list<br>④ Dessert', price: '¥850', image: '.Dishesh/Launch/lunch104.jpg' },
        { name: 'Nepal Himalayan Soup Curry Set', description: '① Salad<br>② Japanese rice or basmati rice<br>③ Chicken mixed soup curry (chicken and various vegetables seasoned with Himalayan herbs and spices)', price: '¥990', image: '.Dishesh/Launch/lunch105.jpg' },
        { name: 'Pork Cutlet Curry Rice', description: '① Pork cutlet curry rice<br>② Salad', price: '¥900', image: '.Dishesh/Launch/lunch106.jpg' },
        { name: 'Mutton and Spinach Curry Rice', description: '① Mutton spinach curry rice<br>② Salad', price: '¥900', image: '.Dishesh/Launch/lunch107.jpg' },
        { name: 'Vegetable Curry Topped with Tandoori Chicken', description: '① Vegetable curry tandoori chicken curry rice<br>② Salad', price: '¥1300', image: '.Dishesh/Launch/lunch108.jpg' },
        { name: 'Tandoori Mix', description: '① Tandoori chicken<br>② Shish kebab<br>③ Chicken spinach sausage', price: '¥980', image: '.Dishesh/Launch/lunch109.jpg' },
        { name: 'Lunchtime Drinks', description: 'Orange juice ¥+100<br>Mango juice ¥+100<br>Oolong tea ¥+100<br>Iced chai ¥+100<br>Iced coffee ¥+100<br>Lassi ¥+100<br>Hot chai ¥+150<br>Hot coffee ¥+150<br>Mango lassi ¥+150<br>Draft beer ¥+490<br>Indian beer ¥+600<br>Nepalese beer ¥+600', price: '', image: '.Dishesh/Launch/drink.jpg' }
    ],

    special: [
        {
            name: '[120 minutes] Order buffet (Additional 1,500 yen for all-you-can-drink!)',
            description: '[Available for 2 or more people] ¥2000 per person<br>[A la carte dishes] Green salad, Papad (bean chips), Al ko achar (japonic salad), Samosa, Mixed pakoda (spiced vegetable tempura), Shish kebab, Boneless tandoori chicken, Prawn curry, Semi-dry chicken and eggplant curry, Mixed vegetable curry, Keema egg curry, Chickpea and spinach curry<br>[Naan and rice] Plain naan, Garlic naan, Onion naan, Rice (Japanese rice), Vegetable biryani (fried rice)<br>[All-you-can-drink contents] *Last order 30 minutes before closing. Highball, Suntory Highball, Jim Beam Highball, Kaku Highball, The Premium Malt\'s, Kodawari Sakaba no Lemon Sour, Tomato Sour, Grapefruit Sour, Midori Gin Soda, Wine by the Glass (Red/White), Barley Potato (on the rocks, with water, with hot water), Plum Wine (on the rocks, with water, with soda), Gin and Tonic, Cassis Soda, Cassis Oolong, Cassis Orange, Suntory All Free, Hot Chai, Iced Chai, Iced Coffee, Hot Coffee, Cola, Ginger Ale, Oolong Tea, Orange Juice, Lassi.<br>★Orders accepted for parties of 2 or more. ★Service coupons and discount coupons cannot be used.',
            price: '¥2000 per person',
            image: '.Dishesh/special_1.jpg'
        },
        {
            name: '2-hour all-you-can-drink course',
            description: '[Available for 2 or more people] ¥3,278 per person<br>[A la carte dishes] Salad, papad (bean chips), samosa, tandoori chicken, shish kebab, onion tempura, momo<br>[Curry & naan] Chicken and eggplant curry, chickpea curry, cheese naan, dessert<br>[All-you-can-drink contents] *Last order is 30 minutes before closing. Highball, Suntory Highball, Jim Beam Highball, Kaku Highball, The Premium Malt\'s, Kodawari Sakaba no Lemon Sour, Tomato Sour, Grapefruit Sour, Midori Gin Soda, Glass Wine (Red/White), Barley Potato (Rocks/Milk/Hot Water), Plum Wine (Rocks/Milk/Soda), Gin and Tonic, Cassis Soda, Cassis Oolong, Cassis Orange, Suntory All Free, Hot Chai, Iced Chai, Iced Coffee, Hot Coffee, Cola, Ginger Ale, Oolong Tea, Orange Juice, Lassi.<br>★Orders accepted for 2 or more people. ★Service coupons and discount coupons cannot be used.',
            price: '¥3,278 per person',
            image: '.Dishesh/special_2.jpg'
        },
        {
            name: '[150 minutes all-you-can-drink included] Choose your main course ◆ Namaste Premium Course',
            description: '[Available for 2 or more people] ¥4000 per person<br>[A la carte dishes] Salad, Garlic kebab, Chicken and spinach shish kebab, Chicken patago (fried chicken), Edamame, Chorizo ​​broccoli, Masala omelette, Momo, French fries, Papad, Yakisoba or curry + naan (choose your favorite curry and naan from the menu), Dessert<br>[All-you-can-drink contents] *Last order is 30 minutes before closing. Highball, Suntory Highball, Jim Beam Highball, Kaku Highball, The Premium Malt\'s, Kodawari Sakaba no Lemon Sour, Tomato Sour, Grapefruit Sour, Midori Gin Soda, Glass Wine (Red/White), Barley Potato (on the rocks, with water, with hot water), Umeshu (on the rocks, with water, with soda), Gin and Tonic, Cassis Soda, Cassis Oolong, Cassis Orange, Suntory All Free, Hot Chai, Iced Chai, Iced Coffee, Hot Coffee, Cola, Ginger Ale, Oolong Tea, Orange Juice, Lassi.<br>★Orders accepted for 2 or more people. ★Service coupons and discount coupons cannot be used.',
            price: '¥4000 per person',
            image: '.Dishesh/special_3.jpg'
        },
        {
            name: 'Himalayan Soup Curry Set',
            description: '[Nepalese classic soup curry set] Chicken and vegetable soup curry, basmati rice or Japanese rice, salad',
            price: '¥1100',
            image: '.Dishesh/special/set_61.jpg'
        },
        {
            name: 'Nan Curry Set',
            description: 'Choose one curry of your choice [Chicken curry, Keema egg curry, Vegetable curry, Bean curry] with naan or rice',
            price: '¥990',
            image: '.Dishesh/special/set_62.jpg'
        },
        {
            name: 'Star Set',
            description: 'Salad, Chicken Tikka, Chicken and Spinach Sausage, Vegetable Curry, Tandoori Chicken Curry, Naan or Rice',
            price: '¥1600',
            image: '.Dishesh/special/set_63.jpg'
        },
        {
            name: 'Maharaja Set',
            description: 'Salad, tandoori chicken, curry (choose one item from the single curry menu), naan (choose one item from the single naan menu), drink (choose one item from the draft beer or soft drink menu)',
            price: '¥1991',
            image: '.Dishesh/special/set_64.jpg'
        },
        {
            name: 'Namaste Set',
            description: 'Salad, Samosa, Chicken Tikka, Chicken and Spinach Sausage, Curry (choose one item from the single curry menu), Naan (choose one item from the single naan menu), Drink (choose one item from the draft beer or soft drink menu)',
            price: '¥2400',
            image: '.Dishesh/special/set_65.jpg'
        },
        {
            name: 'Classic Set (for 2 people)',
            description: '[Total for 2 people] ¥4400<br>Salad, tandoori chicken (2 pieces), dessert or ice cream, curry (choose 2 items from the single curry menu), naan (choose 2 items from the single naan menu), drink (choose 2 items from the draft beer or soft drink menu)',
            price: '¥4400',
            image: '.Dishesh/special/set_66.jpg'
        }
    ],

    dessert: [
        {
            name: 'Today\'s Indian Dessert',
            description: '',
            price: '¥380',
            image: '.Dishesh/dessert_1.jpg'
        },
        {
            name: 'Ice Cream',
            description: '',
            price: '¥380',
            image: '.Dishesh/dessert_2.jpg'
        }
    ],

    'ala-carte': [
        {
            name: 'Tomato Soup',
            description: '',
            price: '¥500',
            image: '.Dishesh/carte/menu_01.jpg'
        },
        {
            name: 'Samosa (2 pieces)',
            description: 'A typical Indian food made by wrapping various vegetables and cashew nuts and deep frying them.',
            price: '¥550',
            image: '.Dishesh/carte/menu_02.jpg'
        },
        {
            name: 'Onion Tempura',
            description: '',
            price: '¥580',
            image: '.Dishesh/carte/menu_03.jpg'
        },
        {
            name: 'Arukoacha',
            description: '',
            price: '¥580',
            image: '.Dishesh/carte/menu_04.jpg'
        },
        {
            name: 'Papad (bean crackers)',
            description: '',
            price: '¥350',
            image: '.Dishesh/carte/menu_05.jpg'
        },
        {
            name: 'Peaches (6 pieces)',
            description: 'Nepalese-style steamed xiaolongbao',
            price: '¥680',
            image: '.Dishesh/carte/menu_06.jpg'
        },
        {
            name: 'Green Salad',
            description: '',
            price: '¥600',
            image: '.Dishesh/carte/menu_07.jpg'
        },
        {
            name: 'Tandoori Chicken',
            description: 'Bone-in chicken mixed with yogurt and Indian spices and baked in an earthenware pot',
            price: '¥580',
            image: '.Dishesh/carte/menu_09.jpg'
        },
        {
            name: 'Chicken Tikka (2 pieces)',
            description: '',
            price: '¥550',
            image: '.Dishesh/carte/menu_10.jpg'
        },
        {
            name: 'Kids Set (for children up to 8 years old)',
            description: '① Rice<br>② Naan<br>③ One of your choice of curry (Keema egg curry or chicken curry)<br>④ Mango lassi',
            price: '¥500',
            image: '.Dishesh/carte/kids_00.jpg'
        }
    ],

    curry: [
        {
            name: 'Keema Egg Curry',
            description: 'Curry with minced meat and boiled eggs',
            price: '¥870',
            image: '.Dishesh/curry/menu_35.jpg'
        },
        {
            name: 'Keema Masala Curry',
            description: 'Semi-dry minced meat curry',
            price: '¥960',
            image: '.Dishesh/curry/menu_36.jpg'
        },
        {
            name: 'Chicken Curry',
            description: 'A popular curry made with slow-cooked chicken and spices.',
            price: '¥880',
            image: '.Dishesh/curry/menu_37.jpg'
        },
        {
            name: 'Chicken and Eggplant Curry (Semi-Dry)',
            description: 'Semi-dry curry with eggplant, tomato, onion, green pepper, and chicken',
            price: '¥950',
            image: '.Dishesh/curry/menu_38.jpg'
        },
        {
            name: 'Butter Chicken Curry',
            description: 'Curry with various spices, cream, butter, and chicken',
            price: '¥980',
            image: '.Dishesh/curry/menu_39.jpg'
        },
        {
            name: 'Chicken and Spinach Curry',
            description: 'A thick curry made with spinach, spices, and chicken.',
            price: '¥980',
            image: '.Dishesh/curry/menu_40.jpg'
        },
        {
            name: 'Chicken and Cashew Nut Curry',
            description: '',
            price: '¥980',
            image: '.Dishesh/curry/menu_41.jpg'
        },
        {
            name: 'Kadai Chicken',
            description: 'Spicy chicken curry',
            price: '¥970',
            image: '.Dishesh/curry/menu_42.jpg'
        },
        {
            name: 'Spicy Chicken Curry',
            description: 'Tandoori chicken curry with onion butter cream sauce',
            price: '¥970',
            image: '.Dishesh/curry/menu_43.jpg'
        },
        {
            name: 'Mutton Curry',
            description: 'Curry made with lamb',
            price: '¥980',
            image: '.Dishesh/curry/menu_44.jpg'
        },
        {
            name: 'Mutton and Spinach Curry',
            description: 'Spinach-based mutton curry',
            price: '¥990',
            image: '.Dishesh/curry/menu_45.jpg'
        },
        {
            name: 'Mutton and Cashew Nut Curry',
            description: '',
            price: '¥990',
            image: '.Dishesh/curry/menu_46.jpg'
        },
        {
            name: 'Chickpea and Spinach Curry',
            description: '',
            price: '¥900',
            image: '.Dishesh/curry/menu_47.jpg'
        },
        {
            name: 'Seafood and Eggplant Curry',
            description: '',
            price: '¥960',
            image: '.Dishesh/curry/menu_48.jpg'
        },
        {
            name: 'Seafood Masala Curry',
            description: 'A creamy curry made with seafood, tomatoes, and fresh cream.',
            price: '¥990',
            image: '.Dishesh/curry/menu_49.jpg'
        },
        {
            name: 'Shrimp Curry',
            description: 'Shrimp curry with spices',
            price: '¥920',
            image: '.Dishesh/curry/menu_50.jpg'
        },
        {
            name: 'Mixed Vegetable Curry',
            description: 'A mild curry with a variety of vegetables',
            price: '¥850',
            image: '.Dishesh/curry/menu_51.jpg'
        },
        {
            name: 'Beans and Tomatoes with Curry Butter',
            description: '',
            price: '¥850',
            image: '.Dishesh/curry/menu_52.jpg'
        },
        {
            name: 'Chickpea Curry',
            description: 'Chickpea curry made with over 40 kinds of spices',
            price: '¥930',
            image: '.Dishesh/curry/menu_53.jpg'
        },
        {
            name: 'Okra Curry',
            description: 'Okra curry made with over 40 kinds of spices',
            price: '¥930',
            image: '.Dishesh/curry/menu_55.jpg'
        },
        {
            name: 'Grilled Eggplant Curry',
            description: 'Tomato-based curry with chopped grilled eggplant',
            price: '¥930',
            image: '.Dishesh/curry/menu_56.jpg'
        },
        {
            name: 'Potato and Eggplant Curry',
            description: 'Potato and eggplant semi-dry curry',
            price: '¥930',
            image: '.Dishesh/curry/menu_57.jpg'
        },
        {
            name: 'Homemade Cheese and Spinach Curry',
            description: 'Green curry made with handmade cheese and spinach seasoned with spices',
            price: '¥960',
            image: '.Dishesh/curry/menu_58.jpg'
        },
        {
            name: 'Homemade Cheese and Butter Curry',
            description: 'Cheese curry made with over 40 kinds of spices',
            price: '¥980',
            image: '.Dishesh/curry/menu_59.jpg'
        }
    ]
};

const drinkData = [
    // Beer
    { name: "Kingfisher (India)", price: "¥580", category: "beer", description: "India's most popular beer with a crisp taste" },
    { name: "Everest Beer (Nepal) small bottle", price: "¥580", category: "beer", description: "Premium lager from the Himalayas" },
    // Simplified for now, can add more later
];

export { menuData, drinkData };
