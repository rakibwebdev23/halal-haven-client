import { Helmet } from "react-helmet-async";

const HelmetShare = ({ caption }) => {
    return (

        <Helmet>
            <title>Halal Haven - {caption}</title>
        </Helmet>

    );
};

export default HelmetShare;