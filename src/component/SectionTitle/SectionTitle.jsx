
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="uppercase space-y-4 text-center">
            <p className="text-orange-600 font-bold">{subTitle}</p>
            <p className="underline underline-offset-2 w-1/3"></p>
            <h2 className="text-5xl font-bold text-black">{title}</h2>
        </div>
    );
};

export default SectionTitle;