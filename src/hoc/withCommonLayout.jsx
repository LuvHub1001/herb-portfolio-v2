import { Sidebar, Footer } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div>
        <Sidebar />
        <div>
          <Component />
        </div>
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
