import Footer from "@/components/layouts/footer";
import NavigationBar from "@/components/layouts/navbar";
import React from "react";

const App = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <main className="mx-6 md:mx-16">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
