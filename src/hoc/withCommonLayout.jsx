import { Sidebar, Footer } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <main className="lg:ml-[280px] transition-all duration-300">
          <div className="container mx-auto px-4 py-6 lg:px-6 max-w-[1200px]">
            <div className="w-full text-sm lg:text-base [&_p]:whitespace-normal [&_span]:whitespace-normal [&_div]:whitespace-normal">
              <Component />
            </div>
          </div>
          <div className="mt-6 lg:mt-12">
            <Footer />
          </div>
        </main>
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
