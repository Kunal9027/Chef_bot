# 🍽️ TastyEats – Your Smart Kitchen Assistant

TastyEats is an AI-powered kitchen assistant that helps you cook smarter, not harder. Whether you're a beginner or a seasoned home chef, it assists with recipes, cooking techniques, ingredient substitutions, and meal planning—all powered by cutting-edge LLM (Large Language Model) technology via LangChain.



---

## ✨ Features

- 🔍 **Recipe Recommendations** – Get recipe ideas based on ingredients you have at home.  
- 🧑‍🍳 **Step-by-Step Instructions** – Clear, AI-generated cooking directions.  
- 🔄 **Smart Substitutions** – Don’t have an ingredient? Ask AI and Get instant alternatives.   
- 🥦 **Dietary Restrictions Aware** – Handles vegetarian, vegan, gluten-free, and more.  
  

---

## 🛠️ Tech Stack

- **Backend:** Python, Django  
- **AI/LLM:** LangChain + Groq_API  
- **Dependencies:** Managed via `requirements.txt`

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:
- Python 3.8+
- `pip` (Python package installer)
- Git

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Kunal9027/Chef_bot.git
cd Chef_bot

# Create and activate a virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## 🔐 Environment Variables
- Create a .env file in the root directory with the following content:

``` .env
API_KEY=your_api_key_here
```
# 🌐 Accessing the Application
- Once everything is set up, run your Django server:

```
python manage.py runserver
```
- Then open your browser and go to:
```
http://127.0.0.1:8000/chefbot
```



