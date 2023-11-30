FROM python:3.8-slim

# Set the working directory
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Install dependencies
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    pip install --no-cache-dir -r requirements.txt && \
    apt-get purge -y libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Expose the port
EXPOSE 4200

# Set environment variables
ENV NAME World

# Run the application
CMD ["python", "app.py"]
