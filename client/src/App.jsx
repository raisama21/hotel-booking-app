import "./styles/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import RoomLayout from "./layouts/RoomLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProfileLayout from "./layouts/ProfileLayout";

import Home from "./pages/Home";
import NotFound from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Rooms, { roomsDataLoader } from "./pages/rooms/Rooms";
import Details, { detailsDataLoader } from "./pages/rooms/Details";
import Payment from "./pages/rooms/Payment";
import Error from "./pages/rooms/Error";
import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import YourRoom, { roomDetailLoader } from "./pages/admin/YourRoom";
import AddRoom from "./pages/admin/AddRoom";
import MyProfile from "./pages/profile/MyProfile";
import MyBookings, { MyBookingsLoader } from "./pages/profile/MyBookings";
import ProfileError from "./pages/profile/profileError.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="rooms" element={<RoomLayout />} errorElement={<Error />}>
          <Route index element={<Rooms />} loader={roomsDataLoader} />
          <Route
            path="details/:detailsId"
            element={<Details />}
            loader={detailsDataLoader}
          />
          <Route path="details/:detailsId/payment" element={<Payment />} />
        </Route>

        <Route path="/" element={<ProfileLayout />}>
          <Route path="profile" element={<MyProfile />} />
          <Route
            path="bookings"
            element={<MyBookings />}
            loader={MyBookingsLoader}
            errorElement={<ProfileError />}
          />
        </Route>

        <Route path="signup" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route
          path="your-room"
          element={<YourRoom />}
          loader={roomDetailLoader}
        />
        <Route path="add-room" element={<AddRoom />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
