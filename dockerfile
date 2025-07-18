# Use a base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy application code into the container
COPY package*.json ./

# Install application dependencies
# RUN pip install -r requirements.txt       # For Python
RUN npm install                          # For Node.js

COPY . .

# Expose port (if required)
EXPOSE 3000

# Define the default command to run the application
# CMD ["python", "app.py"]                # For Python
 CMD ["npm", "start", "node", "jason.js"]                    # For Node.js
