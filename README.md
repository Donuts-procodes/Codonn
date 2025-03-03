# Web-Based IDE (React+Vite)

## Overview
This is a web-based IDE that supports Java, JavaScript, and Python execution. Built using React+Vite, it offers an interactive coding environment with essential features such as authentication, real-time storage, and a modern code editor.

## Features
- **Language Support**: Java, JavaScript, and Python
- **Code Editor**: Integrated Monaco Editor for syntax highlighting and autocompletion
- **Execution**: Run code directly in the browser
- **Authentication**: Firebase Authentication (Email/Password, Google Login)
- **Database**: Firebase Cloud Firestore for storing user data and code snippets
- **Hosting**: Deployed on Firebase Hosting
- **UI Framework**: Bootstrap for responsive design
- **Notifications**: React-Toastify for user-friendly alerts

## Tech Stack
- **Frontend**: React+Vite
- **Libraries & Tools**:
  - Bootstrap (UI Styling)
  - Monaco Editor (Code Editing)
  - Axios (API Requests)
  - React Router DOM (Navigation)
  - Firebase (Hosting, Authentication, Cloud Firestore)
  - React-Toastify (Notifications)
  - npm (Package Manager)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/web-ide.git
   ```
2. Navigate to the project directory:
   ```sh
   cd web-ide
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up Firebase configuration:
   - Create a `.env` file in the root directory and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## Running the Project
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open the browser and go to `http://localhost:5173/`

## Deployment
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to Firebase:
   ```sh
   firebase deploy
   ```

## Contributing
Feel free to fork the repository and submit pull requests. Follow the standard development workflow:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your fork (`git push origin feature-name`)
5. Open a pull request

## License
This project is licensed under the MIT License.

