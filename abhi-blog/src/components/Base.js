
const Base = ({title="welcome to landing page", Children}) => {
    return (
        <div className="container-fluid">
        <h1>Header section</h1>

        {Children}

        <h1>Footer section</h1>
        </div>
    );
};
export default Base;