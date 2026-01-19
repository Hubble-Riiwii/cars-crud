# 🚗 CarsCRUD

CarsCRUD is a web-based CRUD application for **renting cars and putting cars up for rent**.  
The platform allows users to manage car listings, view available cars, and perform basic operations such as creating, updating, and deleting car records.

---

## Admin Features
- Remove users
- Remove cars
- Send advices
- Update WebPage

## User Features
- Add cars for rent  
- Delete car listings  
- Update car details  
- View all available cars  
- View detailed information about each car  
- Rent available cars  

---

## 🛠️ CRUD Operations

This project follows the standard CRUD pattern:

- **Create** – Add new cars to the system  
- **Read** – View cars available for rent  
- **Update** – Edit car information (price, availability, description, etc.)  
- **Delete** – Remove cars from the system  

---

## Technologies Used

- Frontend: HTML, CSS (Bootstrap5), JavaScript  
- Backend: JSON server  
- Database: NONE  

---

## Getting Started

### Prerequisites

- A modern web browser  
- Node.js  

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/carscrud.git
2. Navigate Project Folder
   ```bash
   cd cars-crud
3. Initialize JSON-Server
   ```bash
   cd backend/
   npx json-server db.json
4. Open index.html  

### Folder Structure  
    carscrud/
    ├── backend/        
    │   ├── api/
    │   │   └── api
    │   ├── models/
    │   │   ├── Car.js
    │   │   └── User.js
    │   ├── utils/
    │   │   ├── alerts.js
    │   │   └── functions.js
    │   ├── database/
    │   │   └── db.json
    │   ├── app.js  #Entry point for JSON-server deployment
    │   ├── package-lock.json
    │   └── package.json
    ├── frontend/
    │   ├── admin/
    │   │   ├── js/
    │   │   │   ├── constructCar.js
    │   │   │   └── logout.js
    │   │   ├── dashboard.css
    │   │   └── dashboard.html
    │   ├── assets/
    │   │   ├── cars/   #Folder to store de images and videos for cars
    │   │   ├── icons/  #Folder to store the icons used in the WebPage
    │   │   ├── users/  #Folder to store user profile Images
    │   │   └── images/ #Folder to sotre images used on the WebPage
    │   ├── css/
    │   │   ├── style.css
    │   ├── js/
    │   │   ├── login.js
    │   │   ├── script.js
    │   │   └── signup.js
    │   ├── index.html
    │   ├── log_in.html
    │   ├── sign_up.html
    ├── .gitignore
    ├── CHANGELOG.md
    ├── index.html
    └── README.md
