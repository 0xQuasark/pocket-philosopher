# Pocket Philosopher

## Tech stack
- Tailwind
- Shadcn
- NextJS
- Clerk for Authorization


## Potential improvements (for project week)
- limit non-pros to:
  - only have x number of companions?
  - only being able to add philosophers?
  - limit the categories they can set (companion-form.tsx Select)

## Explanations
- (Companion Creation Form explanation)[https://youtu.be/PjYWpd7xkaM?si=hhEquGfIPFhf7BoN&t=8513]


## Follow ups
- (Dark/light mode force)[https://youtu.be/PjYWpd7xkaM?si=_sexRnuKEeW0uq93&t=3078]
- what are hydration issues (here)[https://youtu.be/PjYWpd7xkaM?si=0Bt8LpIcSKbrTvra&t=7322]


## Learnings
- how Typsescript uses Types
- dynamic rendering of className srings (clsx or cn, in my project)
- Debouncing techniques (/hooks/use-debounce)
  - Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it leads to intensive CPU usage. It is a process that adds a delay to the function execution. If the same event is triggered before the delay period, the timer resets. This is particularly useful in scenarios where you want to limit the rate of execution of a function, especially in events like scrolling, resizing, keypress etc. in JavaScript.
- Prisma (Sequelize equiv)
  - Prisma is an open-source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated and type-safe query builder that's tailored to your database schema. It currently supports PostgreSQL, MySQL, SQL Server and SQLite.
- Shadcn 
  - Shadcn is a lightweight, flexible, and efficient shadow DOM library for building web components. It provides a simple and intuitive API for creating and managing shadow DOM trees, making it easier to build encapsulated, reusable components.
- Uploading images using Cloudinary