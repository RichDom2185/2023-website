import { ParentComponent } from "solid-js";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

type Props = {
  withSidebar: boolean;
  withHeader: boolean;
};

const Page: ParentComponent<Props> = ({
  withSidebar = false,
  withHeader = false,
  children,
}) => {
  return (
    <div class="flex transition-colors duration-100">
      {withSidebar && <Sidebar hideOnMobile />}
      <div class="w-full">
        {withHeader && <Header />}
        {children}
      </div>
    </div>
  );
};

export default Page;
