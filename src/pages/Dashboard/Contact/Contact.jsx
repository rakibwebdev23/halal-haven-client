import imgBack from "../../../assets/cover/cover1.jpg";

const Contact = () => {
    return (
        <div
            className="hero min-h-screen mb-10"
            style={{
                backgroundImage: `url("${imgBack}")`
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Contact With Us</h1>
                    <p className="mb-5">
                        
                    </p>
                    <button className="btn btn-primary">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;