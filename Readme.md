# TastyEats

A smart kitchen assistant that helps with recipes, cooking techniques, and meal planning using advanced LLM technology.

## Description

TastyEats is an AI-powered assistant designed to enhance your cooking experience. It leverages Large Language Models (LLMs) to suggest recipes based on available ingredients, provide step-by-step cooking instructions, offer substitution advice, and more.

## Features

- Recipe recommendations based on ingredients you have
- Step-by-step cooking instructions powered by LLM technology
- Intelligent ingredient substitution suggestions
- AI-driven meal planning assistance
- Dietary restriction accommodation with contextual understanding
- Interactive cooking technique tutorials

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)
- Git

### Setup Instructions

1. **Clone the repository**


# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

# .env file
LLM_API_KEY=your_api_key_here
SECRET_KEY=your_django_secret_key
DEBUG=True

Access the application

Open your browser and navigate to http://127.0.0.1:8000/