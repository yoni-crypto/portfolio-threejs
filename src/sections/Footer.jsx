export default function Footer() {
    return (
        <footer className="bg-black-300 text-white py-4 w-full text-center">
            <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Yonas Addisu. All rights reserved.
            </p>
        </footer>
    );
}
