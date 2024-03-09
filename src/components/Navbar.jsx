import { React, useEffect, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { StateContext } from "../contexts/ContextProvider";

const NavButton = ({ customerFunc, icon, color, dotColor }) => (
  <div>
    <button
      type="button"
      style={{ color }}
      onClick={() => customerFunc()}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </div>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setscreenSize,
    currentColor,
  } = useContext(StateContext);
  useEffect(() => {
    const handleSize = () => setscreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex w-full justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        customerFunc={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />
      <div className="flex">
        <NavButton
          customerFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color={currentColor}
        />
        <NavButton
          customerFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03c9D7"
        />
        <NavButton
          customerFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="#03c9D7"
        />
        <div>
          <div
            className="flex items-center gap-2 cursor-pointer p-1
            hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}>
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </div>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
