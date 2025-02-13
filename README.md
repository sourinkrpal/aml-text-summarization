# Text Summarizer

A powerful text summarization tool that leverages advanced machine learning techniques to generate concise and accurate summaries of input text.

## Authors

- Sourin Kumar Pal  
- Jassim Hameed Ayobkhan

## Project Description

This Text Summarizer project was developed as a Mini Project for the Advanced Machine Learning exam in the M.Sc. Artificial Intelligence and Intelligent System program at the University of Bremen.

We worked on abstractive text summarization using an attention mechanism and pre-trained embeddings. Our model is based on an encoder-decoder architecture with attention layers (T5 (Text-To-Text Transfer Transformer) architecture) and fine-tuned using the CNN/Daily Mail dataset. The goal was to generate concise and coherent summaries while preserving the original meaning. To make things user-friendly, we built a simple web-based interface for real-time summarization. 

## Project Structure

```
./
├── summarizer-backend/
│   ├── server.py
│   ├── requirements.txt
├── summarizer-frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── theme.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
├── README.md
```

## Features

- Efficient text summarization using advanced ML techniques
- User-friendly web interface for easy interaction
- Backend API for seamless integration with other applications
- Customizable summarization parameters

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 14+
- npm 6+

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd summarizer-backend
   ```
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```
3. Install required Python packages:
   ```sh
   pip install -r requirements.txt
   ```
   Alternatively, you can run this command
   ```sh
   pip install flask flask-cors transformers torch
   ```
5. Run the backend server:
   ```sh
   python server.py
   ```

The server should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd summarizer-frontend
   ```
2. Install Node.js dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

The frontend should now be accessible at `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Enter or paste the text you want to summarize in the input field.
3. Click the "Summarize" button.
4. The generated summary will appear in the output field.

## Model

The text summarization model used in this project is available on Hugging Face: [Link](https://huggingface.co/s0urin/aml-text-summarization-t5/tree/main)

You can use this model in your own projects or further fine-tune it for specific use cases.

## Contributing

We welcome contributions to improve the Text Summarizer!

## Acknowledgments

- University of Bremen for providing the opportunity to work on this project

## Contact

- Sourin Kumar Pal - [spal@uni-bremen.de]
- Jassim Hameed Ayobkhan - [jhameed@uni-bremen.de]

Project Link: [https://github.com/sourinkrpal/aml-text-summarization](https://github.com/sourinkrpal/aml-text-summarization)

