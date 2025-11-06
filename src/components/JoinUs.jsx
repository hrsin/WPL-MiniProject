import { useState } from "react";

function JoinUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        fieldOfStudies: "",
        degree: "Bachelor",
        semester: "1",
        interest: "Management",
        message: ""
    });
    
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('loading');
        
        try {
            const response = await fetch('http://localhost:5000/api/join-us', {
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
                        firstName: "",
                        lastName: "",
                        email: "",
                        mobile: "",
                        fieldOfStudies: "",
                        degree: "Bachelor",
                        semester: "1",
                        interest: "Management",
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

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-light mb-12 text-center">Join Our Team</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Harshvardhan"
                                className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Singh"
                                className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                            />
                        </div>
                    </div>

                    {/* Email and Mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="harshvardhan.s@somaiya.edu"
                                className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">Mobile number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+91 79 0088 0023"
                                className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                            />
                        </div>
                    </div>

                    {/* Field of Studies and Semester */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">Field of studies</label>
                            <input
                                type="text"
                                name="fieldOfStudies"
                                value={formData.fieldOfStudies}
                                onChange={handleChange}
                                placeholder="Electronics and Computer Science Engineering"
                                className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-zinc-300 mb-2 font-medium">Semester</label>
                            <div className="flex gap-3">
                                <select
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleChange}
                                    className="flex-1 bg-zinc-800/50 text-zinc-300 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Master">Master</option>
                                    <option value="PhD">PhD</option>
                                </select>
                                <select
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    className="w-32 bg-zinc-800/50 text-zinc-300 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none cursor-pointer text-center"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <option key={num} value={num}>{num} . Semester</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Interest */}
                    <div>
                        <label className="block text-zinc-300 mb-2 font-medium">I am interested in</label>
                        <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full bg-zinc-800/50 text-zinc-300 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none cursor-pointer"
                        >
                            <option value="Management">Management</option>
                            <option value="Chassis">Chassis</option>
                            <option value="Powertrain">Powertrain</option>
                            <option value="Aerodynamics">Aerodynamics</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-zinc-300 mb-2 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="I want to join Orion Racing India because..."
                            rows="6"
                            className="w-full bg-zinc-800/50 text-zinc-300 placeholder-zinc-500 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none"
                        />
                    </div>
                    
                    <div>
                        <a href="/privacy" className="text-orange-400 hover:text-orange-500 transition-colors underline font-medium">
                            Privacy Policy
                        </a>
                    </div>
                    
                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <div className="bg-green-500/20 border-2 border-green-500 text-green-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">Application submitted successfully!</span>
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {submitStatus === 'error' && (
                        <div className="bg-red-500/20 border-2 border-red-500 text-red-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="font-medium">Failed to submit. Please try again.</span>
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={submitStatus === 'loading' || submitStatus === 'success'}
                        className={`w-full font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 ${
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
                        {submitStatus === 'idle' && 'Apply now!'}
                        {submitStatus === 'loading' && 'Submitting...'}
                        {submitStatus === 'success' && 'Submitted!'}
                        {submitStatus === 'error' && 'Apply now!'}
                    </button>
                </form>
            </div>
        </main>
    );
}

export default JoinUs;