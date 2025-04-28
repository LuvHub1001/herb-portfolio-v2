import { Sidebar, Footer } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div>
        <Sidebar />
        <div className="ml-[280px]">
          <Component />
        </div>
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
