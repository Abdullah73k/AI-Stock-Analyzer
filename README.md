<div align="center">
<h3 align="center">AI Stock Analyzer</h3>

  <p align="center">
    Analyzes stock data and provides AI-driven insights and price predictions.
    <br />
    <a href="https://github.com/abdullah73k/ai-stock-analyzer">GitHub Repository</a>
  </p>
  <img src="https://github.com/user-attachments/assets/721b7fb3-e480-4809-9023-fd48b82b1f8c" alt="Project Image" width="400">
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

The AI Stock Analyzer is a web application that leverages AI to provide stock analysis and price predictions. It fetches financial data from Alpha Vantage, uses a reasoning model (Deepseek) to analyze the data, and presents the analysis and predictions in an easily understandable format. The application consists of a React-based client and an Express-based server.

### Key Features

- **Stock Analysis:** Provides a detailed analysis of a given stock, including financial health, market sentiment, future outlook, and risks.
- **Price Prediction:** Predicts the stock price for the next 6 months using AI.
- **Interactive Chart:** Displays the predicted stock prices in an interactive chart.
- **User-Friendly Interface:**  Simple and intuitive interface for entering stock symbols and viewing analysis results.
- **Loading State:** Displays a loading animation while fetching and analyzing data.

## Built With

- **Frontend:**
  - React
  - Vite
  - Axios
  - Recharts
  - Styled Components
- **Backend:**
  - Node.js
  - Express
  - Cors
  - Dotenv
  - OpenAI (Deepseek)
  - Axios

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher)
- An API key from Alpha Vantage (required for fetching stock data).
- An API key and base URL from Deepseek (required for AI analysis).

### Installation

1.  Clone the repository:
   ```sh
   git clone https://github.com/abdullah73k/ai-stock-analyzer.git
   ```
2.  Navigate to the client directory:
   ```sh
   cd ai-stock-analyzer/client
   ```
3.  Install client dependencies:
   ```sh
   npm install
   ```
4. Navigate to the server directory:
    ```sh
    cd ../server
    ```
5. Install server dependencies:
    ```sh
    npm install
    ```
6. Create a `.env` file in the `server` directory and add your Alpha Vantage and Deepseek API keys:
   ```
   ALPHAVANTAGE_API_KEY=YOUR_ALPHAVANTAGE_API_KEY
   DEEPSEEK_API_KEY=YOUR_DEEPSEEK_API_KEY
   DEEPSEEK_BASE_URL=YOUR_DEEPSEEK_BASE_URL
   ```
7. Start the backend server:
   ```sh
   node server.js
   ```
   (or use nodemon for automatic restarts on code changes)
   ```sh
   nodemon server.js
   ```
8.  Start the frontend development server:
   ```sh
   cd ../client
   npm run dev
   ```
   The client application will be available at `http://localhost:5173`.
