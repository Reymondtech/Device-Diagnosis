import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DeviceCard from "../components/DeviceCard";
import car from "../assets/car.png";
import phone from "../assets/phone.png";
import tv from "../assets/tv.png";
import radio from "../assets/radio.png";

export default function Home() {
  const { setDevice } = useContext(AppContext);

  const devices = [
    { name: "Car", icon: car },
    { name: "Phone", icon: phone },
    { name: "TV", icon: tv },
    { name: "Radio", icon: radio },
  ];

  return (
    <div className="container">
      <h1>Select Your Device</h1>

      <div className="device-grid">
        {devices.map((d) => (
          <DeviceCard
            key={d.name}
            name={d.name}
            icon={d.icon}
            onClick={() => {
              setDevice(d.name);
              window.location.href = `/diagnose/${d.name}`;
            }}
          />
        ))}
      </div>
    </div>
  );
}
