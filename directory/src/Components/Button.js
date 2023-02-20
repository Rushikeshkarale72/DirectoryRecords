import { Link } from "react-router-dom";

const Button = () => {
    return(
        <div className="button">
            <Button className="btn-page">
                <Link to={"/"}>Add New Person</Link>
            </Button>
            <Button className="btn-page">
                <Link to={"/retrieve"}>Retrieve Information</Link>
            </Button>
        </div>
    );
};

export default Button;