import Brakingnews from "../sheard/Brakingnews";
import Center from "../sheard/Center";
import Header from "../sheard/Header";
import Leftsidenav from "../sheard/Leftsidenav";
import Navbar from "../sheard/Navbar";
import Rightsidenav from "../sheard/Rightsidenav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brakingnews></Brakingnews>
            <Navbar></Navbar>
            <div className=" grid md:grid-cols-4 gap-4 mt-6">
                <div className="border">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className=" lg:col-span-2 ">
                  <Center></Center>
                </div>
                <div className="border">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;