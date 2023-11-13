# Savage - Messaging Application

## Overview

Savage is a messaging application that allows users to post, like, and delete messages. The app provides a simple interface for user interaction and stores messages in a MongoDB database.

## Features

- **Post Messages**: Users can post new messages with their names.
- **Like/Dislike Messages**: Messages can be liked or disliked using thumbs up/down icons.
- **Delete Messages**: Users have the option to delete messages.
- **Message Sorting**: Messages are sorted based on the number of likes.

## Technologies

- Frontend: HTML, CSS (using FontAwesome for icons)
- Backend: Node.js, Express.js
- Database: MongoDB
- Additional Libraries: EJS for templating, Body-parser for request parsing

## Installation

1. Clone the repository.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Access the application at `http://localhost:3000`.

## Usage

1. **View Messages**: All messages are displayed on the homepage.
2. **Add a Message**: Use the form to submit a new message.
3. **Like/Dislike a Message**: Click on the thumbs up/down icon to like/dislike a message.
4. **Delete a Message**: Use the trash icon to remove a message.

## Contributing

Contributions to the development and enhancement of Savage are welcome:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Create a new Pull Request.
