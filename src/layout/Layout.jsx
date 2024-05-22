import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import ReightSidebar from "../components/RightSidebar";

function Layout({ children }) {
  return (
    <div className="flex justify-between ">
      <LeftSidebar></LeftSidebar>
      {children}
      <RightSidebar></RightSidebar>
    </div>
  );
}

export default Layout;
