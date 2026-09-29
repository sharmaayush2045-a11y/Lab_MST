# LabMST - Post Box with Character Counter

A simple React application that implements a post box with a live character counter and validation.

## Features

- **Controlled Textarea**: Manages input state in real time.
- **Character Counter**: Displays current character count against the maximum limit (`0 / 100`).
- **Validation**: Shows a red "Limit exceeded" message if the text exceeds 100 characters.
- **Dynamic Button**: Disables the "Post" button when the input is empty or over 100 characters.

## Folder Structure

```text
LabMST/
├── public/
├── src/
│   ├── components/
│   │   ├── PostBox.jsx
│   │   └── PostBox.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js