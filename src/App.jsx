import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Presents from "./components/Presents";
import { Slider } from "./components/Slider";
import GlobalStyles from "./components/styles/Global";
import { TagLineSection } from "./components/TagLineSection";

const theme = {
  colors: {
    header: "red",
    body: "#fff",
    footer: "#003333",
    yellow: "#F5FF00",
    blue: "#007BFF",
    gray: "#D3D3D3",
    pink: "#FE7EC9",
  },
  typography: {
    sm: "clamp(16px,3vw,28px)",
    md: "clamp(16px,3vw,32px)",
    lg: "clamp(16px,3vw,63px)",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Slider />
        <TagLineSection />
        <Presents />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          sit. Modi eveniet placeat sunt eaque numquam temporibus id ex hic,
          dolorum laboriosam consequuntur quia sed quo sapiente! Eligendi, omnis
          blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut, iste. Non autem officiis exercitationem, nobis voluptatibus quia
          excepturi architecto libero eaque ad ab voluptas molestias harum aut
          adipisci et voluptate!
        </p>
      </>
    </ThemeProvider>
  );
}

export default App;
