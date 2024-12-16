const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="w-full max-w-5xl mx-auto text-center px-4 lg:px-0 space-y-4 font-poppins">
            <p className="text-sm lg:text-lg font-semibold text-orange-600 tracking-widest uppercase">
                {subTitle}
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
