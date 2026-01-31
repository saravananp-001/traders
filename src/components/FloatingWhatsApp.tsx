"use client";

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
            title="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp text-2xl"></i>
        </a>
    );
};

export default FloatingWhatsApp;
