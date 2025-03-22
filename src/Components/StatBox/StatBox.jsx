const StatBox = ({percentage, text, textColor, bgColor }) => {
    return (
        <div className={`h-[fit-content] w-[350px] p-4 rounded-2xl ${bgColor}`}>
            <h2 className={`text-6xl font-bold ${textColor}`}>{percentage}</h2>
            <h2 className={`${textColor}`}>{text}</h2>
        </div>
    );
}

export default StatBox;