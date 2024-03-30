import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GaameGrid from "./components/GaameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GaameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
