import { useState } from "react";
import { Button, Divider } from "../ui/core";
import IconButton from "../ui/core/IconButton";
import Avatar from "../ui/core/Avatar";
import Tooltip from "../ui/Tooltip";
import Page from "../ui/Page";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const options = [
  { size: 2, color: "blue" },
  { size: 3, color: "orange" },
  { size: 4, color: "green" },
  { size: 5, color: "light" },
  { size: 6, color: "gray" },
  { size: 7, color: "dark" },
  { size: 8, color: "secondary" },
  { size: 9, color: "primary" },
];

function Home() {
  const [loading, setLoading] = useState(0);
  const [disabled, setDisabled] = useState(0);
  return (
    <Page title="Welcome to Storelord">
      <p>Booklib home page dashboard</p>
      <p>Under construction.</p>
      <Tooltip text="Lorem ipsum dolor consectitor" placement="top">
        <Button size={8} bg="light" color="secondary">
          GETTING STARTED
        </Button>
      </Tooltip>
      <Divider />
      {options.map((opt) => (
        <Avatar
          size={opt.size}
          image="https://source.unsplash.com/random/100x100"
          style={{ marginRight: "10px" }}
        />
      ))}
      {options.map((opt) => (
        <Avatar
          size={opt.size}
          bg={opt.color}
          name="John Doe"
          style={{ marginRight: "10px" }}
        />
      ))}
      <Divider />
      <Button
        bg={disabled ? "secondary" : "light"}
        onClick={() => {
          setDisabled((disabled) => (loading ? true : !disabled));
        }}
        style={{ marginRight: "10px" }}
      >
        Disabled: {Boolean(disabled).toString()}
      </Button>{" "}
      <Button
        bg={loading ? "secondary" : "light"}
        onClick={() => {
          setLoading((loading) => !loading);
        }}
      >
        Loading: {Boolean(loading).toString()}
      </Button>
      <Divider />
      {options.map((opt) => (
        <Button
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          Color: {opt.color} - {opt.size}
        </Button>
      ))}
      <Divider />
      {options.map((opt) => (
        <Button
          outline
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          Color: {opt.color} - {opt.size}
        </Button>
      ))}
      <Divider />
      {options.map((opt) => (
        <IconButton
          outline
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          <Avatar
            size={opt.size}
            bg={opt.color}
            image="https://source.unsplash.com/random/100x100"
          />
        </IconButton>
      ))}
      {options.map((opt) => (
        <IconButton
          outline
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          <Avatar size={opt.size} bg={opt.color} name="John Dow" />
        </IconButton>
      ))}
      <Divider />
      {options.map((opt) => (
        <IconButton
          outline
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          <Avatar size={opt.size} bg={opt.color} />
        </IconButton>
      ))}
      <Divider />
      {options.map((opt) => (
        <IconButton
          solid
          icon={faRobot}
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        />
      ))}
      {options.map((opt) => (
        <IconButton
          icon={faRobot}
          size={opt.size}
          bg={opt.color}
          loading={loading}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        />
      ))}
    </Page>
  );
}

export default Home;