import { Sidebar, Footer } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div>
        <Sidebar />
        <div>
          <Component />
        </div>
        <Footer />
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
