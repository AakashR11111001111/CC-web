const StatBox = ({percentage, text }) => {
    return (
        <div className="h-[100px] w-[400px]">
            <h2>{percentage}</h2>
            <h2>{text}</h2>
        </div>
    );
}

export default StatBox;