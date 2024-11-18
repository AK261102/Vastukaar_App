# Vastukaar App 1
Vastukaar is an *Inventory and Stock Management Solution* designed to help businesses manage products in real time, streamline their inventory processes, and enhance operational efficiency. The app provides robust features such as authentication, dashboard access, and a user-friendly interface for managing stock and inventory.

## App link 
link : https://vastukaar.netlify.app/

## Testing and demo user
Email : test@gmail.com

Password : 123456

## 🚀 Features

- *User Authentication*
  - Secure login and registration system using JWT.
  - Role-based access to dashboard and features.

- *Inventory Management*
  - Real-time inventory and stock control for efficient warehouse operations.

- *Interactive UI*
  - A responsive and visually appealing design with React.js and SCSS.

- *Dynamic Navigation*
  - Role-specific navigation links (e.g., ShowOnLogin and ShowOnLogout).


### Installation

Follow these steps to run the project locally:

1. Clone the repository:

   git clone https://github.com/AK261102/Vastukaar_App.git

   cd Vastukaar_App

3. Install backend dependencies and start the server:

   cd Backend

   npm install

   npm start

5. Install frontend dependencies and start the server:

   cd ../Frontend

   npm install

   npm start

7. Environment Variables:

   Create a .env file in the Backend directory.
   Add necessary environment variables for :

   - JWT secret = your secret key
 
   - MongoDB URI= your_mongodb_connection_string
 
   - PORT = 5000(eg.)
 
   - CLOUDINARY_CLOUD_NAME = your_cloudinary_account_name
 
   - CLOUDINARY_API_KEY = your_cloudinary_api_key
 
   - CLOUDINARY_API_SECRET = your_cloudinary_api_key

## 🛠️ Tech Stack
### Frontend:
- *React.js*: Component-based architecture for dynamic and responsive UI.
- *SCSS*: Advanced styling with modular and reusable CSS.

### Backend:
- *Node.js*: Backend framework for building scalable APIs.
- *Express.js*: Server-side framework for API endpoints.
- *MongoDB*: NoSQL database for storing user and inventory data.

### Additional Libraries:
- *React Router*: For seamless navigation and routing between pages.
- *React Icons*: For modern and customizable icons to enhance UI.
- *JWT (JSON Web Token)*: For secure user authentication and authorization.
- *Cloudinary*: For handling media storage, file uploads, and image processing.
- *Multer*: Middleware for handling multipart/form-data for file uploads.
- *Axios*: For making HTTP requests between the frontend and backend.
- *Dotenv*: For managing environment variables securely.
- *Cors*: For enabling cross-origin requests between frontend and backend.
- *Bcrypt.js*: For password hashing to enhance security.
- *Toastify*: For showing real-time notifications with improved UI/UX.
- *Redux*: For state management in React applications.
