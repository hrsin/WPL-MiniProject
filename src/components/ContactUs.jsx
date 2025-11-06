import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error
    const [showValidation, setShowValidation] = useState(false);
    const [shake, setShake] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear validation when user starts typing
        if (showValidation && value) {
            setShowValidation(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if all required fields are filled
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setShowValidation(true);
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }
        
        setSubmitStatus('loading');
        setShowValidation(false);
        
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                setSubmitStatus('success');
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    });
                    setSubmitStatus('idle');
                }, 3000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }
    };

    // Contact information data
    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            content: "info@orionracing.in",
            link: "mailto:info@orionracing.in"
        },
        {
            icon: "📱",
            title: "Phone",
            content: "+91 123 456 7890",
            link: "tel:+911234567890"
        },
        {
            icon: "📍",
            title: "Address",
            content: "K. J. Somaiya College of Engineering, Vidyavihar, Mumbai - 400077",
            link: null
        }
    ];

    // Social media links
    const socialLinks = [
        { name: "Instagram", href: "https://instagram.com/orionracing", icon: "📷" },
        { name: "LinkedIn", href: "https://linkedin.com/company/orionracing", icon: "💼" },
        { name: "Facebook", href: "https://facebook.com/orionracing", icon: "📘" }
    ];

    const getInputClassName = (fieldName, baseClass) => {
        const hasError = showValidation && !formData[fieldName];
        return `${baseClass} ${hasError ? 'border-2 border-red-500 ring-2 ring-red-500/50' : ''}`;
    };

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-4 md:px-8">
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .shake {
                    animation: shake 0.5s;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-light mb-6">Get In Touch</h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our team, sponsorship opportunities, or want to collaborate? 
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10">
                        <h2 className="text-3xl font-light mb-8 text-orange-400">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={getInputClassName('name', 'w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all')}
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className={getInputClassName('email', 'w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all')}
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={getInputClassName('subject', 'w-full bg-zinc-800/50 text-zinc-300 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none cursor-pointer')}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="sponsorship">Sponsorship</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="recruitment">Join the Team</option>
                                    <option value="media">Media & Press</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-zinc-300 mb-2 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your inquiry..."
                                    rows="6"
                                    className={getInputClassName('message', 'w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none')}
                                />
                            </div>

                            {/* Validation Error Message */}
                            {showValidation && (
                                <div className="bg-red-500/20 border-2 border-red-500 text-red-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="font-medium">Please fill in all required fields</span>
                                </div>
                            )}

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-500/20 border-2 border-green-500 text-green-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Message sent successfully!</span>
                                </div>
                            )}
                            
                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="bg-red-500/20 border-2 border-red-500 text-red-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="font-medium">Failed to send. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                                className={`w-full font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 ${shake ? 'shake' : ''} ${
                                    submitStatus === 'success' 
                                        ? 'bg-green-500 text-white cursor-not-allowed' 
                                        : submitStatus === 'loading'
                                        ? 'bg-orange-400/50 text-zinc-900 cursor-wait'
                                        : 'bg-orange-400 hover:bg-orange-500 text-zinc-900'
                                }`}
                            >
                                {submitStatus === 'loading' && (
                                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                )}
                                {submitStatus === 'success' && (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                                {submitStatus === 'idle' && 'Send Message'}
                                {submitStatus === 'loading' && 'Sending...'}
                                {submitStatus === 'success' && 'Sent!'}
                                {submitStatus === 'error' && 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-light mb-8 text-orange-400">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const content = (
                                        <div className="flex items-start space-x-4 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl hover:bg-zinc-900/70 transition-all">
                                            <div className="bg-orange-400/10 p-3 rounded-lg text-3xl">
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                                                <p className="text-zinc-300 break-words">{info.content}</p>
                                            </div>
                                        </div>
                                    );

                                    return info.link ? (
                                        <a key={index} href={info.link} className="block">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>{content}</div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="text-3xl font-light mb-8 text-orange-400">Follow Us</h2>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="bg-zinc-900/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-orange-400/20 hover:scale-110 transition-all duration-300 group flex flex-col items-center gap-2"
                                    >
                                        <span className="text-3xl">{social.icon}</span>
                                        <span className="text-sm text-zinc-400 group-hover:text-orange-400 transition-colors">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 h-64 flex items-center justify-center border border-zinc-800">
                            <div className="text-center text-zinc-500">
                                <div className="text-6xl mb-3">🗺️</div>
                                <p className="text-sm">Map integration can be added here</p>
                                <p className="text-xs mt-1">Google Maps / OpenStreetMap</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-20 text-center bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-12 md:p-16">
                    <h2 className="text-3xl md:text-4xl font-light mb-6">Visit Our Workshop</h2>
                    <p className="text-lg text-zinc-300 mb-4 max-w-2xl mx-auto">
                        Want to see our cars up close? Schedule a visit to our workshop at K.J. Somaiya College of Engineering.
                    </p>
                    <p className="text-zinc-400">
                        Workshop timings: Monday - Friday, 3:00 PM - 8:00 PM
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ContactUs;