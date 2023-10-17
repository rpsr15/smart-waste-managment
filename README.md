# Smart Waste Management Angular App

This Angular application, developed as a part of a university project in collaboration with La Trobe University and a local council, offers an innovative solution for efficient waste management. By monitoring the fill levels of public waste bins in real-time, it allows for optimized waste collection planning and resource allocation.

## Features

1. **Real-Time Monitoring (PR1)**
   - The application utilizes Angular for the front-end and an Express server, which are connected through Socket.io.
   - The real-time data updates allow for the continuous tracking of the fill levels of public waste bins.
   ![Image PR2](images/pr1.png)


2. **Filter Areas (PR4)**
   - Users can filter and select specific areas to monitor for waste bin fill levels, providing a customized monitoring experience.
   ![Image PR2](images/pr4.png)


3. **Historical Data and Analytics (PR3)**
   - Gain valuable insights into waste collection operations with insightful charts and analytics.
   - Analyze garbage collection data area-wise, for different days, to make informed decisions about resource allocation.
   ![Image PR2](images/pr3.png)


4. **Zoom Out View (PR2)**
   - Zooming out provides an overview of the collected status of bins across a larger area, facilitating a comprehensive perspective on waste management.
   ![Image PR2](images/pr2.png)


## Installation

1. Clone this repository.
2. Navigate to the project directory using your terminal.
3. Install the required dependencies for both the front-end and the server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Start the Angular front-end:
   ```
   cd client
   ng serve
   ```
5. Start the Express server:
   ```
   cd ../server
   node server.js
   ```

## Usage

1. Access the application in your web browser at `http://localhost:4200`.
2. Use the interface to filter areas for waste bin monitoring (PR4).
3. Zoom out to view collected status of bins over a larger area (PR2).
4. Explore the analytics and charts to make informed decisions about waste collection (PR3).


## Contributors

- This project was developed as part of an industry project for a local council in collaboration with La Trobe University.
- Add the names of team members, professors, or anyone else who contributed to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.