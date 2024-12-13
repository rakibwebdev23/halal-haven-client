
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="uppercase space-y-4 text-center lg:w-3/4 mx-auto font-poppins px-8 lg:px-0">
            <p className="text-orange-600 font-bold">{subTitle}</p>
            <h2 className="lg:text-5xl text-2xl text-center font-bold text-black">{title}</h2>
        </div>
    );
};

export default SectionTitle;