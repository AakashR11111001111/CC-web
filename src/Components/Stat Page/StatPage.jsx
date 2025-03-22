import statsData from "../../statsData";
import StatBox from "../StatBox/StatBox";
const StatPage = () => {
    return (
        <div className="w-full flex block justify-between gap-[20px] items-center my-[200px]">
            {
                statsData.map((data,idx)=> <StatBox key={idx} {...data}  />)
            }
        </div>
    )
}

export default StatPage;