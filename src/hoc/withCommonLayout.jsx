import { Sidebar, Footer } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div className="overflow-x-hidden">
        <Sidebar />
        <div className="ml-[280px]">
          <Component />
        </div>
        <Footer />
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
