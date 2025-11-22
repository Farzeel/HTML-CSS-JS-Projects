  // Zodiac Data Arrays
  const zodiacSigns = [
    {
        name: "Aries",
        dates: "Mar 21 - Apr 19",
        element: "Fire",
        planet: "Mars",
        symbol: "♈",
        icon: "fas fa-fire",
        traits: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
        description: "Aries is the first sign of the zodiac, and that's pretty much how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going."
    },
    {
        name: "Taurus",
        dates: "Apr 20 - May 20",
        element: "Earth",
        planet: "Venus",
        symbol: "♉",
        icon: "fas fa-mountain",
        traits: "Reliable, patient, practical, devoted, responsible, stable",
        description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."
    },
    {
        name: "Gemini",
        dates: "May 21 - Jun 20",
        element: "Air",
        planet: "Mercury",
        symbol: "♊",
        icon: "fas fa-comments",
        traits: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
        description: "Gemini is an air sign represented by the twins Castor and Pollux. Geminis are known for their dual nature - they can be both outgoing and introverted, serious and playful."
    },
    {
        name: "Cancer",
        dates: "Jun 21 - Jul 22",
        element: "Water",
        planet: "Moon",
        symbol: "♋",
        icon: "fas fa-water",
        traits: "Tenacious, highly imaginative, emotional, sympathetic, persuasive",
        description: "Cancer is a water sign represented by the crab. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. They value family and home above all else."
    },
    {
        name: "Leo",
        dates: "Jul 23 - Aug 22",
        element: "Fire",
        planet: "Sun",
        symbol: "♌",
        icon: "fas fa-sun",
        traits: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
        description: "Leo is a fire sign represented by the lion. Leos are delighted to embrace their royal status: vivacious, theatrical, and passionate. They're born leaders who enjoy relationships, entertainment, and the spotlight."
    },
    {
        name: "Virgo",
        dates: "Aug 23 - Sep 22",
        element: "Earth",
        planet: "Mercury",
        symbol: "♍",
        icon: "fas fa-leaf",
        traits: "Loyal, analytical, kind, hardworking, practical",
        description: "Virgo is an earth sign represented by the goddess of wheat and agriculture. Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac."
    },
    {
        name: "Libra",
        dates: "Sep 23 - Oct 22",
        element: "Air",
        planet: "Venus",
        symbol: "♎",
        icon: "fas fa-balance-scale",
        traits: "Cooperative, diplomatic, gracious, fair-minded, social",
        description: "Libra is an air sign represented by the scales. Libras are obsessed with symmetry and strive to create equilibrium in all areas of life. They're the aesthetes of the zodiac."
    },
    {
        name: "Scorpio",
        dates: "Oct 23 - Nov 21",
        element: "Water",
        planet: "Pluto",
        symbol: "♏",
        icon: "fas fa-scorpion",
        traits: "Resourceful, brave, passionate, stubborn, a true friend",
        description: "Scorpio is a water sign represented by the scorpion. Scorpios are passionate, assertive, and determined individuals who will focus on a goal until they see it through."
    },
    {
        name: "Sagittarius",
        dates: "Nov 22 - Dec 21",
        element: "Fire",
        planet: "Jupiter",
        symbol: "♐",
        icon: "fas fa-arrow-right",
        traits: "Generous, idealistic, great sense of humor",
        description: "Sagittarius is a fire sign represented by the archer. Sagittarians are born adventurers who are always ready to explore new horizons, both physically and mentally."
    },
    {
        name: "Capricorn",
        dates: "Dec 22 - Jan 19",
        element: "Earth",
        planet: "Saturn",
        symbol: "♑",
        icon: "fas fa-mountain",
        traits: "Responsible, disciplined, self-control, good managers",
        description: "Capricorn is an earth sign represented by the sea goat. Capricorns are skilled at navigating both the material and emotional realms. They're ambitious, determined, and practical."
    },
    {
        name: "Aquarius",
        dates: "Jan 20 - Feb 18",
        element: "Air",
        planet: "Uranus",
        symbol: "♒",
        icon: "fas fa-wind",
        traits: "Progressive, original, independent, humanitarian",
        description: "Aquarius is an air sign represented by the water bearer. Aquarians are forward-thinking, intellectual, and highly analytical individuals who value innovation and social progress."
    },
    {
        name: "Pisces",
        dates: "Feb 19 - Mar 20",
        element: "Water",
        planet: "Neptune",
        symbol: "♓",
        icon: "fas fa-fish",
        traits: "Compassionate, artistic, intuitive, gentle, wise, musical",
        description: "Pisces is a water sign represented by two fish swimming in opposite directions. Pisceans are known for their empathetic, compassionate, and artistic natures."
    }
];

// Horoscope Data
const horoscopes = [
    {
        sign: "Aries",
        prediction: "Today is a day for taking initiative. Your energy is high, and others will notice your confidence. Don't be afraid to speak up in meetings or social situations.",
        luckyNumber: 7,
        mood: "Energetic",
        color: "Red"
    },
    {
        sign: "Taurus",
        prediction: "Financial matters may require your attention today. Stay grounded and avoid impulsive purchases. A stable approach will bring the best results.",
        luckyNumber: 4,
        mood: "Practical",
        color: "Green"
    },
    {
        sign: "Gemini",
        prediction: "Communication is highlighted today. You may find yourself having important conversations or making connections that could benefit you in the future.",
        luckyNumber: 5,
        mood: "Chatty",
        color: "Yellow"
    },
    {
        sign: "Cancer",
        prediction: "Your emotional intuition is strong today. Pay attention to your dreams and gut feelings. Family matters may require your gentle touch.",
        luckyNumber: 2,
        mood: "Nurturing",
        color: "Silver"
    },
    {
        sign: "Leo",
        prediction: "Your creative energy is flowing today. This is an excellent time to start artistic projects or showcase your talents. Others will be drawn to your warmth.",
        luckyNumber: 1,
        mood: "Dramatic",
        color: "Gold"
    },
    {
        sign: "Virgo",
        prediction: "Organization is key today. Tackle those tasks you've been putting off. Your attention to detail will help you solve problems that have been puzzling others.",
        luckyNumber: 6,
        mood: "Analytical",
        color: "Brown"
    },
    {
        sign: "Libra",
        prediction: "Relationships take center stage today. You may need to mediate a disagreement or help others find common ground. Your diplomatic skills will shine.",
        luckyNumber: 9,
        mood: "Harmonious",
        color: "Pink"
    },
    {
        sign: "Scorpio",
        prediction: "Deep conversations and transformations are possible today. You may uncover hidden information or have insights that change your perspective on a situation.",
        luckyNumber: 8,
        mood: "Intense",
        color: "Black"
    },
    {
        sign: "Sagittarius",
        prediction: "Adventure calls today! Whether it's trying a new restaurant or planning a future trip, expanding your horizons will bring joy. Share your optimism with others.",
        luckyNumber: 3,
        mood: "Adventurous",
        color: "Purple"
    },
    {
        sign: "Capricorn",
        prediction: "Career matters require your attention today. Your ambition and discipline will help you make progress on long-term goals. Don't forget to take breaks.",
        luckyNumber: 10,
        mood: "Ambitious",
        color: "Gray"
    },
    {
        sign: "Aquarius",
        prediction: "Your innovative ideas may surprise others today. Don't be afraid to think outside the box. Social connections could lead to exciting opportunities.",
        luckyNumber: 11,
        mood: "Inventive",
        color: "Blue"
    },
    {
        sign: "Pisces",
        prediction: "Your intuition is particularly strong today. Pay attention to your dreams and creative impulses. Helping others will bring you fulfillment.",
        luckyNumber: 12,
        mood: "Dreamy",
        color: "Sea Green"
    }
];

// Compatibility Data
const compatibility = [
    { signs: ["Aries", "Aries"], score: 70, text: "Two Aries together create an energetic and dynamic partnership, though conflicts may arise due to strong wills." },
    { signs: ["Aries", "Taurus"], score: 40, text: "Aries and Taurus have different approaches to life, which can create tension but also balance if both are willing to compromise." },
    { signs: ["Aries", "Gemini"], score: 85, text: "This is a lively match full of energy and ideas. Both signs enjoy adventure and intellectual stimulation." },
    { signs: ["Aries", "Cancer"], score: 50, text: "Aries' directness can hurt Cancer's sensitivity, but with effort, they can learn from each other's differences." },
    { signs: ["Aries", "Leo"], score: 90, text: "A fiery match full of passion and mutual admiration. Both signs understand each other's need for attention and excitement." },
    { signs: ["Aries", "Virgo"], score: 30, text: "These signs approach life very differently. Aries is impulsive while Virgo is analytical, which can lead to frustration." },
    { signs: ["Aries", "Libra"], score: 75, text: "Opposites attract in this pairing. Aries brings action while Libra provides balance, creating a complementary relationship." },
    { signs: ["Aries", "Scorpio"], score: 65, text: "A powerful combination of two strong wills. This relationship requires compromise but can be intensely passionate." },
    { signs: ["Aries", "Sagittarius"], score: 95, text: "An excellent match! Both are fire signs who love adventure, freedom, and exploring new horizons together." },
    { signs: ["Aries", "Capricorn"], score: 45, text: "Different approaches to life can create challenges. Aries is spontaneous while Capricorn is disciplined and cautious." },
    { signs: ["Aries", "Aquarius"], score: 80, text: "An exciting and unconventional pairing. Both value independence and enjoy stimulating conversations and activities." },
    { signs: ["Aries", "Pisces"], score: 55, text: "Aries' directness can overwhelm sensitive Pisces, but with patience, they can create a balanced relationship." }
];


function generateZodiacCards() {
    const zodiacGrid = document.getElementById('zodiacGrid');
    zodiacGrid.innerHTML = '';
    
    zodiacSigns.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-icon">
                <i class="${sign.icon}"></i>
            </div>
            <h3>${sign.name} ${sign.symbol}</h3>
            <p><strong>Dates:</strong> ${sign.dates}</p>
            <p><strong>Element:</strong> ${sign.element}</p>
            <p><strong>Ruling Planet:</strong> ${sign.planet}</p>
        `;
        zodiacGrid.appendChild(card);
    });
}


function generateHoroscopeSelector() {
    const horoscopeSelector = document.getElementById('horoscopeSelector');
    horoscopeSelector.innerHTML = '';
    
    zodiacSigns.forEach((sign, index) => {
        const option = document.createElement('div');
        option.className = 'zodiac-option';
        option.dataset.sign = sign.name;
        option.innerHTML = `<i class="${sign.icon}"></i>`;
        
        if (index === 0) {
            option.classList.add('active');
            updateHoroscope(sign.name);
        }
        
        option.addEventListener('click', () => {
            document.querySelectorAll('.zodiac-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            updateHoroscope(sign.name);
        });
        
        horoscopeSelector.appendChild(option);
    });
}


function updateHoroscope(signName) {
    const horoscope = horoscopes.find(h => h.sign === signName);
    const horoscopeContent = document.getElementById('horoscopeContent');
    
    if (horoscope) {
        document.getElementById('selectedSign').textContent = `${signName} Horoscope`;
        document.getElementById('horoscopeText').textContent = horoscope.prediction;
        
        const details = document.getElementById('horoscopeDetails');
        details.innerHTML = `
            <p><strong>Lucky Number:</strong> ${horoscope.luckyNumber}</p>
            <p><strong>Mood:</strong> ${horoscope.mood}</p>
            <p><strong>Color of the Day:</strong> ${horoscope.color}</p>
        `;
    }
}


function generateCompatibilitySelectors() {
    const sign1Select = document.getElementById('sign1');
    const sign2Select = document.getElementById('sign2');
    
    zodiacSigns.forEach(sign => {
        const option1 = document.createElement('option');
        option1.value = sign.name;
        option1.textContent = sign.name;
        
        const option2 = document.createElement('option');
        option2.value = sign.name;
        option2.textContent = sign.name;
        
        sign1Select.appendChild(option1);
        sign2Select.appendChild(option2);
    });
    
   
    sign1Select.value = 'Aries';
    sign2Select.value = 'Leo';
}


function checkCompatibility() {
    const sign1 = document.getElementById('sign1').value;
    const sign2 = document.getElementById('sign2').value;
    
   
    let match = compatibility.find(c => 
        (c.signs[0] === sign1 && c.signs[1] === sign2) || 
        (c.signs[0] === sign2 && c.signs[1] === sign1)
    );
   
    if (!match) {
        match = {
            score: Math.floor(Math.random() * 40) + 50,
            text: "This is an interesting combination! While not the most common pairing, with understanding and compromise, this relationship can flourish."
        };
    }
    
    
    document.getElementById('compatibilityScore').textContent = `${match.score}%`;
    document.getElementById('compatibilityText').textContent = match.text;
    
    
    const fill = document.getElementById('compatibilityFill');
    fill.style.width = '0';
    setTimeout(() => {
        fill.style.width = `${match.score}%`;
    }, 100);
}


function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
      
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
     
        const size = Math.random() * 3;
        
        
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    generateZodiacCards();
    generateHoroscopeSelector();
    generateCompatibilitySelectors();
    createStars();
    
   
    document.getElementById('checkCompatibility').addEventListener('click', checkCompatibility);
    
    
    checkCompatibility();
});