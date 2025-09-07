import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("hidden");
        document.getElementById("docs-card")?.classList.add("row-span-1");
        document.getElementById("docs-card-content")?.classList.add("flex-row");
        document.getElementById("background")?.classList.add("hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen selection:bg-red-600 selection:text-white">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-lg opacity-30 dark:opacity-10"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />

                <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 lg:px-24">
                    {/* Header */}
                    <header className="flex w-full justify-between items-center mb-12">
                        <div className="flex items-center gap-2">
                            <svg
                                className="h-12 w-12 text-red-600 dark:text-red-500"
                                viewBox="0 0 62 65"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG content omitted for brevity */}
                            </svg>
                            <span className="text-2xl font-bold">
                                Laravel Welcome
                            </span>
                        </div>

                        <nav className="flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                                    >
                                        Register Here
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    {/* Main Content */}
                    <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Documentation Card */}
                        <a
                            href="https://laravel.com/docs"
                            id="docs-card"
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            <div
                                id="screenshot-container"
                                className="w-full h-48 relative overflow-hidden"
                            >
                                <img
                                    src="https://laravel.com/assets/img/welcome/docs-light.svg"
                                    alt="Laravel Docs"
                                    className="w-full h-full object-cover dark:hidden"
                                    onError={handleImageError}
                                />
                                <img
                                    src="https://laravel.com/assets/img/welcome/docs-dark.svg"
                                    alt="Laravel Docs"
                                    className="hidden w-full h-full object-cover dark:block"
                                />
                            </div>

                            <div
                                id="docs-card-content"
                                className="p-6 flex flex-col gap-4"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Documentation
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Laravel has extensive documentation for all
                                    levels. Read from beginner to advanced
                                    topics to master the framework.
                                </p>
                                <span className="text-red-600 dark:text-red-500 font-semibold">
                                    Explore →
                                </span>
                            </div>
                        </a>

                        {/* Laracasts Card */}
                        <a
                            href="https://laracasts.com"
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col gap-4"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Laracasts
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Thousands of tutorials on Laravel, PHP, and
                                JavaScript development. Level up your coding
                                skills.
                            </p>
                            <span className="text-red-600 dark:text-red-500 font-semibold">
                                Watch →
                            </span>
                        </a>

                        {/* Laravel News Card */}
                        <a
                            href="https://laravel-news.com"
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col gap-4"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Laravel News
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Latest news and tutorials in the Laravel
                                ecosystem, including package releases.
                            </p>
                            <span className="text-red-600 dark:text-red-500 font-semibold">
                                Read →
                            </span>
                        </a>

                        {/* Vibrant Ecosystem Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col gap-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Vibrant Ecosystem
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Laravel's first-party tools like Forge, Vapor,
                                Nova, Envoyer, and Herd, along with open-source
                                libraries, empower your projects.
                            </p>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                        Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer>
                </div>
            </div>
        </>
    );
}
