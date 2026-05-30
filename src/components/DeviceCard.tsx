interface Props {
  name: string;
  icon: string;
  onClick: () => void;
}

export default function DeviceCard({ name, icon, onClick }: Props) {
  return (
    <div className="device-card" onClick={onClick}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
