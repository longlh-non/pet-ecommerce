import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'admin',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        }, 
        {
            name: 'customer-1',
            email: 'customer@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Product 1',
            category: 'Thuc pham chuc nang',
            image: '/images/product-1.jpg',
            price: 320,
            countInStock: 10,
            brand: 'Russia',
            rating: 4.5,
            numReviews: 10,
            description: 'Russian products',
        },
        {
            name: 'Product 2',
            category: 'Thuc pham chuc nang',
            image: '/images/product-1.jpg',
            price: 330,
            countInStock: 20,
            brand: 'Russia',
            rating: 5.0,
            numReviews: 10,
            description: 'Russian products',
        },
        {
            name: 'Product 3',
            category: 'Thuc pham chuc nang',
            image: '/images/product-1.jpg',
            price: 330,
            countInStock: 0,
            brand: 'Russia',
            rating: 4.0,
            numReviews: 11,
            description: 'Russian products',
        },
        {
            name: 'Product 4',
            category: 'Thuc pham chuc nang',
            image: '/images/product-1.jpg',
            price: 330,
            countInStock: 15,
            brand: 'Russia',
            rating: 4.5,
            numReviews: 18,
            description: 'Russian products',
        },
        {
            name: 'Product 5',
            category: 'Thuc pham chuc nang',
            image: '/images/product-1.jpg',
            price: 330,
            countInStock: 15,
            brand: 'Russia',
            rating: 4.0,
            numReviews: 10,
            description: 'Russian products',
        },
    ],
};

export default data;