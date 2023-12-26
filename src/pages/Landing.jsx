import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import TodoContainer from "../components/TodoContainer.jsx";


function Landing() {
  const data =useLocation();
  console.log(data)
  return (
      <div className="bg-black p-16 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header  name={data.state.user}></Header>

        {/* Cards components */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Cards>
          <Cards
            bgcolor={"#FD6663"}
            title={"26 December 23"}
            subtitle={"12:34 AM"}>
          </Cards>
          <Cards
            bgcolor={"#FCA201"}
            title={"Build Using"}
            subtitle={"React"}>
          </Cards>
        </div>
        
          <TodoContainer></TodoContainer>
      </div>
    </div>
  );
}

export default Landing;
