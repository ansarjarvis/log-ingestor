# Log Ingestor

This project is a MERN Stack-based log ingestion system capable of processing large quantities of log data. It provides a user-friendly interface for querying the data, allowing both full-text searches and specific field-based filtering.

## Prerequisites

- Node.js
- React
- MongoDB
- Tanstack (for data mutation and query)

## Installing

**1. Clone the repository**

- `client/`: directory Contains the client-side code for the query interface.
- `server/`: directory Contains the server-side code for the log ingestion system.

**2. Install dependencies**

- `npm install` in both `client/` and `server/` directories.

**3. edit the `.env` file in `server/` directory.**

- `MONGO_URL`: MongoDB connection string.

**4. Run the server**

- `npm run dev` in `server/` directory.

**5. Run the client**

- `npm run dev` in `client/` directory.

## List of Features

- Single Page Application (SPA) built with React.
- User-friendly interface for querying the data, allowing both full-text searches and specific field-based filtering.
- Multi column filtering with pagination.
- Data mutation and query with Tanstack.
- Log ingestion system capable of processing large quantities of log data.
- MongoDB for storing the data.
