# Epic Rock Paper Scissors Game 🎮

A modern, responsive web-based implementation of the classic Rock Paper Scissors game featuring AI-powered opponents, stunning animations, and multiple difficulty levels.

## ✨ Key Features

### Advanced AI Opponent System:
- 🟢 **Easy**: Pure random selection
- 🟡 **Medium**: Adaptive AI with 70% random / 30% counter-strategy
- 🔴 **Hard**: Machine learning-based predictions using player's historical moves

### Modern Interface:
- Responsive design with glassmorphism effects
- Fluid animations and battle sequences
- Intuitive controls and visual feedback

### Game Features:
- Dynamic scoring system
- Best-of-5 rounds matches
- Real-time move animations
- Sound effects and visual cues

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Flexbox, CSS Grid, CSS Animations
- **UI Framework**: Custom-built with CSS Variables
- **Fonts**: Google Fonts (Orbitron, Space Mono)
- **Icons**: Font Awesome 6

## 🚀 Quick Start

### 1. Setup
```bash
git clone https://github.com/yourusername/epic-rock-paper-scissors
cd epic-rock-paper-scissors
```

### 2. Prerequisites
- Web browser (Chrome/Firefox/Safari/Edge)
- Local development server (optional)

### 3. Running the Game
#### Using Python's built-in server
```bash
python -m http.server 8000
```

#### Using Node's http-server
```bash
npx http-server
```

### 4. Game Rules

#### Basic Mechanics
- Choose your weapon: 🗿 Rock, 📄 Paper, or ✂️ Scissors
- Compete against an AI opponent
- Win conditions:
  - Rock crushes Scissors
  - Paper covers Rock
  - Scissors cuts Paper

#### Scoring System
- Win = +1 point
- Draw = 0 points
- Loss = 0 points
- First to 3 wins or best score after 5 rounds

## 📂 Project Structure
```
project/
├── code/
│   ├── index.html    # Main game interface
│   ├── style.css     # Styling and animations
│   └── script.js     # Game logic and AI
├── images/
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
└── README.md
```

## 🔧 Development

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Code editor (VS Code recommended)
- Git for version control

### Contributing Guidelines
1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes:
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push to branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📱 Browser Support

| Browser   | Status |
|-----------|--------|
| Chrome    | ✅ Tested |
| Firefox   | ✅ Tested |
| Safari    | ✅ Tested |
| Edge      | ✅ Tested |

## 🔜 Future Enhancements
- [ ] Multiplayer support
- [ ] Advanced statistics tracking
- [ ] Achievement system
- [ ] Custom themes
- [ ] Sound effects library
- [ ] Account system

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- The open-source community
