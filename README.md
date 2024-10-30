# Movie Catalog

## Description
Movie Catalog is a personal movie catalog application where users can search for movies and view detailed information about them.

## Features
- Search for movies
- View detailed information about movies
- Built with React and Vite for the frontend
- Fastify as a backend server
- Docker for containerization

## Technologies Used
- **Frontend:** React, Vite
- **Backend:** Fastify
- **Containerization:** Docker

## Getting Started

### Prerequisites
- Docker installed on your machine.

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   
2. Create a .env file in the server directory and add your TMDB API key:
   ```bash
   TMDB_API_KEY=your_api_key_here
   
4. Run the project using Docker:
   docker-compose up

5. Access the application in your browser at http://localhost:3000.

### Usage
Once the application is running, you can search for movies by entering their titles in the search bar. The results will display detailed information about the selected movies.

### Acknowledgments
Special thanks to The Movie Database (TMDB) for providing the movie data API.
