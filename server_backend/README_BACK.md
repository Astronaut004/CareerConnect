# Folder Structure (for reference)

![alt text](<Screenshot 2025-07-05 234159.png>)



# Visual Diagram of Route Mapping

## API Endpoints
### Final API URLs

http://localhost:5000/api
├── auth/
│   ├── POST /register        (Register User)
│   ├── POST /login           (Login User)
│
├── jobs/
│   ├── GET /                 (Get all Jobs)
│   ├── POST /                (Create a Job)
│   ├── GET /:id              (Get single Job)
│   ├── PATCH /:id            (Update Job)
│   ├── DELETE /:id           (Delete Job)
│   ├── :id/applications
│       ├── POST              (Apply to Job)
│       ├── GET               (Get Applications for Job)
│
├── applications/
│   ├── DELETE /:id           (Delete Application)



### How mounting works internally


Your Main App (server.js)
├── Mount /api/auth → authRoutes.js
│   ├── /register
│   ├── /login
│
├── Mount /api/jobs → jobRoutes.js
│   ├── /
│   ├── /:id
│   ├── /:id/applications (delegated to applicationRoutes.js)
│
├── Mount /api → applicationRoutes.js
    ├── /applications/:id



## need of route
    `Imagine all 20+ APIs in 1 file (server.js) 😵‍💫 → Chaotic`

    $Routes split your API logic into smaller, cleaner files.$

    Easier to debug, scale, and maintain.


## 🚀 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication