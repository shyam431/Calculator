# Use an official Nginx image to serve the static files
FROM nginx:alpine

# Copy the HTML, CSS, and JS files into the container
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 (default HTTP port)
EXPOSE 80

# The default command to run nginx
CMD ["nginx", "-g", "daemon off;"]
