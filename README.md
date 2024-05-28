# Blogger App 📚✍️

## Demo 🚀

Check out the live demo: [https://blogger-kappa-pied.vercel.app](https://blogger-kappa-pied.vercel.app)

## How to Set Up and Run Locally 🛠️

1. Clone the repository
    ```bash
    git clone https://github.com/garg624/blog-app-from-markdown.git
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev
    ```
4. Build the app for production
    ```bash
    npm run build
    ```
5. Open `http://localhost:3000` in your browser to see the app in action

## Brief Description 📖

- Inside the `src/content/posts` directory, you'll find `.md` files that contain blog posts.

- In the `actions` folder, we read all the files from the `posts` folder and return them to the `Home` page.
- On the `Home` page, all the blogs are rendered.
- Each blog title is a link that navigates to a `/[slug]` page. Using `getPostBySlug`, we fetch the relevant post data.
- This page is statically generated (SSG), meaning the posts are pre-rendered as static HTML at build time.

## Features ✨

- **Responsive Design** 📱💻: Enjoy a seamless experience on any device.

- **Markdown Support** 📝: Write posts easily with Markdown.
- **Next.js App Router** 🚏: Utilizing the latest Next.js 14 app router.
- **Static Site Generation** 🌐: Pages are pre-rendered as static HTML.
- **Tailwind CSS** 🎨: Beautiful and customizable styles.
- **TypeScript** 🛡️: Robust and type-safe codebase.
- **Shadcn UI** 🌟: Elegant UI components.


Explore, create, and share your stories with ease! Happy blogging! 😊
