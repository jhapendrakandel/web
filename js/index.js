// English Menu Data
const menuData = {
    lunch: [
        { name: 'Lunch Set', description: '① Salad<br>② Naan or rice<br>③ One type of curry of your choice<br>[Keema egg curry, vegetable curry, chicken curry, butter chicken curry, potato and spinach curry, bean curry]', price: '¥850', image: '/Dishesh/Launch/lunch101.jpg' },
        { name: 'Namaste Lunch', description: 'Salad<br>Mini naan<br>Rice (small)<br>Chicken tikka<br>Chicken curry<br>Bean and tomato curry (butter flavor)', price: '¥980', image: '/Dishesh/Launch/lunch102.jpg' },
        { name: 'Happy Lunch Set', description: '① Salad<br>② Tandoori Chicken<br>③ Rice (small)<br>④ One curry of your choice from the main menu<br>⑤ One naan of your choice from the main menu<br>⑥ Mango Lassi', price: '¥1500', image: '/Dishesh/Launch/lunch103.jpg' },
        { name: 'Ladies Lunch', description: '① Salad<br>② Naan or rice<br>③ One curry of your choice from the curry list<br>④ Dessert', price: '¥850', image: '/Dishesh/Launch/lunch104.jpg' },
        { name: 'Nepal Himalayan Soup Curry Set', description: '① Salad<br>② Japanese rice or basmati rice<br>③ Chicken mixed soup curry (chicken and various vegetables seasoned with Himalayan herbs and spices)', price: '¥990', image: '/Dishesh/Launch/lunch105.jpg' },
        { name: 'Pork Cutlet Curry Rice', description: '① Pork cutlet curry rice<br>② Salad', price: '¥900', image: '/Dishesh/Launch/lunch106.jpg' },
        { name: 'Mutton and Spinach Curry Rice', description: '① Mutton spinach curry rice<br>② Salad', price: '¥900', image: '/Dishesh/Launch/lunch107.jpg' },
        { name: 'Vegetable Curry with Tandoori Chicken', description: '① Vegetable curry tandoori chicken curry rice<br>② Salad', price: '¥1300', image: '/Dishesh/Launch/lunch108.jpg' }
    ],
    special: [
        { name: 'Himalayan Soup Curry Set', description: '[Nepalese classic soup curry set] Chicken and vegetable soup curry, basmati rice or Japanese rice, salad', price: '¥1100', image: '/Dishesh/special/set_61.jpg' },
        { name: 'Nan Curry Set', description: 'Choose one curry of your choice [Chicken curry, Keema egg curry, Vegetable curry, Bean curry] with naan or rice', price: '¥990', image: '/Dishesh/special/set_62.jpg' }
    ],
    dessert: [
        { name: 'Today\'s Indian Dessert', description: '', price: '¥380', image: '/Dishesh/dessert_1.jpg' },
        { name: 'Ice Cream', description: '', price: '¥380', image: '/Dishesh/dessert_2.jpg' }
    ],
    'ala-carte': [
        { name: 'Samosa (2 pieces)', description: 'A typical Indian food made by wrapping various vegetables and cashew nuts and deep frying them.', price: '¥550', image: '/Dishesh/carte/menu_02.jpg' },
        { name: 'Tandoori Chicken', description: 'Bone-in chicken mixed with yogurt and Indian spices and baked in an earthenware pot', price: '¥580', image: '/Dishesh/carte/menu_09.jpg' }
    ],
    curry: [
        { name: 'Keema Egg Curry', description: 'Curry with minced meat and boiled eggs', price: '¥870', image: '/Dishesh/curry/menu_35.jpg' },
        { name: 'Butter Chicken Curry', description: 'Curry with various spices, cream, butter, and chicken', price: '¥980', image: '/Dishesh/curry/menu_39.jpg' }
    ]
};

const drinksData = [
    { name: "Kingfisher (India)", price: "¥580", category: "beer", description: "India's most popular beer with a crisp taste" },
    { name: "Everest Beer (Nepal)", price: "¥580", category: "beer", description: "Premium lager from the Himalayas" },
    { name: "Mango Lassi", price: "¥400", category: "soft", description: "Traditional sweet mango yogurt smoothie" },
    { name: "Chai (iced/Hot)", price: "¥350", category: "soft", description: "Traditional Indian spiced tea" }
];

const heroImages = [
    '/img/main-image.jpg',
    '/Dishesh/Launch/lunch101.jpg',
    '/Dishesh/Launch/lunch103.jpg',
    '/Dishesh/special_1.jpg',
    '/Dishesh/special_2.jpg',
    '/Dishesh/special_3.jpg',
    '/Dishesh/curry/menu_39.jpg',
    '/Dishesh/curry/menu_40.jpg',
    '/Dishesh/Launch/lunch105.jpg',
    '/Dishesh/dessert_1.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const categoriesBtns = document.querySelectorAll('#menu-categories button');
    const drinksFilter = document.getElementById('drinks-filter');
    const heroSlider = document.getElementById('hero-slider');
    const loader = document.getElementById('loader');
    const loaderProgress = document.getElementById('loader-progress');

    // Page Loader Logic
    let progress = 0;
    const loaderInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        if (loaderProgress) loaderProgress.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(loaderInterval);
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 500);
        }
    }, 200);

    // Hero Slider Initialization
    if (heroSlider) {
        heroImages.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url(${src})`;
            heroSlider.appendChild(slide);
        });

        let currentSlide = 0;
        setInterval(() => {
            const slides = document.querySelectorAll('.slide');
            if (slides.length > 0) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }
        }, 5000);
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navList.classList.toggle('active');
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Close when clicking link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navList.classList.remove('active');
            });
        });
    }

    // Branch Modal Logic
    const branchModal = document.getElementById('branch-modal');
    const closeBranchModal = document.getElementById('close-modal');
    const branchBtns = document.querySelectorAll('.branch-btn');
    const branchInfo = document.getElementById('branch-info');
    const branchPhone = document.getElementById('branch-phone');
    const platformLink = document.getElementById('platform-link');
    let selectedPlatform = '';

    const branchData = {
        dambara: {
            phone: '082-262-0004',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E6%AE%B5%E5%8E%9F%E5%BA%97-namaste-danbara/m4g0uX98R5Wz31R9eY-OzA',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-danbara',
            takeaway: 'tel:0822620004'
        },
        hatchobori: {
            phone: '082-222-3240',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E5%85%AB%E4%B8%81%E5%A0%80%E5%BA%97-namaste-hacchobori/zZ3W3R6_Rdy3d6R_R_R_R_A',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-hatchobori',
            takeaway: 'tel:0822223240'
        },
        otemachi: {
            phone: '082-241-6001',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E5%A4%A7%E6%89%8B%E7%94%BA%E5%BA%97-namaste-otemachi/zZ3W3R6_Rdy3d6R_R_R_R_B',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-otemachi',
            takeaway: 'tel:0822416001'
        }
    };

    document.querySelectorAll('.online-order').forEach(orderBtn => {
        orderBtn.addEventListener('click', () => {
            selectedPlatform = orderBtn.dataset.platform;
            branchModal.classList.add('active');
            branchInfo.classList.remove('active');
            document.body.style.overflow = 'hidden';
            
            // Update modal text based on platform
            const title = document.getElementById('modal-title');
            if (selectedPlatform === 'ubereats') title.innerText = 'Order with Uber Eats';
            if (selectedPlatform === 'wolt') title.innerText = 'Order with Wolt';
            if (selectedPlatform === 'takeaway') title.innerText = 'Takeaway Reservation';
        });
    });

    branchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const branch = btn.dataset.branch;
            const data = branchData[branch];
            
            branchPhone.innerText = `Phone: ${data.phone}`;
            platformLink.href = data[selectedPlatform];
            
            if (selectedPlatform === 'takeaway') {
                platformLink.innerText = 'Call to Reserve';
            } else {
                platformLink.innerText = 'Proceed to Order';
            }
            
            branchInfo.classList.add('active');
        });
    });

    if (closeBranchModal) {
        closeBranchModal.addEventListener('click', () => {
            branchModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === branchModal) {
            branchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    function renderMenu(category) {
        menuGrid.innerHTML = '';
        
        if (category === 'drinks') {
            drinksFilter.style.display = 'flex';
            renderDrinks('all');
            return;
        }

        if (drinksFilter) drinksFilter.style.display = 'none';
        const items = menuData[category] || [];
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="menu-item-content">
                    <h3>
                        <span class="price">${item.price}</span>
                        ${item.name}
                    </h3>
                    <p>${item.description}</p>
                </div>
            `;
            menuGrid.appendChild(card);
            observer.observe(card);
        });
    }

    function renderDrinks(subcat) {
        menuGrid.innerHTML = '';
        const items = subcat === 'all' ? drinksData : drinksData.filter(d => d.category === subcat);
        
        items.forEach((drink, index) => {
            const card = document.createElement('div');
            card.className = 'drink-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.6s ease ${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="drink-header">
                    <h3 class="drink-name">${drink.name}</h3>
                    <span class="drink-price">${drink.price}</span>
                </div>
                <p class="drink-description">${drink.description}</p>
            `;
            menuGrid.appendChild(card);
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    categoriesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoriesBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDrinks(btn.dataset.cat);
        });
    });

    // Load default
    renderMenu('lunch');
});
