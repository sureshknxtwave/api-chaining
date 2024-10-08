## Introduction
The API Chaining Web App is designed to demonstrate the concept of API chaining through a simple interface. Users can select a user from a list, create a post for that user, and fetch comments associated with the post. This project showcases how to handle multiple API calls sequentially based on previous responses.

## Setup Instructions

To run the application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>


## Introduction
The API Chaining Web App is designed to demonstrate the concept of API chaining through a simple interface. Users can select a user from a list, create a post for that user, and fetch comments associated with the post. This project showcases how to handle multiple API calls sequentially based on previous responses.

## Setup Instructions

To run the application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>

2. **Install dependencies:**
    npm install

3. **Start the application:**
    npm start

4. **Open your browser and navigate to:**
    http://localhost:3000


5. **Technical Stack:**
    - React.js
    - Tailwind CSS for styling
    - Git for version control
    - REST API integration


6. **Brief Explanation of Your Approach:**
    The web app consists of several components that work together to provide a seamless user experience:

    **UserList Component**: Displays a list of users fetched from the API, allowing users to select one.
    **PostForm Component**: Allows users to create a post for the selected user.
    **CommentList Component**: Displays comments associated with the created post.
    **Loader Component**: Provides feedback to users during loading states.

    The application demonstrates API chaining by making requests to different endpoints based on user interactions. When a post is created, the app fetches comments for that post, showcasing how one API call's response can dictate the next call.

7. **Features**:
    User Selection: Users can view and select from a list of available users.
    Post Creation: Users can create posts with a title and body for the selected user.
    Comment Fetching: Users can fetch and view comments related to the created post.