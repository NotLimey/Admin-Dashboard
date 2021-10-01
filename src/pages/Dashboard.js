import LineChart from "../components/LineChart";
import SmallInfoBox from "../components/SmallInfoBox";
import LargeInfoBox from "../components/LargeInfoBox";
import MediumInfoBox from "../components/MediumInfoBox";
import PieChart from "../components/PieChart";

const pieChartData = [
    {
        label: 'Pc',
        data: 40
    },
    {
        label: 'Mobile',
        data: 50
    },
    {
        label: 'Tablet',
        data: 10
    },
]

const rawDataVisitors = [
    {
        label: 33,
        data: 50435
    },
    {
        label: 34,
        data: 75489
    },
    {
        label: 35,
        data: 98399
    },
    {
        label: 36,
        data: 48399
    },
    {
        label: 37,
        data: 60000
    },
]



const Dashboard = () => {
    return(
        <> 
            <div className="pg-content-2 mt-2">
                <SmallInfoBox icon='people-outline' title="users" number='30k' />
                <SmallInfoBox icon='people-outline' title='visitors per month' number='120 000'/>
                <SmallInfoBox icon='card-outline' title='total income' number='306 000$' />
                <SmallInfoBox icon='card-outline' title='income per month' number='48 000$' />
            </div>
            <div className="pg-content-2">
                <LargeInfoBox title="Users per week">
                    <LineChart data={rawDataVisitors} backgroundColor='rgba(92, 184, 92, .2)' fill={true} borderColor="rgb(92, 184, 92)" />
                </LargeInfoBox>
                <MediumInfoBox title="Users by device">
                    <PieChart data={pieChartData} />
                </MediumInfoBox>
                <LargeInfoBox title="Users by device">
                    <PieChart data={pieChartData} />
                </LargeInfoBox>
            </div>
            
        </>
    )
}

export default Dashboard;