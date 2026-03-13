# VeriCheck AI - Product Authenticity Verification

VeriCheck AI is a high-precision product verification system designed to detect counterfeit goods using advanced neural analysis. It provides a seamless experience for both consumers and businesses to verify product authenticity through image scanning.

## 🚀 Key Features

- **AI-Powered Scanner**: Upload or drag-and-drop product images for instant authenticity analysis.
- **Real-time Dashboard**: Track verification statistics including total scans, authentic products detected, and counterfeits flagged.
- **Dark Mode**: Fully optimized dark and light themes for comfortable use in any environment.
- **Activity Tracking**: Keep a history of all verifications with detailed results.
- **Secure Infrastructure**: Built on Firebase with robust security rules to protect verification data.

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for a modern, responsive UI
- **Animations**: Framer Motion for smooth transitions
- **Backend**: Firebase (Firestore & Authentication)
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file based on `.env.example` and add your Firebase configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛡️ Security

The application implements strict Firestore security rules to ensure that:
- Users can only access their own verification history.
- Product data is validated before being stored.
- Administrative functions are protected.

## 📄 License

This project is licensed under the MIT License.
