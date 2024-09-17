# Image Editor & Converter
This is a web-based image editor and converter built using Node.js, Express, and the Sharp library. The application allows users to upload images, apply transformations (such as resizing, rotating, and converting formats), and download the edited image.

## Features
- Upload images in various formats (JPEG, PNG, etc.)
- Apply transformations:
  - Resize images
  - Rotate images
  - Convert to different formats (e.g., PNG, JPEG)
  - Apply grayscale or blur effects

## Future Releases
- Add a "Download image" button
- Fix the reload issue after every use
- Process larger files
- Format to more file types
- The ability to resize images within the application
- The ability to save images to your profile (Subscription based)
- Introduce AI that creates images based off a text description from the user (Premium subscription)

## Technologies Used
- **Backend**: Node.js, Express, Sharp, Multer
- **Frontend**: HTML5, CSS, JavaScript (Vanilla)
- **File Uploads**: Multer for handling image uploads
- **Image Processing**: Sharp for resizing, cropping, converting, and other image transformations
