import { Tooltip, Button } from "../ui";
import Page from "../ui/Page";

function Home() {
  return (
    <Page title="Welcome to Storelord">
      <p>Booklib home page dashboard</p>
      <p>Under construction.</p>

      <Tooltip text="Lorem ipsum dolor consectitor" placement="top">
        <Button>Getting Started</Button>
      </Tooltip>
    </Page>
  );
}

export default Home;
