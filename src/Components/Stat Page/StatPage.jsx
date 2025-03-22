import statsData from "../../statsData";
import StatBox from "../StatBox/StatBox";
const StatPage = () => {    
    return (
        <div className="w-full flex block justify-center items-center my-[200px]">
            {
                statsData.map((data,idx)=> <StatBox key={idx} percentage={data.percentage} text={data.text} bgColor={data.bgColor} textColor={data.textColor}  />)
            }
        </div>
    )
}

export default StatPage;