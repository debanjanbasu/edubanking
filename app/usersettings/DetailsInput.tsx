import React, { useState } from "react";

interface UserSettings {
  name: string;
  birthday: string;
  avatar: string;
  address: string;
  email: string;
}

const initialSettings: UserSettings = {
  name: "",
  birthday: "",
  avatar: "",
  address: "",
  email: "",
};

const UserSettingsPage: React.FC = () => {
  const [userSettings, setUserSettings] = useState<UserSettings>(initialSettings);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform actions with userSettings, e.g., send to server
    console.log("User settings:", userSettings);
  };

  return (
    <div style={{ color: "black" }}>
      <h1 style={{  marginTop: "-200px", fontWeight: "bold", textShadow: "rgba(0, 0, 0, 0.1)", fontSize: "22px" }}>
        My Details
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={userSettings.name}
            onChange={handleInputChange}
            style={{ backgroundColor: "transparent", border: "none", padding: "5px", color:"grey" }}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={userSettings.birthday}
            onChange={handleInputChange}
            style={{ backgroundColor: "transparent", border: "none", padding: "5px", color:"grey" }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={userSettings.email}
            onChange={handleInputChange}
            style={{ backgroundColor: "transparent", border: "none", padding: "5px", color:"grey" }}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userSettings.address}
            onChange={handleInputChange}
            style={{ backgroundColor: "transparent", border: "none", padding: "5px", color:"grey" }}
          />
        </label>
        <br />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
         <button type="submit" className="btn btn-outline btn-sm btn-primary text-xs">Save Settings</button>
        </div>
      </form>
    </div>
  );
};

export default UserSettingsPage;
