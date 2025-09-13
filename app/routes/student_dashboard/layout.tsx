import { Outlet } from "react-router";

const StudentDashboardLayout = () => {
  return (
    <div>
      <div className="min-h-screen relative">
        {/* This div now only contains the gradient background and the main content */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
          }}
        />
        Sidebar

        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
