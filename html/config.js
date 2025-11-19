// Site Configuration
const siteConfig = {
    title: "Complete HTML Guide",
    description: "Comprehensive guide covering everything from HTML fundamentals to advanced techniques",
    author: "Anand Binu Arjun",
    github: "https://github.com/AnandBinuArjun",
    website: "https://anandbinuarjun.live",
    email: "anandbinuarjun@zohomail.eu",
    version: "1.0.0",
    year: new Date().getFullYear(),
    sections: [
        { id: "basics", title: "HTML Basics" },
        { id: "intermediate", title: "Intermediate HTML" },
        { id: "advanced", title: "Advanced HTML" },
        { id: "certifications", title: "Certifications" },
        { id: "opensource", title: "Open Source Projects" },
        { id: "links", title: "Useful Resources" },
        { id: "examples", title: "Practical Examples" }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}