import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/home/layout.tsx",[
 index("routes/home/home.tsx"),
  ] ),
 
  route("login", "routes/auth/login.tsx"),
  route("register", "routes/auth/register.tsx"),
  layout("routes/student_dashboard/layout.tsx", [
 route("/student-dashboard", "routes/student_dashboard/student-dashboard.tsx"),
  ]),
 
] satisfies RouteConfig;