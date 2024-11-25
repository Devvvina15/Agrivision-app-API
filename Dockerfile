# Gunakan Node.js sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file proyek ke dalam container
COPY . .

# Ekspos port 3000
EXPOSE 8000

# Jalankan server
CMD ["node", "src/index.js"]
