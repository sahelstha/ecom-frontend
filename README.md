# E-Commerce Frontend

A modern, feature-rich e-commerce web application built with **React**, **Vite**, **Redux**, and **Tailwind CSS**. This frontend provides a seamless shopping experience with product browsing, cart management, secure checkout, and payment integration.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=flat&logo=vite)
![Redux](https://img.shields.io/badge/Redux-2.11.2-764ABC?style=flat&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-06B6D4?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Components Overview](#components-overview)
- [Key Features Explained](#key-features-explained)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Shopping Features

- 🏠 **Homepage** with featured products and promotional banners
- 📦 **Product Catalog** with advanced filtering and pagination
- 🔍 **Quick View Modal** for product details without page navigation
- 🛒 **Shopping Cart** with persistent storage and real-time updates
- 💳 **Multi-Step Checkout** (4 steps: Address → Payment Method → Order Summary → Payment)
- 📍 **Address Management** for shipping information
- 💰 **Multiple Payment Methods**:
  - Stripe (Credit/Debit Card)
  - PayPal Integration
- ✅ **Order Confirmation** with payment status display

### User Experience

- 👤 **User Authentication** (Login/Register)
- 🔐 **Protected Routes** for checkout and user pages
- 📱 **Fully Responsive Design** for mobile, tablet, and desktop
- 🎯 **Real-time Cart Badge** displaying item count
- 🔄 **State Persistence** with localStorage
- 📱 **Mobile-Optimized Navigation**
- ⚡ **Loading States** with skeleton screens and spinners
- 🎨 **Toast Notifications** for user feedback

### Advanced Features

- 📊 **Product Filtering** by category and price
- 📄 **Pagination** for product listings
- 🛍️ **Quantity Management** in cart
- 📦 **Stock Validation** for purchases
- 🔐 **Stripe Client Secret** handling for secure payments
- 🌐 **Axios Interceptors** with baseURL configuration

## 🛠️ Tech Stack

### Frontend Framework

- **React** 19.2.4 - UI library
- **Vite** 8.0.4 - Lightning-fast build tool
- **React Router DOM** 7.14.2 - Client-side routing

### State Management & Forms

- **Redux Toolkit** 2.11.2 - Predictable state container
- **React-Redux** 9.2.0 - React bindings for Redux
- **React Hook Form** 7.74.0 - Efficient form validation

### Styling

- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **Material-UI** 9.0.0 - Component library
- **Emotion** 11.14.0 - CSS-in-JS library
- **Headless UI** 2.2.10 - Unstyled, accessible components

### Payment & External Libraries

- **Stripe** - Card payment processing
- **Axios** 1.15.1 - HTTP client
- **Swiper** 12.1.3 - Touch slider carousel
- **React Icons** 5.6.0 - Icon library
- **React Hot Toast** 2.6.0 - Toast notifications
- **React Loader Spinner** 8.0.2 - Loading spinners

## 📁 Project Structure

```
src/
├── api/
│   └── api.js                          # Axios instance configuration
├── assets/
│   ├── hero.png
│   ├── react.svg
│   ├── vite.svg
│   └── sliders/                        # Banner images
├── components/
│   ├── auth/
│   │   ├── Login.jsx                   # Login page
│   │   └── Register.jsx                # Registration page
│   ├── cart/
│   │   ├── Cart.jsx                    # Main cart page
│   │   ├── CartEmpty.jsx               # Empty cart state
│   │   ├── ItemContent.jsx             # Cart item display
│   │   └── SetQuantity.jsx             # Quantity selector
│   ├── checkout/
│   │   ├── Checkout.jsx                # Main checkout container
│   │   ├── AddressInfo.jsx             # Step 1: Address selection
│   │   ├── PaymentMethod.jsx           # Step 2: Payment method
│   │   ├── OrderSummary.jsx            # Step 3: Order review
│   │   ├── PaymentForm.jsx             # Step 4: Payment processing
│   │   ├── StripePayment.jsx           # Stripe integration
│   │   ├── PayPalPayment.jsx           # PayPal integration
│   │   ├── PaymentConfirmation.jsx     # Order confirmation
│   │   ├── AddressInfoModal.jsx        # Address selector modal
│   │   ├── AddAddressForm.jsx          # Add new address form
│   │   ├── AddressList.jsx             # Address list display
│   │   ├── DeleteModal.jsx             # Delete confirmation modal
│   │   └── ...
│   ├── home/
│   │   ├── Home.jsx                    # Homepage
│   │   └── HeroBanner.jsx              # Hero banner section
│   ├── products/
│   │   ├── Products.jsx                # Product listing page
│   │   └── Filter.jsx                  # Product filter sidebar
│   ├── shared/
│   │   ├── Navbar.jsx                  # Navigation bar
│   │   ├── ProductCard.jsx             # Product card component
│   │   ├── ProductViewModal.jsx        # Product details modal
│   │   ├── Loader.jsx                  # Loading spinner
│   │   ├── Skeleton.jsx                # Skeleton loader
│   │   ├── Paginations.jsx             # Pagination controls
│   │   ├── InputField.jsx              # Reusable input field
│   │   ├── Status.jsx                  # Status display component
│   │   ├── ErrorPage.jsx               # Error page
│   │   └── ...
│   ├── About.jsx                       # About page
│   ├── Contact.jsx                     # Contact page
│   ├── UserMenu.jsx                    # User dropdown menu
│   ├── PrivateRoute.jsx                # Route protection component
│   └── BackDrop.jsx                    # Backdrop overlay
├── hooks/
│   └── useProductFilter.jsx            # Custom filter logic hook
├── store/
│   ├── store.js                        # Redux store configuration
│   ├── actions/
│   │   └── index.js                    # Redux thunks (API calls)
│   └── reducers/
│       ├── ProductReducer.js           # Products & categories state
│       ├── cartReducer.js              # Shopping cart state
│       ├── authReducer.js              # User & auth state
│       ├── paymentMethodReducer.js     # Payment method state
│       └── ErrorReducer.js             # Loading & error state
├── utils/
│   ├── constant.js                     # Constants & banner exports
│   ├── formatPrice.js                  # Price formatting utility
│   ├── truncateText.js                 # Text truncation utility
│   └── index.js                        # Other utilities
├── App.jsx                             # Main app component with routing
├── App.css                             # App-level styles
├── index.css                           # Global styles
└── main.jsx                            # React root entry point

index.html                               # HTML entry point
package.json                             # Project dependencies
vite.config.js                          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ecom-frontend.git
   cd ecom-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Backend API Configuration
VITE_BACK_END_URL=http://localhost:5000

# Stripe Configuration (if using Stripe payments)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key_here

# PayPal Configuration (if using PayPal payments)
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

**Required Variables:**

- `VITE_BACK_END_URL` - Backend API base URL (required)

**Optional Variables:**

- `VITE_STRIPE_PUBLIC_KEY` - For Stripe payment processing
- `VITE_PAYPAL_CLIENT_ID` - For PayPal integration

## 📦 Available Scripts

In the project directory, you can run:

### Development

```bash
npm run dev
```

- Starts the development server with hot module replacement (HMR)
- Open [http://localhost:5173](http://localhost:5173) to view in your browser
- The page will reload when you make code changes

### Build for Production

```bash
npm run build
```

- Creates an optimized production build
- Outputs to the `dist/` directory
- Minified and ready for deployment

### Preview Production Build

```bash
npm run preview
```

- Locally preview the production build
- Useful for testing before deployment

### Lint Code

```bash
npm run lint
```

- Runs ESLint to check code quality
- Helps maintain consistent code style

## 🌐 API Integration

### Axios Configuration

The application uses Axios with a configured base URL from the environment variable `VITE_BACK_END_URL`.

**File:** `src/api/api.js`

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  withCredentials: true, // Include cookies in requests
});

export default api;
```

### Expected API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/public/products`   | Fetch all products       |
| GET    | `/public/categories` | Fetch product categories |
| POST   | `/auth/register`     | User registration        |
| POST   | `/auth/login`        | User login               |
| GET    | `/cart`              | Fetch user cart          |
| POST   | `/cart/add`          | Add item to cart         |
| DELETE | `/cart/remove`       | Remove item from cart    |
| GET    | `/addresses`         | Fetch user addresses     |
| POST   | `/addresses`         | Create new address       |
| DELETE | `/addresses/:id`     | Delete address           |
| POST   | `/checkout`          | Create checkout session  |
| POST   | `/payments/stripe`   | Process Stripe payment   |
| POST   | `/payments/paypal`   | Process PayPal payment   |

> **Note:** The actual endpoints should match your backend API. Refer to your backend API documentation for the complete list of endpoints.

## 📊 State Management

### Redux Store Structure

```javascript
{
  product: {
    products: [],              // Array of products
    categories: [],            // Array of categories
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0
    }
  },
  errors: {
    isLoading: false,         // Global loading state
    errorMessage: null,       // Error message
    categoryLoading: false    // Category loading state
  },
  carts: {
    cart: [],                 // Cart items
    totalPrice: 0             // Cart total
  },
  auth: {
    user: null,               // Logged-in user data
    address: [],              // User addresses
    selectedUserAddress: null,// Selected shipping address
    clientSecret: null        // Stripe client secret
  },
  payment: {
    paymentMethod: null       // Selected payment method
  }
}
```

### Key Redux Actions

**Product Actions:**

- `fetchProducts()` - Fetch paginated products
- `fetchCategories()` - Fetch product categories
- `filterProducts()` - Apply category/price filter

**Cart Actions:**

- `addToCart(product)` - Add item to cart
- `removeFromCart(productId)` - Remove from cart
- `updateCartQuantity(productId, quantity)` - Update quantity
- `clearCart()` - Clear all items

**Auth Actions:**

- `registerUser(userData)` - Register new user
- `loginUser(credentials)` - Login user
- `logoutUser()` - Logout user
- `fetchUserAddresses()` - Fetch user's addresses
- `addAddress(addressData)` - Add new address
- `deleteAddress(addressId)` - Delete address

**Checkout Actions:**

- `createCheckoutSession()` - Initialize checkout
- `processPayment(paymentData)` - Process payment
- `confirmPayment()` - Confirm payment completion

## 🏗️ Components Overview

### Layout Components

- **Navbar** - Header with logo, navigation, cart badge, and user menu
- **PrivateRoute** - Route protection wrapper for authenticated pages
- **BackDrop** - Semi-transparent overlay for modals

### Product Components

- **ProductCard** - Displays product with image, name, price, and actions
- **ProductViewModal** - Full product details modal
- **Filter** - Category and price range filters
- **Products** - Main product listing page with pagination

### Cart Components

- **Cart** - Shopping cart page with item management
- **CartEmpty** - Empty state when no items in cart
- **ItemContent** - Individual cart item display
- **SetQuantity** - Quantity adjustment controls

### Checkout Components

- **Checkout** - Multi-step checkout stepper container
- **AddressInfo** - Shipping address selection
- **PaymentMethod** - Payment method selection
- **OrderSummary** - Order review
- **StripePayment** - Stripe payment form
- **PayPalPayment** - PayPal button integration
- **PaymentConfirmation** - Order confirmation page

### Shared Components

- **Loader** - Loading spinner
- **Skeleton** - Skeleton loading placeholder
- **InputField** - Reusable form input
- **Status** - Status badge component

## 🎯 Key Features Explained

### Multi-Step Checkout

The checkout process guides users through 4 steps:

1. **Select Address** - Choose or add shipping address
2. **Payment Method** - Select Stripe or PayPal
3. **Order Summary** - Review items and total price
4. **Process Payment** - Complete payment and get confirmation

### Product Filtering

Users can filter products by:

- **Category** - Browse by product category
- **Price Range** - Filter by minimum/maximum price
- **Pagination** - Navigate through pages of results

### State Persistence

All critical application state is automatically persisted to localStorage:

- User authentication data
- Shopping cart contents
- Selected checkout address
- Payment preferences

This ensures users' data persists across browser sessions.

### Payment Integration

- **Stripe**: Secure card payments with client secret handling
- **PayPal**: PayPal button integration for alternative payment method

## 🔧 Troubleshooting

### Common Issues

**"Backend URL is not configured"**

- Make sure `VITE_BACK_END_URL` is set in `.env.local`
- Verify the backend server is running on the configured URL

**"Cart not persisting"**

- Check browser's localStorage is enabled
- Clear browser cache and reload the page

**"Stripe payment failing"**

- Verify `VITE_STRIPE_PUBLIC_KEY` is set correctly
- Check Stripe API keys in backend

**"Products not loading"**

- Open browser console (F12) to check for API errors
- Ensure backend API is running and accessible
- Verify `VITE_BACK_END_URL` endpoint is correct

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Guidelines

- Follow ESLint rules (run `npm run lint`)
- Use meaningful commit messages
- Keep components small and reusable
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

** Sahel Shrestha**

- GitHub: [@sahel](https://github.com/sahelstha)
- Email: sahel.xtha@gmail.com

## 🙏 Acknowledgments

- React and Vite communities for excellent tools
- Material-UI and Tailwind CSS for component libraries
- Stripe and PayPal for payment processing
- All contributors and users who provide feedback

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Stripe Documentation](https://stripe.com/docs)
- [React Router Documentation](https://reactrouter.com)

---
